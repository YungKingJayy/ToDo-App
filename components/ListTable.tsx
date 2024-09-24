"use client";

import React, { useState, useEffect } from "react";
import { DataTable } from "./DataTable";
import { Lists, Columns } from "./columns";

// Fetch data from the API
async function fetchLists(): Promise<Lists[] | undefined> {
  try {
    const res = await fetch("http://localhost:3000/api/lists", {
      cache: "no-store",
    });

    if (!res.ok) {
      throw new Error("Failed to fetch lists");
    }

    const data = await res.json();
    console.log("Fetched data:", data);
    return data.lists;
  } catch (error) {
    console.error("Error fetching data:", error);
    return undefined;
  }
}


const ListTable = ({
  taskChange,
  onTaskChange,
  showToast,
}: {
  taskChange: boolean;
  onTaskChange: () => void;
  showToast: (title: string, message: string) => void;
}) => {
  const [data, setData] = useState<Lists[] | undefined>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getData = async () => {
      const fetchedData = await fetchLists();
      console.log("Data inside useEffect:", fetchedData);
      setData(fetchedData);
      setLoading(false);
    };
    getData();
  }, [taskChange]);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container mx-auto">
      {data && data.length > 0 ? (
        <DataTable columns={Columns(onTaskChange, showToast)} data={data} />
      ) : (
        <div>No lists found.</div>
      )}
    </div>
  );
};

export default ListTable;
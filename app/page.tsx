"use client";

import AddTask from "@/components/AddTask";
import ListTable from "@/components/ListTable";
import { useToastNotification } from "@/hooks/useToast";
import { useState } from "react";

export default function Home() {
  const { showToast } = useToastNotification();

  const [taskChange, setTaskChange] = useState(false);

  const handleTaskChange = () => {
    setTaskChange(!taskChange);
  };

  return (
    <main className="flex justify-center w-full min-h-screen py-32 px-4 bg-light-background dark:bg-dark-background">
      <div className="w-full max-w-screen-lg flex flex-col items-center gap-6">
        <h1 className="font-extrabold text-light-primaryText dark:text-dark-primaryText text-2xl">
          Todo List App
        </h1>
        <AddTask onTaskChange={handleTaskChange} showToast={showToast} />
        <ListTable taskChange={taskChange} onTaskChange={handleTaskChange} showToast={showToast} />
      </div>
    </main>
  );
}

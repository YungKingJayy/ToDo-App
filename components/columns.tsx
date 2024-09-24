"use client";

import { ColumnDef } from "@tanstack/react-table";
import Modal from "./Modal";
import { FaRegEdit } from "react-icons/fa";
import { RiDeleteBin6Line } from "react-icons/ri";

export type Lists = {
  _id: { $oid: string };
  title: string;
  description: string;
  isDone: boolean;
  createdAt: Date;
  updatedAt: Date;
  __v: { $numberInt: string };
};

interface RowProps {
  row: {
    original: {
      _id: { $oid: string };
      title: string;
      description: string;
      createdAt: Date;
    };
  };
}



export const Columns = (onTaskChange: () => void, showToast: (title: string, description: string) => void): ColumnDef<Lists>[] => {
  return [
  {
    accessorKey: "title",
    header: () => (
      <div className="font-bold text-light-primaryText dark:text-dark-primaryText p-2">
        Task
      </div>
    ),
    cell: ({ row }: RowProps) => (
      <div className="flex flex-col p-2">
        <h2 className="font-semibold text-light-primaryText dark:text-dark-primaryText text-xs md:text-base">
          {row.original.title}
        </h2>
        <p className="text-light-secondaryText dark:text-dark-secondaryText text-xs md:text-base">
          {row.original.description}
        </p>
        <p>
          <span className="text-light-secondaryText dark:text-dark-secondaryText text-[0.5rem] md:text-xs">
            Created:{" "}
            {new Date(row.original.createdAt).toLocaleDateString()}
          </span>
        </p>
      </div>
    ),
  },
  {
    accessorKey: "action",
    header: () => (
      <div className="hidden md:block font-bold text-light-primaryText dark:text-dark-primaryText text-center">
        Action
      </div>
    ),
    cell: ({ row }: RowProps) => (
      <div className="flex flex-col md:flex-row justify-between items-center gap-2">
        <Modal
          header="Edit Task"
          details="Fill out the form below to add a new task to your list."
          title={row.original.title}
          description={row.original.description}
          buttonText="Submit"
          buttonVariant="icon_yellow"
          triggerSize="icon"
          hasForm
          hasIcon
          icon={<FaRegEdit />}
          onSave={async (newTitle, newDescription) => {
            try {
              const res = await fetch(
                `http://localhost:3000/api/lists/${row.original._id}`,
                {
                  method: "PUT",
                  headers: {
                    "Content-Type": "application/json",
                  },
                  body: JSON.stringify({ newTitle, newDescription }),
                }
              );
              const closeBtn = document.getElementById("close-btn");
              closeBtn?.click();
              onTaskChange();
              showToast("Task Updated Successfully", "Your task has been updated.");

              if (!res.ok) {
                throw new Error("Failed to update task");
              }
            } catch (error) {
              showToast("Failed to Update Task", String(error));
            }
          }}
        />
        <Modal
          header="Delete Task"
          details="Are you sure you want to delete this task?"
          buttonText="Delete"
          buttonVariant="icon_red"
          triggerSize="icon"
          hasForm={false}
          hasIcon
          icon={<RiDeleteBin6Line />}
          onDelete={async () => {
            try {
              await fetch(
                `http://localhost:3000/api/lists?id=${row.original._id}`,
                {
                  method: "DELETE",
                }
              );
              const closeBtn = document.getElementById("close-btn");
              closeBtn?.click();
              onTaskChange();
              showToast("Task Deleted Successfully", "Your task has been deleted.");
            } catch (error) {
              showToast("Failed to Delete Task", String(error));
            }
          }}
        />
      </div>
    ),
    size: 10,
  },
];
}
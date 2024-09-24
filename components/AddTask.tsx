"use client";

import Modal from "./Modal";

interface AddTaskProps {
  onTaskChange: () => void;
  showToast: (title: string, message: string) => void;
}

const AddTask: React.FC<AddTaskProps> = ({ onTaskChange, showToast }) => {
  const handleSave = async (title: string, description: string) => {
    try {
      await fetch("http://localhost:3000/api/lists", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ title, description, isDone: false }),
      });
      const closeBtn = document.getElementById("close-btn");
      closeBtn?.click();
      onTaskChange();
      showToast("Task Added Successfully", "Your task has been added.");
    } catch (error) {
      showToast("Failed to Add Task", String(error));
    }
  };

  return (
    <Modal
      header="Add a Task"
      details="Fill out the form below to add a new task to your list."
      title=""
      description=""
      triggerText="Add Task +"
      buttonText="Submit"
      triggerSize="lg"
      hasForm
      hasIcon={false}
      onSave={handleSave}
    />
  );
};

export default AddTask;

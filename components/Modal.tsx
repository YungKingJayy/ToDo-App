"use client";

import React, { useState, useCallback } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "./ui/textarea";
import { cn } from "@/lib/utils";

interface ModalProps {
  header: string;
  details: string;
  title?: string;
  description?: string;
  triggerText?: string;
  buttonText?: string;
  buttonVariant?:
    | "icon"
    | "icon_red"
    | "icon_yellow"
    | "link"
    | "default"
    | "destructive"
    | "outline"
    | "secondary"
    | "ghost";
  triggerSize?: "default" | "sm" | "lg" | "icon";
  size?: "default" | "sm" | "lg" | "icon";
  buttonClassNames?: string;
  hasForm: boolean;
  hasIcon: boolean;
  icon?: React.ReactNode;
  onSave?: (title: string, description: string) => void;
  onDelete?: () => void;
}

const Modal: React.FC<ModalProps> = ({
  header,
  details,
  title = "",
  description = "",
  triggerText,
  buttonText,
  buttonVariant,
  triggerSize,
  size,
  buttonClassNames,
  hasForm,
  hasIcon,
  icon,
  onSave,
  onDelete,
}) => {
  const [taskTitle, setTaskTitle] = useState<string>(title);
  const [taskDescription, setTaskDescription] = useState<string>(description);

  const handleSubmit = useCallback(
    (e: React.FormEvent<HTMLFormElement> | React.MouseEvent) => {
      e.preventDefault();
      if (!taskTitle || !taskDescription) {
        console.error("Please fill out all fields before submitting.");
        return;
      }
      onSave?.(taskTitle, taskDescription);
    },
    [taskTitle, taskDescription, onSave]
  );

  const handleDelete = useCallback(
    (e: React.MouseEvent<HTMLButtonElement>) => {
      e.preventDefault();
      onDelete?.();
    },
    [onDelete]
  );

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          variant={buttonVariant}
          size={triggerSize}
          className={cn("w-full uppercase font-bold", buttonClassNames)}
        >
          {hasIcon && icon}
          {triggerText}
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[728px]">
        <DialogHeader>
          <DialogTitle>{header}</DialogTitle>
          <DialogDescription>{details}</DialogDescription>
        </DialogHeader>
        {hasForm && (
          <form className="grid gap-4 py-4" onSubmit={handleSubmit}>
            <div className="flex flex-col items-start gap-4">
              <Label htmlFor="title" className="text-right">
                Title
              </Label>
              <Input
                id="title"
                placeholder="Type title of your task here."
                value={taskTitle}
                onChange={(e) => setTaskTitle(e.target.value)}
              />
            </div>
            <div className="flex flex-col items-start gap-4">
              <Label htmlFor="description" className="text-right">
                Description
              </Label>
              <Textarea
                id="description"
                placeholder="Type description of your task here."
                className="col-span-3"
                value={taskDescription}
                onChange={(e) => setTaskDescription(e.target.value)}
              />
            </div>
          </form>
        )}
        <DialogFooter>
          <DialogClose asChild>
            <Button
              type="submit"
              size={size}
              onClick={hasForm ? handleSubmit : handleDelete}
            >
              {buttonText}
            </Button>
          </DialogClose>
          <DialogClose asChild>
            <Button
              size={size}
              variant="outline"
              className="invisible absolute w-0 h-0 p-0 m-0"
              id="close-btn"
            />
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default Modal;

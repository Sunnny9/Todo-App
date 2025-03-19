"use client";

import React from "react";
import { Checkbox } from "../ui/checkbox";
import { Button } from "../ui/button";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
} from "@radix-ui/react-alert-dialog";
import {
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "../ui/alert-dialog";
import { deleteTodo, updateTodo } from "@/app/action";

type Props = {};

const TodoItem = ({ children, item }: Props) => {
  return (
    <li className="flex items-center gap-4">
      <div>
        <Checkbox
          className="border-[#1E1211]"
          id="toggleComplete"
          checked={item.isDone}
          onCheckedChange={(isDone) => {
            updateTodo({ ...item, isDone });
          }}
        />
        <label htmlFor="toggleComplete" className="sr-only ">
          Toggle Complete Todo
        </label>
      </div>
      <p className="flex-1 line-clamp-2">{children}</p>

      <AlertDialog>
        <AlertDialogTrigger asChild>
          <Button className="bg-[#1E1211] text-[#B2A39D]">Delete</Button>
        </AlertDialogTrigger>
        <AlertDialogContent className="bg-[#B2A39D] border-[#1E1211] text-white">
          <AlertDialogHeader>
            <AlertDialogTitle className="text-[#1E1211]">
              Are you absolutely sure?
            </AlertDialogTitle>
            <AlertDialogDescription>
              This action cannot be undone. This will permanently delete your
              data and remove your data from our servers.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel className="text-[#1E1211]">
              Cancel
            </AlertDialogCancel>
            <AlertDialogAction
              onClick={() => deleteTodo(item.id)}
              className="bg-[#1E1211] text-[#B2A39D] rounded-[8] w-[15%] h-[100%]"
            >
              Delete
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>

      {/* <form
              className="flex p-2 gap-3 justify-between items-center  rounded-2xl"
              action={updateTodo}
            >
              <input type="hidden" name="todoId" value={item.id} />
              <button className="border-input bg-background text-foreground hover:bg-accent hover:text-foreground focus-visible:border-ring focus-visible:ring-ring/50 inline-flex items-center rounded-s-md border px-3 text-sm font-medium transition-[color,box-shadow] outline-none focus:z-10 focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50">
                Edit
              </button>
            </form> */}
    </li>
  );
};

export default TodoItem;

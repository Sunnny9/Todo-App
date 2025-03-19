import React from "react";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { addTodo } from "@/app/action";
import { Button } from "../ui/button";

const TodoForm = () => {
  return (
    <form className="*:not-first:mt-2 min-w-sm" action={addTodo}>
      <Label htmlFor="todo-text" className="sr-only">
        Input with end button
      </Label>
      <div className="flex rounded-md shadow-xs">
        <Input
          id="todo-text"
          name="todoText"
          className="-me-px flex-1 rounded-e-none shadow-none focus-visible:z-10 border-[#1E1211]"
          placeholder="Enter your todo here.."
          type="text"
          required
        />
        <Button className=" rounded-s-none text-[#B2A39D] bg-[#1E1211]">
          Add Todo
        </Button>
      </div>
    </form>
  );
};

export default TodoForm;

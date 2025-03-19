import TodoFilter from "@/components/todo/todoFilter";
import TodoForm from "@/components/todo/todoForm";
import TodoList from "@/components/todo/todoList";
import React from "react";

const Todo = async ({ searchParams }) => {
  const filter = (await searchParams).filter;
  return (
    <div className="flex flex-col items-center  gap-4 h-screen max-h-screen  bg-[#B2A39D] text-[#1E1211]">
      <header>
        <h1 className="text-4xl font-semibold mt-4">Todo App</h1>
      </header>
      <TodoForm />
      <main className="flex-1 w-full overflow-auto p-4">
        <TodoList filter={filter} />
      </main>
      <TodoFilter filter={filter} />
    </div>
  );
};

export default Todo;

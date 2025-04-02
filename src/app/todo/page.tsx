import TodoForm from "@/components/todo/todoForm";
import TodoList from "@/components/todo/todoList";
import TodoFilter from "@/components/todo/todoFilter";
import React from "react";

const Todo = async ({ searchParams }) => {
  const filter = (await searchParams).filter;
  return (
    <div
      style={{ backgroundImage: "url('/images/todo.jpeg')" }}
      // style={{ backgroundImage: "url('/images/todo.jpeg')" }}
      className="flex flex-col  justify-between items-center  gap-4 h-screen max-h-screen  bg-[#B2A39D] text-[#1E1211] "
    >
      <div className="flex flex-col items-center w-[50%] h-[80%] bg-white/15 backdrop:blur border-2 border-black shadow-black shadow-xl mt-13 rounded-4xl p-9">
        <header>
          <h1 className="text-4xl font-semibold mb-6 ">Todo App</h1>
        </header>
        <TodoForm />
        <main className="flex-1 w-full overflow-auto p-4">
          <TodoList filter={filter} />
        </main>
      </div>
      <TodoFilter filter={filter} />
    </div>
  );
};

export default Todo;

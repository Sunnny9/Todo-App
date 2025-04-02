import React from "react";
import TodoItem from "./todoItem";

const TodoList = async ({ filter }) => {
  let url = "http://localhost:3001/todoList";

  if (filter) url += `?isDone=${filter === "completed"}`;

  const res = await fetch(url, {
    next: { tags: ["abc"] },
  });
  const json = await res.json();
  return (
    <ul className="flex flex-col  gap-4 mt-5">
      {json.map((item) => {
        return (
          <TodoItem key={item.id} item={item}>
            {item.todoItem}
          </TodoItem>
        );
      })}
    </ul>
  );
};

export default TodoList;

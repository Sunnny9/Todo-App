"use server";

import { revalidateTag } from "next/cache";

export async function addTodo(formData: FormData) {
  const todoItem = formData.get("todoText");

  await fetch("http://localhost:3000/todoList", {
    method: "POST",
    body: JSON.stringify({
      todoItem,
      isDone: false,
    }),
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
  });
  revalidateTag("abc");
}

export async function deleteTodo(id: number) {
  await fetch(`http://localhost:3000/todoList/${id}`, {
    method: "DELETE",
  });
  revalidateTag("abc");
}

export async function updateTodo(data) {
  await fetch(`http://localhost:3000/todoList/${data.id}`, {
    method: "PUT",
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
  });
  revalidateTag("abc");
}

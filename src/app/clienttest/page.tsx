"use client";

import React, { useEffect, useState } from "react";

const ClientTest = () => {
  const [data, setData] = useState([]);
  const loadData = async () => {
    const res = await fetch("http://localhost:3000/todoList");
    const json = await res.json();
    setData(json);
  };

  useEffect(() => {
    loadData();
  }, []);

  return (
    <div>
      {data.map((item) => {
        return <p>{item.todoItem}</p>;
      })}
    </div>
  );
};

export default ClientTest;

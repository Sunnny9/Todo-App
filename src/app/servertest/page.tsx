import React from 'react'



const ServerTest = async () => {
    const res = await fetch("http://localhost:3000/todoList");    
    const json = await res.json();
    console.log(json);
    
  return (
    <div>
        {json.map((item) => {
            return <p key={item.id}>{item.todoItem}</p>;
        })}
    </div>
  )
}

export default ServerTest
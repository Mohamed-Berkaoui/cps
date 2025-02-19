import React from "react";
import TodoBox from "./TodoBox";

function TodosContainer({ setTodos, todos }) {

  return (
    <div className="todos-container">
      {todos.map((e) => (
        <TodoBox todo={e}  setTodos={setTodos}/>
      ))}
    </div>
  );
}

export default TodosContainer;

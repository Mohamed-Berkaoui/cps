import React, { useState } from "react";
import { useSelector } from "react-redux";
import Todo from "./Todo";

function TodosList() {
  const [status, setStatus] = useState("all");

  const data = useSelector(function (state) {
    if (status == "all") return state;
    else if (status == "done") return state.filter((todo) => todo.isDone);
    else return state.filter((todo) => !todo.isDone);
  });
  return (
    <div>
      <select name="" id="" onChange={(e) => setStatus(e.target.value)}>
        <option value="all"> all</option>
        <option value="done"> done</option>
        <option value="pending"> pending</option>
      </select>

      <div>
        {data.map((todo) => (
          <Todo key={todo.id} todo={todo} />
        ))}
      </div>
    </div>
  );
}

export default TodosList;

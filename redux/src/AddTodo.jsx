import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addAction } from "./redux/actions";

function AddTodo() {

    const todos=useSelector(function(state){return state})
    const dispatch=useDispatch()
function handleAddTodo(event){
    event.preventDefault()
    const newTodo={
        task:event.target.task.value,
        isDone:false,
        id:todos.length+1
    }


    dispatch(addAction(newTodo))

}
  return (
    <form style={{ border: "2px solid black", padding: "10px" }} onSubmit={handleAddTodo}>
      <input type="text" name="task" />
      <button type="submit">submit</button>
    </form>
  );
}

export default AddTodo;

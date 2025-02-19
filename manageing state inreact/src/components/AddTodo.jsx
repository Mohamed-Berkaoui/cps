import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import appAxios from "../appAxios";
import PropTypes from "prop-types";
import { AddTodoAction, store } from "../App";
import { useContext } from "react";

AddTodo.propTypes={
    dispatchTodos:PropTypes.func
}
function AddTodo() {
    const {dispatchTodos}=useContext(store)
    function handleAddTodo(event){
        event.preventDefault()
        const newTodo={task:event.target.task.value,status:"pending"}
 
        appAxios.post('/todos',newTodo)
        .then(res=>dispatchTodos(AddTodoAction(res.data)))
        .catch(e=>console.log(e.message))
    }
  return (
<div style={{ height:"70vh" ,display:"flex",justifyContent:"center",alignItems:"center"}}>
<Form className=" w-50 bg-primary p-4" onSubmit={handleAddTodo}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>add todo</Form.Label>
        <Form.Control type="text" placeholder="new task ..." name="task"/>
      </Form.Group>
      <Button variant="dark" type="submit">
        Submit
      </Button>
    </Form>
</div>
  );
}

export default AddTodo;

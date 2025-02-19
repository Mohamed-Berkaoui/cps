import { Accordion } from "react-bootstrap";
import PropTypes from "prop-types";
import { useContext } from "react";
import { store } from "../App";

function Home() {
    const {todos}=useContext(store)
  return (
    <Accordion defaultActiveKey="1" className="w-75 mx-auto  my-4" >
      {todos.map((todo) => {
        return (
          <Accordion.Item eventKey={todo.id} key={todo.id}>
            <Accordion.Header> {todo.task} </Accordion.Header>
            <Accordion.Body> {todo.status} </Accordion.Body>
          </Accordion.Item>
        );
      })}
    </Accordion>
  );
}

Home.propTypes ={
    todos:PropTypes.array
}

export default Home;


import { useState } from 'react'
import './App.css'
import AddTodo from './components/AddTodo'
import TodosContainer from './components/TodosContainer'

function App() {

  const[todos,setTodos]=useState([])
  return (
    <div  className="app">
     <AddTodo setTodos={setTodos} todos={todos}/>
     <TodosContainer setTodos={setTodos} todos={todos} />
    </div>
  )
}

export default App

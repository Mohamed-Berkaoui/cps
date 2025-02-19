import { createContext, useEffect, useReducer } from "react";
import AddTodo from "./components/AddTodo";
import Home from "./components/Home";
import Navigator from "./components/Navigator";
import { Routes, Route } from "react-router-dom";
import appAxios from "./appAxios";


export const store=createContext()


function reducer(state,action){
switch (action.type){
  case 'GETTODOS':return [...state,...action.payload];
  case "ADDTODO":return [...state,action.payload]
  default:return state
}
}
export function AddTodoAction(payload){
  return {
    type:"ADDTODO",
    payload
  }
}
function getTodosAction(payload){
  return {
  type:"GETTODOS",
  payload
  }
}
function App() {
  const [todos,dispatchTodos]=useReducer(reducer,[])

  useEffect(function(){
  appAxios.get('/todos')
  .then(res=>dispatchTodos(getTodosAction(res.data)))
  },[])
  return (
    <store.Provider value={{todos:todos,dispatchTodos}}>
      <Navigator />
      <Routes>
        <Route  path="/" element={<Home />} />
        <Route  path="/add" element={<AddTodo />} />
      </Routes>
    </store.Provider>
  );
}

export default App;

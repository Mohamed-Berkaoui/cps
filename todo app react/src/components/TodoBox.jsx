import React from 'react'

function TodoBox({todo,setTodos}) {
    function handleDelete(){
        setTodos((state)=>state.filter(td=>td.id!=todo.id))
    }
    function handleupdate(){
        setTodos((state)=>state.map(td=>td.id==todo.id?{...td,status:td.status=="pending"?"done":"pending"}:td))
    }
  return (
    <div className='box'> 
    <h4>{todo.task} </h4>
    <p>{todo.status} </p>
    <button onClick={handleupdate}>update</button>
    <button onClick={handleDelete}>delete</button>
    </div>
  )
}

export default TodoBox
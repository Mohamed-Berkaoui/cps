import { useDispatch } from 'react-redux'
import { updateAction } from './redux/actions'

function Todo({todo}) {
    const dispatch=useDispatch()
    function handleUpdate(){
        dispatch(updateAction(todo))
    }
  return (
    <div style={{border:"2px solid black" ,padding:"10px" ,margin:'5px'}}>
<h2>{todo.task}</h2>
<p>{todo.isDone?"done":"pending"}</p>
<button onClick={handleUpdate}>update status</button>

    </div>
  )
}

export default Todo
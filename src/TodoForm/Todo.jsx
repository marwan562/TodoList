

function Todo(props) {
 
  return (
    <div className='items-center text-center flex justify-center'>
          <div 
          style={{textDecoration: props.todo.complete ? "line-through" : ""}}
          onClick={props.toggelComplete}
          className=' cursor-pointer '>
            {props.todo.text}
          </div>
    <div>
                <button 
                onClick={props.onDelete}
                className='bg-gray-500   p-1 ml-10 rounded-full w-6  '
                >X</button>
            </div>
    </div>
  )
}

export default Todo

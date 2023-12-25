import shortid from 'shortid'
import { useState } from "react"


function TodoForm(props) {
    const [text , setText] = useState('')
    const handleSubmit = (e) => {
        e.preventDefault();
        setText('')
        props.onSubmit({
            id :shortid.generate(),
            text: text,
            complete:false,
        })
    }
    
  return (

    <form
    onSubmit={handleSubmit}
     className="  items-center text-center mt-40">

        <input 
        value={text}
        type="text"
        className=" outline "
        onChange={(e) => setText(e.target.value)}
        />

        <button
        onClick={handleSubmit}
         className=" bg-gray-500 rounded-xl m-3 p-1">Add Todo</button>
    </form>
  )
}

export default TodoForm

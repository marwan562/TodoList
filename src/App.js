import { useState } from "react";
import TodoForm from "./TodoForm/TodoForm";
import Todo from "./TodoForm/Todo";



function App() {
  let [todos , setTodos] = useState([])
  const [todoToShow, setTodoToShow] = useState('all')
  const addTodo = (todo) => {
    setTodos([todo , ...todos])
  };

  const toggelComplete = (id) => { setTodos(
    todos.map((todo) => {
        if(todo.id === id){
          return {
            ...todo ,
            complete : !todo.complete
          }
        }else{
          return todo;
        }
    })
  )
    
  }

  const handleDelete = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id))
  }
  const updateTodoToShow = (S) => {
    setTodoToShow(S)
  }
  if(todoToShow === 'active'){
   todos = todos.filter((todo) => !todo.Complete)
  }else if(todoToShow === 'complete'){
    todos = todos.filter((todo) => todo.Complete)
  }
  return (
    <div className=" container m-auto">
          
      <TodoForm onSubmit={addTodo}/>

      {
        todos.map((todo) =>(
          <Todo

           key={todo.id} 
           todo={todo}
           onDelete={() => handleDelete(todo.id)}
           toggelComplete = {() => toggelComplete(todo.id)}
           />
         
        ))    
      } 

      <div className=" mt-3 flex justify-center items-center text-center  gap-6">

           <button
           onClick={() => updateTodoToShow('all')}
           className="btn-primary"
           >All</button>


           <button 
           onClick={() => updateTodoToShow('active')}
           className="btn-primary"
           >Active</button>


           <button
           onClick={() => updateTodoToShow('complete')}
           className="btn-primary"
           >Complete</button>
      </div>

    </div>
  );
}

export default App;

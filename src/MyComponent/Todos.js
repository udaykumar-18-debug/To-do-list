import React from 'react';
import TodoItems from './TodoItems';   

const Todos = (props) => {
  return (
    <div className="container">
      <h3 className="text-center">Todos List</h3>

      {props.todos.map((todo)=>{
        return <TodoItems todo={todo} />

      })}

    </div>
  )
}

export default Todos;

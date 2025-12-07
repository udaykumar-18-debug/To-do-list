import React from 'react'

export function TodoItems({ todo, onDelete }) {
  return (
    <div>
      <h4>{todo.title}</h4>
      <p>{todo.Description}</p>
      <button className="btn btn-sm btn-danger" 
      
      
      
      >Delete</button>

    </div>
  );
}

export default TodoItems;

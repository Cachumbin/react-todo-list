import React from 'react'

const TodoItem = ({ completed, id, title, toggleTodo, deleteTodo }) => {
  return (
    <li /*key={todo.id}*/>
          <label htmlFor={id} className='item-label'>
            <input type="checkbox" id={id} checked={completed} onChange={e => toggleTodo(id, e.target.checked)}/>
            {title}
          </label>
          <button onClick={() => deleteTodo(id)} className='btn btn-danger'>Delete</button>
        </li>
  )
}

export default TodoItem
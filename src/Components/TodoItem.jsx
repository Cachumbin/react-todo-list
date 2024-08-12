import React from 'react'

const TodoItem = ({ completed, id, title, toggleTodo, deleteTodo }) => {
  return (
    <li /*key={todo.id}*/>
          <label htmlFor="check-item" className='item-label'>
            <input type="checkbox" id='check-item' checked={completed} onChange={e => toggleTodo(id, e.target.checked)}/>
            {title}
          </label>
          <button onClick={() => deleteTodo(id)} className='btn btn-danger'>Delete</button>
        </li>
  )
}

export default TodoItem
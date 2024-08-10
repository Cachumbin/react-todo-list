import React from 'react'

const App = () => {
  return (
    <div>
      <form className='new-item-form' action="">
        <div className="form-row">
          <label htmlFor="item">New Item</label>
          <input type="text" id='item' />
        </div>
        <button className='btn'>Add</button>
      </form>
      <h1 className="header">Todo list</h1>
      <ul className="list">
        <li>
          <label htmlFor="check-item">
            <input type="checkbox" id='check-item'/>
            Item 1
          </label>
          <button className='btn btn-danger'>Delete</button>
        </li>
      </ul>
    </div>
  )
}

export default App
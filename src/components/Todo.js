import React from 'react'

const Todo = ({todo}) => (
  <li>
    <input
      type='checkbox'
      checked={todo.checked}
    />
    <span>{todo.task}</span>
  </li>
)

export default Todo

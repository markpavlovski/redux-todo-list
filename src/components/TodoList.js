import React from 'react'
import Todo from './Todo'

const TodoList = props => (
  <ul>
    {
      props.list.map((el,idx) => <Todo todo={el} key={idx}/>)
    }
  </ul>
)

export default TodoList

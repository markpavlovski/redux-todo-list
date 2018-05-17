import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { handleCheck } from '../actions'


const Todo = ({todo,handleCheck}) => (
  <li>
    <input
      type='checkbox'
      checked={todo.checked}
      onChange={() => handleCheck(todo.id)}
    />
    <span>{todo.task}</span>
  </li>
)

const mapDispatchToProps = dispatch => bindActionCreators({handleCheck}, dispatch)

export default connect(null,mapDispatchToProps)(Todo)

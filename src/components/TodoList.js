import React from 'react'
import {connect} from 'react-redux'
import Todo from './Todo'

const TodoList = props => (
  <ul>
    {
      // props.list.map(el => <Todo todo={el} key={el.id}/>)
      Object.values(props.list).map(el => <Todo todo={el} key={el.id}/>)
    }
  </ul>
)


const mapStateToProps = ({list}) => ({list})
export default connect(mapStateToProps)(TodoList)

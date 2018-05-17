import React from 'react'
import {connect} from 'react-redux' 
import Todo from './Todo'

const TodoList = props => (
  <ul>
    {
      props.list.map((el,idx) => <Todo todo={el} key={idx}/>)
    }
  </ul>
)


const mapStateToProps = ({list}) => ({list})
export default connect(mapStateToProps)(TodoList)

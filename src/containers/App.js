import React from 'react';
import {connect} from 'react-redux'
import TodoList from '../components/TodoList'



const App = ({list}) => (
  <div>
    <TodoList {...{list}}/>
  </div>
)


const mapStateToProps = ({list}) => ({list})

export default connect(mapStateToProps)(App)

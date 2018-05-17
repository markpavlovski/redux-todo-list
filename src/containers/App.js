import React from 'react';
import TodoList from '../components/TodoList'
import AddTasks from '../containers/AddTasks'



const App = ({list}) => (
  <div>
    <AddTasks/>
    <TodoList/>
  </div>
)


export default App

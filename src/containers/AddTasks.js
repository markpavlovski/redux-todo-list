import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { handleSubmit,handleSelectAll,handleDelete } from '../actions'
import shortid from 'shortid'


const AddTasks = ({todo,handleSubmit,handleSelectAll,handleDelete}) => {

  const add = event => {
    event.preventDefault()
    console.log(event.target);
    handleSubmit({
      id: shortid.generate(),
      task: event.target.newTask.value,
      checked: false
    })
  }

  return (
    <div>
      <form onSubmit={add}>
        <input type='text' name = 'newTask'/>
        <input type='submit' value='add'/>
      </form>
      <div>
        <input
          type='checkbox'
          checked = {'false'}
          onChange={handleSelectAll}
        />
        <button onClick = {handleDelete}>Delete</button>
      </div>
    </div>
  )
}

const mapDispatchToProps = dispatch => bindActionCreators({handleSubmit,handleSelectAll,handleDelete}, dispatch)

export default connect(null,mapDispatchToProps)(AddTasks)

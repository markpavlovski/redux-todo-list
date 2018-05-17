import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { handleSubmit,handleSelectAll,handleDelete } from '../actions'



const AddTasks = ({todo,handleSubmit,handleSelectAll,handleDelete}) => (
  <div>
    <form onSubmit={handleSubmit}>
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

const mapDispatchToProps = dispatch => bindActionCreators({handleSubmit,handleSelectAll,handleDelete}, dispatch)

export default connect(null,mapDispatchToProps)(AddTasks)

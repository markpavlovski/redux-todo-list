export const CHECK = 'CHECK'
export const SUBMIT = 'SUBMIT'
export const DELETE = 'DELETE'
export const SELECTALL = 'SELECTALL'


export const handleCheck = id => ({type:CHECK,value:id})
export const handleSubmit = id => ({type:SUBMIT,value:id})
export const handleDelete = id => ({type:DELETE,value:id})
export const handleSelectAll = id => ({type:SELECTALL,value:id})

import { combineReducers } from 'redux'
import { CHECK } from './actions'

const INITIAL_VALUE = [
  {id: 'HkrtzegRz', task: 'teach react', checked: false},
  {id: 'Hyu3GlxAG', task: 'learn react', checked: true},
  {id: 'B19TGge0z', task: 'develop with react', checked: false}
]

function list (state = INITIAL_VALUE,action) {
  switch(action.type){
    case CHECK: return state.map(el => el.id === action.value ? {...el, checked:!el.checked} : {...el})
    default: return state
  }
}

export default combineReducers({list})

import { combineReducers } from 'redux'
import { CHECK } from './actions'

const INITIAL_VALUE = {
  'HkrtzegRz': {id: 'HkrtzegRz', task: 'teach react', checked: false},
  'Hyu3GlxAG': {id: 'Hyu3GlxAG', task: 'learn react', checked: true},
  'B19TGge0z': {id: 'B19TGge0z', task: 'develop with react', checked: false}
}

function list (state = INITIAL_VALUE,action) {
  switch(action.type){
    case CHECK:
      // return state.map(el => el.id === action.value ? {...el, checked:!el.checked} : {...el})
      return {...state, [action.value]: {...state[action.value], checked: !state[action.value].checked}}
    default: return state
  }
}

export default combineReducers({list})

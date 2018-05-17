import { combineReducers } from 'redux'

const INITIAL_VALUE = [
  {id: 'HkrtzegRz', task: 'teach react', checked: false},
  {id: 'Hyu3GlxAG', task: 'learn react', checked: true},
  {id: 'B19TGge0z', task: 'develop with react', checked: false}
]

function list (data = INITIAL_VALUE) {
  return data
}

export default combineReducers({list})

import filter from './filter'
import { combineReducers } from 'redux'
import postit from './postit'

const rootReducer = combineReducers({
  filter, 
  postit,
})

export default rootReducer;
import { createStore, combineReducers } from 'redux'
import { taskReducer } from './taskReducer'

const rootReducer = combineReducers({
  task: taskReducer
})

export const store = createStore(rootReducer)
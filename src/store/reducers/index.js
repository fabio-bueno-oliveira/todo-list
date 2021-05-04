import { combineReducers } from 'redux'
import { todosReducer } from './todos'

export const Reducers = combineReducers({
  todos: todosReducer
});
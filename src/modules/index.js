import { combineReducers } from 'redux';
import todoList from './TodoList';

const rootReducer = combineReducers({
    todoList
})

export default rootReducer;
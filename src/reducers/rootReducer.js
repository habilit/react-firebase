import { combineReducers } from 'redux';
import simpleReducer from './simpleReducer';
import todos from './todosReducer';
export default combineReducers({
    simpleReducer,
    todos,
});
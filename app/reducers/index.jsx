import { combineReducers } from 'redux';
import todolist from './todos';
// import visibilityFilter from './visibilityFilter';

const reducer = combineReducers({
    todolist,
});

export default reducer;

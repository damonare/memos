import {Add_Todo, Search} from '../actions';
let todos;
(function() {
    if (localStorage.todos) {
        todos = JSON.parse(localStorage.todos)
    } else {
        todos = []
    }
})();
function todolist(state = todos, action) {
    switch (action.type) {
        case Add_Todo:
        localStorage.setItem('todos',JSON.stringify([
            ...state, {
                todo: action.text,
                istodo: true,
                doing: false,
                done: false
            }
        ]))
            return [
                ...state, {
                    todo: action.text,
                    istodo: true,
                    doing: false,
                    done: false
                }
            ];
        case Search:
            return []
        default:
            return state;
    }
}
export default todolist;

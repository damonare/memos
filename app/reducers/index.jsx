import {Add_Todo,Search} from '../actions';
let todolist;
(function() {
    if (localStorage.todo) {
        todolist = JSON.parse(localStorage.todo)
    } else {
        todolist = [
            {
                todo:'例：待办事项',
                done:'',
                istodo:'',
                doing:''
            }
        ]
    }
})();
function reducer(state = {
    todolist: todolist
}, action) {
    switch (action.type) {
        case Add_Todo:
            return {
                todolist:[
                    ...todolist,
                    {
                        todo:action.text,
                        istodo:true,
                        doing:false,
                        done:false
                    }
                ]
            };
        case Search:
            return{
                todolist:[
                    todolist.filter(item=>item.todo.match(/action.text/gi))
                ]
            }
        default:
            return state;
    }
}
export default reducer;

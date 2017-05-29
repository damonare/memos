import {
    ADD_TODO,
    DELETE_TODO,
    CHANGE_TODO_TO_DOING,
    CHANGE_DOING_TO_DONE,
    CHANGE_DOING_TO_TODO,
    CAHNGE_DONE_TO_DOING,
    SEARCH,
} from '../actions';

let todos;
(() => {
    if (localStorage.todos) {
        todos = JSON.parse(localStorage.todos);
    } else {
        todos = [];
    }
})();
const todolist = (state = todos, action) => {
    switch (action.type) {
       /*
        *  添加新的事项
        *  并进行本地化存储
        *  使用ES6展开运算符链接新事项和旧事项
        *  JSON.stringify进行对象深拷贝
        */
        case ADD_TODO:
            return [
                ...state, {
                    todo: action.text,
                    istodo: true,
                    doing: false,
                    done: false
                }
            ];
        /*
         * 将todo转为doing状态，注意action.index的类型转换
         */
        case CHANGE_TODO_TO_DOING:
            localStorage.setItem('todos', JSON.stringify([
                ...state.slice(0, action.index),
                {
                    todo:state[action.index].todo,
                    istodo: false,
                    doing: true,
                    done: false
                },
                ...state.slice(parseInt(action.index) + 1)
            ]));
            return [
                ...state.slice(0, action.index),
                {
                    todo:state[action.index].todo,
                    istodo: false,
                    doing: true,
                    done: false
                },
                ...state.slice(parseInt(action.index) + 1)
            ];
        /*
         * 将doing转为done状态
         */
        case CHANGE_DOING_TO_DONE:
            localStorage.setItem('todos', JSON.stringify([
                ...state.slice(0, action.index),
                {
                    todo:state[action.index].todo,
                    istodo: false,
                    doing: false,
                    done: true
                },
                ...state.slice(parseInt(action.index) + 1)
            ]));
            return [
                ...state.slice(0, action.index),
                {
                    todo:state[action.index].todo,
                    istodo: false,
                    doing: false,
                    done: true
                },
                ...state.slice(parseInt(action.index) + 1)
            ];
        /*
         * 将done转为doing状态
         */
        case CAHNGE_DONE_TO_DOING:
            localStorage.setItem('todos', JSON.stringify([
                ...state.slice(0, action.index),
                {
                    todo:state[action.index].todo,
                    istodo: false,
                    doing: true,
                    done: false
                },
                ...state.slice(parseInt(action.index) + 1)
            ]));
            return [
                ...state.slice(0, action.index),
                {
                    todo:state[action.index].todo,
                    istodo: false,
                    doing: true,
                    done: false
                },
                ...state.slice(parseInt(action.index) + 1)
            ];
        /*
         * 将doing转为todo状态
         */
        case CHANGE_DOING_TO_TODO:
            localStorage.setItem('todos', JSON.stringify([
                ...state.slice(0, action.index),
                {
                    todo:state[action.index].todo,
                    istodo: true,
                    doing: false,
                    done: false
                },
                ...state.slice(parseInt(action.index) + 1)
            ]));
            return [
                ...state.slice(0, action.index),
                {
                    todo:state[action.index].todo,
                    istodo: true,
                    doing: false,
                    done: false
                },
                ...state.slice(parseInt(action.index) + 1)
            ];
        /*
         * 删除某个事项
         */
        case DELETE_TODO:
            localStorage.setItem('todos', JSON.stringify([
                ...state.slice(0, action.index),
                ...state.slice(parseInt(action.index) + 1)
            ]));
            return [
                ...state.slice(0, action.index),
                ...state.slice(parseInt(action.index) + 1)
            ];
        /*
         * 搜索
         */
        case SEARCH:
            let text = action.text;
            let reg = eval("/"+text+"/gi");
            return state.filter(item=> item.todo.match(reg));
        default:
            return state;
    }
}
export default todolist;

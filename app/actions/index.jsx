/*
 * @author tanjizhen 2016-12-10
 * @version 1.0.0
 * action 类型
 */
export const ADD_TODO = 'Add_Todo';
export const CHANGE_TODO_TO_DOING = 'Change_Todo_To_Doing';
export const CHANGE_DOING_TO_DONE = 'Change_Doing_To_Done';
export const CHANGE_DONE_TO_DOING = 'Change_Done_To_Doing';
export const CHANGE_DOING_TO_TODO = 'Change_Doing_To_Todo';
export const SEARCH = 'Search';
export const DELETE_TODO = 'Delete_Todo';
/*
 * action 创建函数
 * @method  addTodo添加新事项
 * @param  {String} text 添加事项的内容
 */
export const addTodo = (text) => {
    return (dispatch, getState) => {
        // 测试异步流
        const state = getState();
        localStorage.setItem('todos',
            JSON.stringify([
                ...state.todolist, {
                    todo: text,
                    istodo: true,
                    doing: false,
                    done: false
                }
            ])
        );
        setTimeout(() => {
            dispatch({
                type: ADD_TODO,
                text,
            });
        }, 2);
    };
};
/*
 * @method  search 查找事项
 * @param  {String} text 查找事项的内容
 */

export function search(text) {
    return {
        type: SEARCH,
        text,
    };
}
/*
 * @method  changeTodoToDoing 状态由todo转为doing
 * @param  {Number} index 需要改变状态的事项的下标
 */
export function changeTodoToDoing(index) {
    return {
        type: CHANGE_TODO_TO_DOING,
        index,
    };
}
/*
 * @method  changeDoneToDoing 状态由done转为doing
 * @param  {Number} index 需要改变状态的事项的下标
 */
export function changeDoneToDoing(index) {
    return {
        type: CHANGE_DONE_TO_DOING,
        index,
    };
}
/*
 * @method  changeDoingToTodo 状态由doing转为todo
 * @param  {Number} index 需要改变状态的事项的下标
 */
export function changeDoingToTodo(index) {
    return {
        type: CHANGE_DOING_TO_TODO,
        index,
    };
}
/*
 * @method  changeDoingToDone 状态由doing转为done
 * @param  {Number} index 需要改变状态的事项的下标
 */
export function changeDoingToDone(index) {
    return {
        type: CHANGE_DOING_TO_DONE,
        index,
    };
}
/*
 * @method  deleteTodo 删除事项
 * @param  {Number} index 需要删除的事项的下标
 */
export function deleteTodo(index) {
    return {
        type: DELETE_TODO,
        index,
    };
}

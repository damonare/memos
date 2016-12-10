'use strict';
/*
 * @author Damonare 2016-12-10
 * @version 1.0.0
 * action 类型
 */
export const Add_Todo = 'Add_Todo';
export const Change_Todo_To_Doing = 'Change_Todo_To_Doing';
export const Change_Doing_To_Done = 'Change_Doing_To_Done';
export const Change_Done_To_Doing = 'Change_Done_To_Doing';
export const Change_Doing_To_Todo = 'Change_Doing_To_Todo';
export const Search='Search';
export const Delete_Todo='Delete_Todo';
/*
 * action 创建函数
 * @method  addTodo添加新事项
 * @param  {String} text 添加事项的内容
 */
export function addTodo(text) {
  return {
      type: Add_Todo,
      text
  }
}
/*
 * @method  search 查找事项
 * @param  {String} text 查找事项的内容
 */
export function search(text) {
  return {
      type: Search,
      text
  }
}
/*
 * @method  changeTodoToDoing 状态由todo转为doing
 * @param  {Number} index 需要改变状态的事项的下标
 */
export function changeTodoToDoing(index) {
  return {
      type: Change_Todo_To_Doing,
      index
  }
}
/*
 * @method  changeDoneToDoing 状态由done转为doing
 * @param  {Number} index 需要改变状态的事项的下标
 */
export function changeDoneToDoing(index) {
  return {
      type: Change_Done_To_Doing,
      index
  }
}
/*
 * @method  changeDoingToTodo 状态由doing转为todo
 * @param  {Number} index 需要改变状态的事项的下标
 */
export function changeDoingToTodo(index) {
  return {
      type: Change_Doing_To_Todo,
      index
  }
}
/*
 * @method  changeDoingToDone 状态由doing转为done
 * @param  {Number} index 需要改变状态的事项的下标
 */
export function changeDoingToDone(index) {
  return {
      type: Change_Doing_To_Done,
      index
  }
}
/*
 * @method  deleteTodo 删除事项
 * @param  {Number} index 需要删除的事项的下标
 */
export function deleteTodo(index) {
  return {
      type: Delete_Todo,
      index
  }
}

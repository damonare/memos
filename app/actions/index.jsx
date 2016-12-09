'use strict';
/*
 * action 类型
 */
export const Add_Todo = 'Add_Todo';
export const Change_Todo_To_Doing = 'Change_Todo_To_Doing';
export const Change_Doing_To_Done = 'Change_Doing_To_Done';
export const Search='search';
/*
 * action 创建函数
 */
export function addTodo(text) {
  return {
      type: Add_Todo,
      text
  }
}
export function search(filter) {
  return {
      type: Search,
      filter
  }
}
export function changeTodoToDoing(text) {
  return {
      type: Change_Todo_To_Doing,
      index
  }
}
export function changeDoingToDone(text) {
  return {
      type: Change_Doing_To_Done,
      index
  }
}

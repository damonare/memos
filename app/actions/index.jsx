'use strict';
/*
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
 */
export function addTodo(text) {
  return {
      type: Add_Todo,
      text
  }
}
export function search(text) {
  return {
      type: Search,
      text
  }
}
export function changeTodoToDoing(index) {
  return {
      type: Change_Todo_To_Doing,
      index
  }
}
export function changeDoneToDoing(index) {
  return {
      type: Change_Done_To_Doing,
      index
  }
}
export function changeDoingToTodo(index) {
  return {
      type: Change_Doing_To_Todo,
      index
  }
}
export function changeDoingToDone(index) {
  return {
      type: Change_Doing_To_Done,
      index
  }
}
export function deleteTodo(index) {
  return {
      type: Delete_Todo,
      index
  }
}

import * as actions from "../actionTypes/actionTypes";

export const fetchTodosAction = (data) => ({
  type: actions.fetchTodos,
  payload: data,
});

export const addTodoAction = (data) => ({
  type: actions.addTodo,
  payload: data,
});

export const deleteTodoAction = (id) => ({
  type: actions.removeTodo,
  payload: id,
});

export const searchTextAction = (txt) => ({
  type: actions.searchText,
  payload: txt,
});

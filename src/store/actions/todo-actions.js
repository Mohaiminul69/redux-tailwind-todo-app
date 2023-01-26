import * as actions from "../actionTypes/actionTypes";

export const fetchTodosAction = (data) => ({
  type: actions.fetchTodos,
  payload: data,
});

export const setLoadingAction = (loadState) => ({
  type: actions.setLoading,
  payload: loadState,
});

export const addTodoAction = (data) => ({
  type: actions.addTodo,
  payload: data,
});

export const editTodoAction = (data) => ({
  type: actions.editTodo,
  payload: data,
});

export const resolveTodoAction = (data) => ({
  type: actions.resolveTodo,
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

export const sortTodoAction = (txt) => ({
  type: actions.sortTodo,
  payload: txt,
});

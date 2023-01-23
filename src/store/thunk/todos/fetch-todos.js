import axios from "axios";
import {
  addTodoAction,
  deleteTodoAction,
  fetchTodosAction,
} from "../../actions/todo-actions";

export const fetchTodosData = () => async (dispatch) => {
  const { data } = await axios.get(
    "https://jsonplaceholder.typicode.com/todos"
  );
  if (data) dispatch(fetchTodosAction(data));
};

export const addTodoData = (data) => async (dispatch) => {
  const res = await axios.post(
    "https://jsonplaceholder.typicode.com/todos",
    data
  );
  if (res.status === 201) dispatch(addTodoAction(data));
};

export const deleteTodosData = (id) => async (dispatch) => {
  const data = await axios.delete(
    `https://jsonplaceholder.typicode.com/todos/${id}`
  );
  if (data.status === 200) dispatch(deleteTodoAction(id));
};

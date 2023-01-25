import axios from "axios";
import { toast } from "react-hot-toast";
import {
  addTodoAction,
  deleteTodoAction,
  fetchTodosAction,
  resolveTodoAction,
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

  if (res.status === 201) {
    toast.success("Task added Successfully!", {
      icon: "👏",
      style: {
        borderRadius: "5px",
        background: "#d06d6d",
        color: "#fff",
      },
    });
    dispatch(addTodoAction(data));
  }
};

export const resolveTodoData = (data) => async (dispatch) => {
  const res = await axios.patch(
    `https://jsonplaceholder.typicode.com/todos/${data.id}`,
    data
  );
  if (res.status === 200) {
    toast.success("Status changed Successfully!", {
      icon: "👏",
      style: {
        borderRadius: "5px",
        background: "#d06d6d",
        color: "#fff",
      },
    });
    dispatch(resolveTodoAction(data));
  }
};

export const deleteTodosData = (id) => async (dispatch) => {
  const data = await axios.delete(
    `https://jsonplaceholder.typicode.com/todos/${id}`
  );
  if (data.status === 200) {
    toast("Task has been Deleted!", {
      icon: "👏",
      style: {
        borderRadius: "5px",
        background: "#d06d6d",
        color: "#fff",
      },
    });
    dispatch(deleteTodoAction(id));
  }
};

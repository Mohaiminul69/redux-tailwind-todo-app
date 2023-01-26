import axios from "axios";
import { format } from "date-fns";
import { toast } from "react-hot-toast";
import {
  addTodoAction,
  deleteTodoAction,
  fetchTodosAction,
  resolveTodoAction,
  setLoadingAction,
} from "../../actions/todo-actions";

export const fetchTodosData = () => async (dispatch) => {
  const { data } = await axios.get(
    "https://jsonplaceholder.typicode.com/todos"
  );
  if (data) dispatch(fetchTodosAction(data));
};

export const addTodoData = (data) => async (dispatch) => {
  dispatch(setLoadingAction(true));
  data.createdAt = format(new Date(), "dd-MM-yyyy");
  const res = await axios.post(
    "https://jsonplaceholder.typicode.com/todos",
    data
  );

  if (res.status === 201) {
    dispatch(setLoadingAction(false));
    dispatch(addTodoAction(data));
    toast.success("Task added Successfully!", {
      icon: "👏",
      style: {
        borderRadius: "5px",
        background: "#d06d6d",
        color: "#fff",
      },
    });
  }
};

export const editTodoData = (data) => async (dispatch) => {
  dispatch(setLoadingAction(true));
  const res = await axios.patch(
    `https://jsonplaceholder.typicode.com/todos/${data.id}`,
    data
  );
  if (res.status === 200) {
    dispatch(setLoadingAction(false));
    dispatch(resolveTodoAction(data));
    toast.success("Title changed Successfully!", {
      icon: "👏",
      style: {
        borderRadius: "5px",
        background: "#d06d6d",
        color: "#fff",
      },
    });
  }
};

export const resolveTodoData = (data) => async (dispatch) => {
  dispatch(setLoadingAction(true));
  data.createdAt = format(new Date(), "dd-MM-yyyy");
  const res = await axios.patch(
    `https://jsonplaceholder.typicode.com/todos/${data.id}`,
    data
  );
  if (res.status === 200) {
    dispatch(setLoadingAction(false));
    dispatch(resolveTodoAction(data));
    toast.success("Status changed Successfully!", {
      icon: "👏",
      style: {
        borderRadius: "5px",
        background: "#d06d6d",
        color: "#fff",
      },
    });
  }
};

export const deleteTodosData = (id) => async (dispatch) => {
  dispatch(setLoadingAction(true));
  const data = await axios.delete(
    `https://jsonplaceholder.typicode.com/todos/${id}`
  );
  if (data.status === 200) {
    dispatch(setLoadingAction(false));
    dispatch(deleteTodoAction(id));
    toast("Task has been Deleted!", {
      icon: "👏",
      style: {
        borderRadius: "5px",
        background: "#d06d6d",
        color: "#fff",
      },
    });
  }
};

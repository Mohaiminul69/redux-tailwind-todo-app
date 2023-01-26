import { useEffect, useState } from "react";
import { Toaster } from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import FormModal from "./components/form-modal";
import LoadingSpinner from "./components/loading-spinner";
import Navbar from "./components/navbar";
import Sort from "./components/sort";
import TodoList from "./components/todo-list";
import { fetchTodosData } from "./store/thunk/todos/fetch-todos";

function App() {
  const [open, setOpen] = useState(false);
  const dispatch = useDispatch();
  const loading = useSelector((state) => state.todos.loading);

  useEffect(() => {
    dispatch(fetchTodosData());
  }, [dispatch]);

  return (
    <>
      <Navbar />
      <div className="container mx-auto relative">
        <div className="flex mt-10 mb-3 relative items-center justify-center">
          <Sort />
          <h1 className="text-center text-white text-2xl font-semibold">
            Redux Todo App
          </h1>
          <button
            onClick={() => setOpen(true)}
            className="rounded-lg bg-blue-500 px-4 py-2 absolute right-0 text-white"
          >
            Add Task
          </button>
        </div>
        <div className="container flex flex-wrap items-center justify-between mx-auto">
          <TodoList />
        </div>
        <FormModal open={open} setOpen={setOpen} />
        {loading && <LoadingSpinner />}
      </div>
      <Toaster position="top-center" reverseOrder={false} />
    </>
  );
}

export default App;

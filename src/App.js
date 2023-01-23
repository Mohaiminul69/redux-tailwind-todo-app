import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import FormModal from "./components/form-modal";
import Navbar from "./components/navbar";
import Sort from "./components/sort";
import TodoList from "./components/todo-list";
import { fetchTodosData } from "./store/thunk/todos/fetch-todos";

function App() {
  const [open, setOpen] = useState(false);
  const dispatch = useDispatch();
  const searchText = useSelector((state) => state.filters.searchText);

  useEffect(() => {
    if (searchText) console.log("sajkdhaksjdhajksdhajksdhiou");
    else dispatch(fetchTodosData());
  }, [dispatch, searchText]);

  return (
    <div className="container mx-auto">
      <Navbar />
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
    </div>
  );
}

export default App;

import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { resolveTodoData } from "../store/thunk/todos/fetch-todos";
import DeleteModal from "./delete-modal";

const TodoItem = ({ todo, serialNo }) => {
  const [open, setOpen] = useState(false);
  const dispatch = useDispatch();

  return (
    <>
      <tr className="border-b border-gray-200 dark:border-gray-700">
        <th
          scope="row"
          className="pl-6 py-2 font-medium whitespace-nowrap bg-gray-50 dark:bg-gray-800"
        >
          {serialNo}
        </th>
        <td className="px-6 py-2 capitalize bg-gray-600 dark:text-white">
          {todo?.title.substring(0, 40)}
        </td>
        <td className="px-6 py-2 capitalize bg-gray-50 dark:bg-gray-800">
          {todo?.completed ? "Done" : "Pending"}
        </td>
        <td className="px-6 py-2 bg-gray-600 flex items-center justify-between">
          <label className="relative inline-block items-center cursor-pointer">
            <input
              onChange={() =>
                dispatch(
                  resolveTodoData({ ...todo, completed: !todo.completed })
                )
              }
              type="checkbox"
              checked={todo.completed}
              className="sr-only peer"
            />
            <div className="w-9 h-5 bg-gray-200 peer-focus:outline-none peer-focus:ring-1 peer-focus:ring-blue-300 dark:peer-focus:ring-red-400 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all dark:border-gray-600 peer-checked:bg-red-400" />
          </label>
          <button
            onClick={() => setOpen(true)}
            className="bg-red-400 py-2 px-4 rounded-lg uppercase text-white"
          >
            delete
          </button>
        </td>
      </tr>
      <DeleteModal open={open} setOpen={setOpen} todo={todo} />
    </>
  );
};

export default TodoItem;

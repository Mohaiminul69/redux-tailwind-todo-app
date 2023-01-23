import React from "react";
import { useDispatch } from "react-redux";
import { deleteTodosData } from "../store/thunk/todos/fetch-todos";

const TodoItem = ({ todo, lastId }) => {
  const dispatch = useDispatch();
  return (
    <tr
      className={`${
        lastId !== todo?.id && "border-b border-gray-200 dark:border-gray-700"
      }`}
    >
      <th
        scope="row"
        className="pl-6 py-2 font-medium whitespace-nowrap bg-gray-50 dark:bg-gray-800"
      >
        {todo?.id}
      </th>
      <td className="px-6 py-2 capitalize bg-gray-600 dark:text-white">
        {todo?.title.substring(0, 40)}
      </td>
      <td className="px-6 py-2 capitalize bg-gray-50 dark:bg-gray-800">
        {todo?.completed ? "Done" : "Pending"}
      </td>
      <td className="pl-6 py-2 bg-gray-600">
        <button
          onClick={() => dispatch(deleteTodosData(todo?.id))}
          className="bg-red-400 py-2 px-4 rounded-lg uppercase text-white"
        >
          delete
        </button>
      </td>
    </tr>
  );
};

export default TodoItem;

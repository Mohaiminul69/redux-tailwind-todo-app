import React, { useState } from "react";
import { useSelector } from "react-redux";
import { paginate } from "../utils/paginate";
import Pagination from "./pagination";
import TodoItem from "./todo-item";

const TodoList = () => {
  const [pageSize] = useState(13);
  const [currentPage, setCurrentPage] = useState(1);
  const todoList = useSelector((state) => state.todos.todos);
  const searchText = useSelector((state) => state.filters.searchText);

  const handlePageChange = (page) => setCurrentPage(page);

  const todos = paginate(todoList, currentPage, pageSize);

  return (
    <>
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg mt-8 w-full mb-4">
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase dark:text-gray-400">
            <tr className="text-red-400 border-red-400 border-b-[1px]">
              <th
                scope="col"
                className="pl-6 py-4 text-base bg-gray-50 dark:bg-gray-800"
              >
                No
              </th>
              <th scope="col" className="px-6 py-4 text-base bg-gray-800">
                Task
              </th>
              <th
                scope="col"
                className="px-6 py-4 text-base bg-gray-50 dark:bg-gray-800"
              >
                status
              </th>
              <th scope="col" className="px-6 py-4 text-base bg-gray-800">
                action
              </th>
            </tr>
          </thead>
          <tbody>
            {todos
              .filter((todo) =>
                todo?.title.toLowerCase().includes(searchText.toLowerCase())
              )
              .map((todo) => (
                <TodoItem key={todo.id} todo={todo} lastId={todoList.length} />
              ))}
          </tbody>
        </table>
      </div>
      <Pagination
        itemsCount={todoList.length}
        pageSize={pageSize}
        onPageChange={handlePageChange}
        currentPage={currentPage}
      />
    </>
  );
};

export default TodoList;

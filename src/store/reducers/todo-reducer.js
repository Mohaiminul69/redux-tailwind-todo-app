import * as actions from "../actionTypes/actionTypes";

const initialState = {
  todos: [],
};

const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case actions.fetchTodos:
      return {
        ...state,
        todos: action.payload,
      };

    case actions.addTodo:
      return {
        ...state,
        todos: [...state.todos, action.payload],
      };

    case actions.removeTodo:
      return {
        ...state,
        todos: state.todos.filter((todo) => todo.id !== action.payload),
      };

    default:
      return state;
  }
};

export default todoReducer;

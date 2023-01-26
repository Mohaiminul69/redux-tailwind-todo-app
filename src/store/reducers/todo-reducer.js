import * as actions from "../actionTypes/actionTypes";

const initialState = {
  todos: [],
  loading: false,
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
        todos: [action.payload, ...state.todos],
      };

    case actions.editTodo:
      return {
        ...state,
        todos: state.todos.map((todo) =>
          todo.id === action.payload.id ? (todo = action.payload) : todo
        ),
      };

    case actions.setLoading:
      return {
        ...state,
        loading: action.payload,
      };

    case actions.resolveTodo:
      return {
        ...state,
        todos: state.todos.map((todo) =>
          todo.id === action.payload.id ? (todo = action.payload) : todo
        ),
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

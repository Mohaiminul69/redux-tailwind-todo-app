import { combineReducers } from "redux";
import filterReducer from "./filter-reducer";
import todoReducer from "./todo-reducer";

export const rootReducer = combineReducers({
  todos: todoReducer,
  filters: filterReducer,
});

export default rootReducer;

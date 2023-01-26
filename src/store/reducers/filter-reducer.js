import * as actions from "../actionTypes/actionTypes";

export const initialState = {
  searchText: "",
  sortType: "all",
};

const filterReducer = (state = initialState, action) => {
  switch (action.type) {
    case actions.sortTodo:
      return { ...state, sortType: action.payload };

    case actions.searchText:
      return { ...state, searchText: action.payload };

    default:
      return state;
  }
};

export default filterReducer;

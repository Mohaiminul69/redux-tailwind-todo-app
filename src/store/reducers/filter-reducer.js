import * as actions from "../actionTypes/actionTypes";

export const initialState = {
  all: [],
  searched: [],
  searchText: "",
  sortType: "all",
};

const filterReducer = (state = initialState, action) => {
  switch (action.type) {
    case actions.togglePending:
      return {
        ...state,
        pending: [...state.pending, action.payload],
      };

    case actions.sortTodo:
      return { ...state, sortType: action.payload };

    case actions.searchList:
      return { ...state, searchList: action.payload };

    case actions.searchText:
      return { ...state, searchText: action.payload };

    default:
      return state;
  }
};

export default filterReducer;

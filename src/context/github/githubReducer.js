import {
  SEARCH_USERS,
  SET_LOADING,
  CLEAR_USERS,
  GET_USER,
  GET_REPOS,
} from "../types";
import { act } from "react-dom/test-utils";

export default (state, action) => {
  switch (action.type) {
    case GET_REPOS:
      return {
        ...state,
        repos: action.payload,
        loading: false,
      };
    case GET_USER:
      return {
        ...state,
        user: action.payload,
        loading: false,
      };
    case CLEAR_USERS: {
      return {
        ...state,
        users: [],
        loading: false,
      };
    }
    case SEARCH_USERS:
      return {
        ...state,
        users: action.payload,
        loading: false,
      };
    case SET_LOADING:
      //? State is mutable so we can't just assign it, we have to make a copy of it then add any addition or changes to it.
      return {
        ...state,
        loading: true,
      };
    default:
      return state;
  }
};

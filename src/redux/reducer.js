import {
  GET_TODO_SUCCESS,
  GET_TODO_FAILURE,
  GET_TODO_REQUEST,
  ADD_TODO_REQUEST,
  ADD_TODO_SUCCESS,
  ADD_TODO_FAILURE,
  DELETE_TODO_TASK,
} from "./action.type.js";

const inital = {
  data: {
    todos: [],
    isComplete: false,
    isError: false,
    isLoading: false,
  },
  todo: [],
};
export const reducer = (state = inital, { type, payload }) => {
  switch (type) {
    case GET_TODO_REQUEST:
      return {
        ...state,
        data: { ...state.data, isLoading: true, isError: false },
      };
    case GET_TODO_SUCCESS:
      return {
        ...state,
        data: {
          ...state.data,
          todos: payload,
          isLoading: false,
          isError: false,
        },
      };

    case GET_TODO_FAILURE:
      return {
        ...state,
        data: {
          ...state.data,
          isLoading: false,
          isError: true,
        },
      };

    // add

    case ADD_TODO_REQUEST:
      return {
        ...state,
        data: { ...state.data, isLoading: true, isError: false },
      };
    case ADD_TODO_SUCCESS:
      console.log(payload);
      return {
        ...state,
        data: {
          ...state.data,
          ...state.todos,
          ...payload,
          isLoading: false,
          isError: false,
        },
      };
    case ADD_TODO_FAILURE:
      return {
        ...state,
        data: {
          ...state.data,
          isLoading: false,
          isError: true,
        },
      };
    // Delete
    case DELETE_TODO_TASK:
      return {
        ...state,
        data: {
          ...state.data,

          isLoading: false,
          isError: false,
        },
      };
    default:
      return state;
  }
};

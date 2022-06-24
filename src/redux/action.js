import {
  GET_TODO_SUCCESS,
  GET_TODO_FAILURE,
  GET_TODO_REQUEST,
  ADD_TODO_REQUEST,
  ADD_TODO_SUCCESS,
  ADD_TODO_FAILURE,
  DELETE_TODO_TASK,
} from "./action.type.js";

// Fetch

export const getDataSuccess = (payload) => ({
  type: GET_TODO_SUCCESS,
  payload,
});
export const getDataFailure = (payload) => ({
  type: GET_TODO_FAILURE,
  payload,
});
export const getDataRequest = (payload) => ({
  type: GET_TODO_REQUEST,
  payload,
});

// Add Todo

export const addDataSuccess = (payload) => ({
  type: ADD_TODO_SUCCESS,
  payload,
});
export const addDataFailure = (payload) => ({
  type: ADD_TODO_FAILURE,
  payload,
});
export const addDataRequest = (payload) => ({
  type: ADD_TODO_REQUEST,
  payload,
});

// Delete

export const deleteDataTodo = (payload) => ({
  type: DELETE_TODO_TASK,
  payload,
});

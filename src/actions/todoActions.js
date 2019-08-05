import {
  ADD_TODO,
  DELETE_TODO,
  EDIT_TODO,
  CROSS_TODO,
  INIT_STORE
} from "./types";
import uuid from "uuid";

export const deleteTodo = (id, idList) => dispatch => {
  dispatch({
    type: DELETE_TODO,
    payload: { id, idList }
  });
};

export const addTodo = (todo, idList) => dispatch => {
  dispatch({
    type: ADD_TODO,
    payload: {
      id: uuid(),
      idList,
      todo,
      completed: false
    }
  });
};

export const editTodo = (id, idList, todo) => dispatch => {
  dispatch({
    type: EDIT_TODO,
    payload: {
      id,
      idList,
      todoChanged: todo,
      completed: false
    }
  });
};

export const crossTodo = (id, idList) => dispatch => {
  dispatch({
    type: CROSS_TODO,
    payload: {
      id,
      idList
    }
  });
};

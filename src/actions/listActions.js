import { ADD_LIST, DELETE_LIST } from "./types";
import uuid from "uuid";

export const deleteList = idList => dispatch => {
  dispatch({
    type: DELETE_LIST,
    payload: {
      idList
    }
  });
};

export const addList = () => dispatch => {
  dispatch({
    type: ADD_LIST,
    payload: {
      id: uuid(),
      list: { lists: [] }
    }
  });
};

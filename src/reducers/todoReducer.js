import {
  ADD_LIST,
  ADD_TODO,
  CROSS_TODO,
  DELETE_LIST,
  DELETE_TODO,
  EDIT_TODO
} from "../actions/types";

const state = JSON.parse(localStorage.getItem("MultiTodo"));

const stateInit = state
  ? state
  : {
      lists: []
    };

export default function todoReducer(state = stateInit, action) {
  state = { ...state };
  switch (action.type) {
    case ADD_TODO:
      const { id, todo, completed, idList } = action.payload;
      if (todo.trim().length === 0) return { ...state };
      return {
        ...state,
        lists: state.lists.map(list =>
          list.id === idList
            ? { ...list, todo: list.todo.concat({ id, todo, completed }) }
            : { ...list }
        )
      };
    case EDIT_TODO: {
      const { id, todoChanged, idList } = action.payload;
      if (todoChanged.trim().length === 0) return { ...state };
      return {
        ...state,
        lists: state.lists.map(list =>
          list.id === idList
            ? {
                ...list,
                todo: list.todo.map(todo =>
                  todo.id === id ? { ...todo, todo: todoChanged } : { ...todo }
                )
              }
            : { ...list }
        )
      };
    }
    case CROSS_TODO: {
      const { id, idList } = action.payload;
      return {
        ...state,
        lists: state.lists.map(list =>
          list.id === idList
            ? {
                ...list,
                todo: list.todo.map(todo =>
                  todo.id === id
                    ? { ...todo, completed: !todo.completed }
                    : { ...todo }
                )
              }
            : { ...list }
        )
      };
    }
    case DELETE_TODO: {
      const { id, idList } = action.payload;
      return {
        ...state,
        lists: state.lists.map(list =>
          list.id === idList
            ? { ...list, todo: list.todo.filter(todo => todo.id !== id) }
            : { ...list }
        )
      };
    }
    case ADD_LIST: {
      return {
        ...state,
        lists: state.lists.concat({ id: action.payload.id, todo: [] })
      };
    }
    case DELETE_LIST: {
      return {
        ...state,
        lists: state.lists.filter(list => list.id !== action.payload.idList)
      };
    }
    default:
      return state;
  }
}

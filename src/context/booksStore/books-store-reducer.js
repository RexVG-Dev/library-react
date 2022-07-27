import {
  GET_BOOKS_LIST,
  CLEAR_BOOKS_LIST,
} from '../../types';

export default(state, action) => {
  switch (action.type) {
    case GET_BOOKS_LIST:
      return {
        ...state,
        booksList: action.payload,
      }
    case CLEAR_BOOKS_LIST:
      return {
        ...state,
        booksList: action.payload,
      }
    default:
      return state
  }
}

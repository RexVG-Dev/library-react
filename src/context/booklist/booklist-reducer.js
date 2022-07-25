import {
  GET_BOOKS_LIST,
  UPDATE_BOOKS_LIST,
} from '../../types';

export default(state, action) => {
  switch (action.type) {
    case GET_BOOKS_LIST:
      return {
        ...state,
        books: action.payload
      }
      break;
  
    default:
      break;
  }
}

import React, { useReducer } from 'react';
import clientAxios from '../../config/axios';
import isEmpty from 'lodash/isEmpty';

import booksStoreContext from './books-store-context';
import booksStoreReducer from './books-store-reducer';

import { HTTP_STATUS_CODES } from '../../api/constants';

import { GET_BOOKS_LIST, CLEAR_BOOKS_LIST } from '../../types';

const BooksStoreState = props => {
  const initialState = {
    booksList: [],
  }

  const [state, dispatch] = useReducer(booksStoreReducer, initialState);

  const getBooksList = async () => {
    try {
      const response = await clientAxios.get('/books');

      if(!isEmpty(response)) {
        dispatch({
          type: GET_BOOKS_LIST,
          payload: response,
        });
      }

      return {
        status: HTTP_STATUS_CODES.OK,
        message: 'Request books list successfully',
      }

    } catch (error) {
      return {
        status: error?.response?.status,
        message: 'Error to get books list. Try later',
      }
    }
  };

  const updateBook = async book => {
    try {
      await clientAxios.put(`books/${book.id}`, book);

      dispatch({
        type: CLEAR_BOOKS_LIST,
        payload: initialState.booksList,
      })

      return {
        status: HTTP_STATUS_CODES.OK,
        message: 'Book updated',
      }
      
    } catch (error) {

      return {
        status: error?.response?.status,
        message: 'Error to update book. Try later',
      }
    }
    
  };

  return(
    <booksStoreContext.Provider
      value={{
        booksList: state.booksList,
        getBooksList,
        updateBook,
      }}
    >
      {props.children}
    </booksStoreContext.Provider>
  )
}

export default BooksStoreState;

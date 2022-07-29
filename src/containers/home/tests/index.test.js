import React from 'react';
import {legacy_createStore as createStore, applyMiddleware} from 'redux';
import { Router } from 'react-router-dom';
import { Provider } from 'react-redux'
import { createMemoryHistory } from 'history';
import { render } from '@testing-library/react';
import booksStoreContext from '../../../context/booksStore/books-store-context';

jest.mock('../../../context/booksStore/books-store-context', () => {});

import Home from '..';

const book = {
    id: "1",
    wishList: false,
    volumeInfo: {
      title: "Conscious Crafts: Quilting",
      subtitle: "20 Mindful Makes to Reconnect Head, Heart & Hands",
      authors: [
        "Elli Beaven"
      ],
      publisher: "Conscious Crafts",
      publishedDate: "2021-08-10",
      description: "Conscious Crafts: Quilting is a contemporary craft book containing 20 simple projects for gorgeous quilted pieces.",
      imageLink: "http://books.google.com/books/content?id=FEA6EAAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
    }
};
const history = createMemoryHistory();

const store = createStore(()=>[], {}, applyMiddleware());
let valueBookStore;

const renderComponent = () => (
  <Provider store={store}>
    <booksStoreContext value={{ valueBookStore }}>
      <Router location={history.location} navigator={history}>
        <Home />
      </Router>
    </booksStoreContext>
  </Provider>
);

describe('<Home />', () => {
  beforeEach(() => {
    valueBookStore = {
      booksList: book,
      getBooksList: jest.fn(),
      updateBook: jest.fn(),
    }
  });

  it('should contain the class home-container when component was render', () => {
    // arrange
    const { container } = render(renderComponent());

    // assert
    // expect(container.querySelector('.home-container')).toBeInTheDocument();
    expect(container).toMatchSnapshot();
  });
});
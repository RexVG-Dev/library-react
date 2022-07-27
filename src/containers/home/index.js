import React, { useContext, useEffect, useMemo }  from 'react';
import isEmpty from 'lodash/isEmpty';

import CardComponent from '../../components/card';
import booksStoreContext from '../../context/booksStore/books-store-context';

import './home.scss';

const Home = () => {
  const {booksList, getBooksList} = useContext(booksStoreContext);

  const listMemo = useMemo(() => {
    if (isEmpty(booksList?.data)) return undefined;

    return booksList?.data.filter(book => !book.wishList);
  }, [booksList.data]);

  useEffect(() => {
    if (isEmpty(booksList.data)){
      getBooksList();
    }
  }, [booksList]);

  return (
    <div className="home-container">
      <p className="home-container__title">
        Check our books list and add them to your wish list
      </p>
      <div className="home-container__cards">
      {listMemo && (
        listMemo.map(
          book => (
            <CardComponent {...book} key={`card-${book.id}`}/>
          )
        )
      )}
      </div>
    </div>
  )
};

export default Home;
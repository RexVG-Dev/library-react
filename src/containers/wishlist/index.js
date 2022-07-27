import React, { useContext, useEffect, useMemo } from 'react';
import isEmpty from 'lodash/isEmpty';
import { useNavigate } from 'react-router-dom';

import CardComponent from '../../components/card';
import booksStoreContext from '../../context/booksStore/books-store-context';

import { ROUTES } from '../../shared/constants';

import './wishlist.scss'

const CLASS_COMPONENT='wishlist-container'

const WishList = () => {
  const navigate = useNavigate();
  const {booksList, getBooksList } = useContext(booksStoreContext);

  const wishList = useMemo(() => {
    if (isEmpty(booksList?.data)) return undefined;

    return booksList?.data.filter(book => book.wishList);
  }, [booksList.data]);

  const handleNav = () => {
    navigate(ROUTES.HOME);
  };

  useEffect(() => {
    if (isEmpty(booksList.data)) {
      getBooksList();
    }
  }, [booksList]);

  return (
    <div className={CLASS_COMPONENT}>
      {isEmpty(wishList) ? (
        <div className={`${CLASS_COMPONENT}__empty`}>
          <span>
            Your wishlist is empty, add your favorite books 
            <strong 
              className={`${CLASS_COMPONENT}__empty--btn-nav`}
              onClick={handleNav}
            >
              here
            </strong>
           </span>
        </div>
      ) : (
        <p className={`${CLASS_COMPONENT}__title`} >
          Wishlist
        </p>
      )}
      <div className={`${CLASS_COMPONENT}__cards`}>
      {wishList && (
        wishList.map(
          book => (
            <CardComponent {...book} key={`card-${book.id}`}/>
          )
        )
      )}
      </div>
    </div>
  )
};

export default WishList;
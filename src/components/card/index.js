import React, { useContext } from 'react';

import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faBookmark, faTrashCan } from '@fortawesome/free-regular-svg-icons';

import { limitText } from '../../utils/formats';

import booksStoreContext from '../../context/booksStore/books-store-context';

import './card.scss';

const CLASS_COMPONENT = 'card-container';
const CardComponent = (book) => {
  const {wishList, volumeInfo} = book;

  const { updateBook } = useContext(booksStoreContext);

  const handleButton = async () => {
    const newBook = {
      ...book,
      wishList: !wishList,
    }
  
    await updateBook(newBook);
  }

  return (
    <div className={CLASS_COMPONENT}>
      <Card>
        <div className={`${CLASS_COMPONENT}__actions`}>
          <Button variant={wishList ? 'danger' : 'warning'} onClick={handleButton}>
            <FontAwesomeIcon icon={wishList ? faTrashCan : faBookmark}/>
          </Button>
        </div>
        <Card.Img variant="top" src={volumeInfo.imageLink} />
        <Card.Body>
          <Card.Title>{volumeInfo.title}</Card.Title>
          <Card.Text>
            {volumeInfo.subtitle && (
              <p className={`${CLASS_COMPONENT}__subtitle`}> {limitText(volumeInfo.subtitle, 40)} </p>
            )}
            {volumeInfo.description && (
              <p className={`${CLASS_COMPONENT}__description`}> {limitText(volumeInfo.description, 80)} </p>
            )}
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  )
};

export default CardComponent;
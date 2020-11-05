import React from 'react';
import PropTypes from 'prop-types'
import { useDispatch } from 'react-redux';

import './BookListItem.scss'


const BookListItem = ({book}) => {

    const dispatch = useDispatch()

    return (
        <li className = 'books__item books-item'>
            <div className = 'books-item__image'>
                <img src = {'https://img-gorod.ru/28/137/2813700_preview.jpg'} alt = 'books picture'/>
            </div>
            <p className = 'books-item__title'>{book.title}</p>
            <span className = 'books-item__author'>{book.author}</span>
            <div className = 'books-item__bottom'>
                <span>{book.price}</span>
                <button onClick = {() => dispatch({type: 'ADDED_ITEM_TO_CART', payload: book})}>Купить</button>   
            </div>
        </li>
    );
}


BookListItem.propTypes = {
    book: PropTypes.object
}

export default BookListItem;

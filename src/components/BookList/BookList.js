import React from 'react';
import { connect, useDispatch, useSelector } from 'react-redux';
import { fetchBooks, booksRequested } from '../../redux/actions/books';
import { BookListItem } from '../BookListItem';
import { Loader } from '../Loader';

import notFound from '../../assets/img/404.gif'

import './BookList.scss'

const BookList = () => {

    const dispatch = useDispatch()
    const {books, loading, error} = useSelector(state => state.books)

    React.useEffect(() => {
        dispatch(booksRequested())
        dispatch(fetchBooks())
    }, [])

    return (
        <ul className = 'books__list'>
                    
            {loading ? <Loader/> :
                error ? <img src = {notFound} alt = 'not-found' className = 'books__list-error'/>:
            
                books.map(book => {
                    return (
                        <BookListItem book = {book} key = {book.id} />
                    )
                })
            }
        </ul>
    );
}

export default BookList;

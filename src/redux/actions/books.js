import BookstoreService from '../../services/restore-service'

const restoreService = new BookstoreService()

const setBooks = (items) => {
    return {
        type: 'FETCH_BOOKS_SUCCESS',
        payload: items
    }
}

const booksRequested = () => {
    return {
        type: 'FETCH_BOOKS_REQUESTED'
    }
}

const booksError = () => {
    return {
        type: 'FETCH_BOOKS_FAILURE'
    }
}

 const fetchBooks = () => (dispatch)  =>{
    restoreService.getBooks()
        .then(data => {
            dispatch(setBooks(data))
        })
        .catch(() => {
            dispatch(booksError())
        })
 }


 export {
     setBooks,
     fetchBooks,
     booksRequested
 }
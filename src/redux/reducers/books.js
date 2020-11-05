const initialState = {
    books: [],
    loading:true,
    error: false
}

export const books = (state = initialState, action) => {
    switch (action.type) {
        case 'FETCH_BOOKS_SUCCESS':
            return{
                books: action.payload,
                loading:false
            }
        case 'FETCH_BOOKS_REQUEST':
            return {
                ...state,
                loading:true
            }
        case 'FETCH_BOOKS_FAILURE':
            return {
                ...state,
                loading:false,
                error: true
            }    
            
            
        default:
            return state
    }
}


const initialState = {
    books: []
}

export const books = (state = initialState, action) => {
    switch (action.type) {
        case 'BOOKS_LOADED':
            return{
                ...state,
                books: action.payload
            }
            
            
        default:
            return state
    }
}


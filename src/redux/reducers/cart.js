import { act } from "react-dom/test-utils"

const initialState = {
    items: {},
    totalCount: 0,
    totalPrice: 0
}


export const cart = (state = initialState, action) => {
    switch (action.type) {
        case 'ADDED_ITEM_TO_CART':

            const currentItems = !state.items[action.payload.id]
                ? [action.payload]
                : [...state.items[action.payload.id].items, action.payload]

            const newItems = {
                ...state.items,
                [action.payload.id]: {
                    items: currentItems,
                    totalPrice: currentItems.reduce((acum, obj) => acum + obj.price, 0)
                }
            }

            const allItems = [].concat.apply([], Object.values(newItems).map(obj => obj.items))


            return{
                ...state,
                items: newItems,
                totalCount: allItems.length
            }
        default:
            return state
    }
}
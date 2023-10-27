import { GlobalState } from "../interfaces";
import { getCartItemsAfterItemRemoval, getUpdatedCartItems } from "../utils";

export enum Actions {
    ADD_TO_CART = 'ADD_TO_CART',
    DECREMENT_FROM_CART = 'DECREMENT_FROM_CART',
    REMOVE_FROM_CART = 'REMOVE_FROM_CART'
};

type Action = {
    type: string;
    payload?: any
};

export const UserReducer = (state: GlobalState, action: Action) => {
    switch (action.type) {
        case Actions.ADD_TO_CART:
            return {
                ...state,
                cartItems: getUpdatedCartItems(state.cartItems, action.payload, 'ADD')
            }
        case Actions.DECREMENT_FROM_CART:
            return {
                ...state,
                cartItems: getUpdatedCartItems(state.cartItems, action.payload, 'REMOVE')
            }
        case Actions.REMOVE_FROM_CART:
            return {
                ...state,
                cartItems: getCartItemsAfterItemRemoval(state.cartItems, action.payload)
            }
        default:
            return state
    }
}

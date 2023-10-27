import React, { createContext, useReducer } from "react";
import { GlobalState, Product } from "../interfaces";
import { Actions, UserReducer } from "./UserReducer";

interface Props {
    children: React.ReactNode;
}

export const initialState: GlobalState = {
    firstName: 'Tamara',
    lastName: 'Jakimovska',
    displayName: 'Tamara Jakimovska',
    email: 'tamarajakimovska@gmail.com',
    cartItems: [],
    addToCart: (product: Product) => null,
    removeFromCart: (product: Product) => null,
    decrementFromCart: (product: Product) => null
}

export const Context = createContext<GlobalState>(initialState);

export const ContextProvider = ({ children }: Props) => {
    const [state, dispatch] = useReducer(UserReducer, initialState);

    console.log('OUR GLOBAL STATE', state);

    const addToCart = (product: Product) => {
        dispatch({ type: Actions.ADD_TO_CART, payload: product })
    }

    const decrementFromCart = (product: Product) => {
        dispatch({ type: Actions.DECREMENT_FROM_CART, payload: product })
    }

    const removeFromCart = (product: Product) => {
        dispatch({ type: Actions.REMOVE_FROM_CART, payload: product })
    }

    return (
        <Context.Provider
            value={{
                firstName: state.firstName,
                lastName: state.lastName,
                displayName: state.displayName,
                email: state.email,
                cartItems: state.cartItems,
                addToCart: (product: Product) => addToCart(product),
                removeFromCart: (product: Product) => removeFromCart(product),
                decrementFromCart: (product: Product) => decrementFromCart(product)
            }}>
            {children}
        </Context.Provider >
    )
}
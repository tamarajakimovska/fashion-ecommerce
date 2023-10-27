import { Product } from "../interfaces";

export function getUpdatedCartItems(cartItems: Product[], product: Product, mode: 'ADD' | 'REMOVE') {
    if(!cartItems.length) {
        return [ { ...product, quantity: 1 } ]
    }
    const isProductAddedToCart: boolean = cartItems.filter((item) => item.id === product.id).length > 0;

    if(isProductAddedToCart) {
        const indexOfProductAdded = cartItems.findIndex((item) => item.id === product.id);
        const productQuantity = cartItems[indexOfProductAdded]?.quantity;

        cartItems[indexOfProductAdded] = {
            ...cartItems[indexOfProductAdded], 
            quantity: mode === 'ADD' ? productQuantity + 1 : productQuantity - 1
        }

        const cartItemsWithQuantity = cartItems.filter((cartItem) => cartItem.quantity > 0);
        
        return cartItemsWithQuantity
    }


    return [
        ...cartItems, 
        {
            ...product, 
            quantity: 1
        }
    ]
};


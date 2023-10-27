import { Product } from ".";

export interface GlobalState { 
    firstName: string;
    lastName: string;
    displayName: string;
    email: string;
    cartItems: Product[];
    addToCart: (product: Product) => void;
    removeFromCart: (product: Product) => void;
    decrementFromCart: (product: Product) => void;
}

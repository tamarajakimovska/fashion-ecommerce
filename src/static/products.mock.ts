import { Product } from "../interfaces";

export const MOCK_PRODUCTS: Product[] = [
    { 
        id: '1', 
        quantity: 1, 
        images: [], 
        description: '1', 
        name: 'First', 
        price: 39, 
        reviews: [], 
        type: 'best_seller'
    },
    { 
        id: '2', 
        quantity: 1, 
        images: [], 
        description: '2', 
        name: 'Second', 
        price: 19, 
        reviews: [], 
        type: 'new'
    },
    { 
        id: '3', 
        quantity: 1, 
        images: [], 
        description: '3', 
        name: 'Third', 
        price: 49, 
        reviews: [], 
        type: 'new'
    },
    { 
        id: '4', 
        quantity: 1, 
        images: [], 
        description: '4', 
        name: 'Fourth', 
        price: 99, 
        reviews: [], 
        type: 'sales'
    }
];

export const MOCK_PRODUCT_WITH_MULTIPLE_QUANTITY: Product = {
    id: '5', 
    quantity: 7, 
    images: [], 
    description: '5', 
    name: 'Fifth', 
    price: 49, 
    reviews: [], 
    type: 'sales'
};

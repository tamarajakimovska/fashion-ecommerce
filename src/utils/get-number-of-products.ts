import { Product } from "../interfaces"

export function getNumberOfProducts(products: Product[]) {
    let numberOfProducts: number = 0

    for(let i=0; i < products.length; i++) {
        numberOfProducts = numberOfProducts + products[i].quantity
    }

    return numberOfProducts
};

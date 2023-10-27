import { Product } from "../interfaces"

export function getTotalPrice(products: Product[]) {
    let totalPrice: number = 0
    for(let i = 0; i < products.length; i++) {
        totalPrice = totalPrice + products[i].price * products[i].quantity
    }

    return totalPrice
};

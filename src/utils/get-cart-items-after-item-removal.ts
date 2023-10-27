import { Product } from "../interfaces";

export function getCartItemsAfterItemRemoval(products: Product[], product: Product) {
    return products.filter((currentProduct) => currentProduct.id !== product.id)
};

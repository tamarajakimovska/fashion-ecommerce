import { Product } from "../interfaces";

export function getActiveProducts(products: Product[], type: string) {
    return products.filter((product) => product.type === type)
}

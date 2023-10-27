import { getNumberOfProducts } from "..";
import { MOCK_PRODUCTS, MOCK_PRODUCT_WITH_MULTIPLE_QUANTITY } from "../../static";

describe('getNumberOfProducts should return', () => {
    it('zero if there are no products', () => {
        const result = getNumberOfProducts([]);

        expect(result).toBe(0);
    })

    it('4 if there are 4 different products with quantity of one', () => {
        const result = getNumberOfProducts(MOCK_PRODUCTS);

        expect(result).toBe(4);
    });

    it('11 if there are different products with different quantity', () => {
        const result = getNumberOfProducts([...MOCK_PRODUCTS, MOCK_PRODUCT_WITH_MULTIPLE_QUANTITY]);

        expect(result).toBe(11);
    });
});

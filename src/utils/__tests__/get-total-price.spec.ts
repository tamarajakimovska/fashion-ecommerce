import { getTotalPrice } from "..";
import { MOCK_PRODUCTS, MOCK_PRODUCT_WITH_MULTIPLE_QUANTITY } from "../../static";

describe('getTotalPrice should return', () => {
    it('zero if there are no products', () => {
        const result = getTotalPrice([]);

        expect(result).toBe(0);
    })

     it('correct total price for all product with respective quantity', () => {
        const result = getTotalPrice([...MOCK_PRODUCTS, MOCK_PRODUCT_WITH_MULTIPLE_QUANTITY]);

        expect(result).toBe(549);
     });
});

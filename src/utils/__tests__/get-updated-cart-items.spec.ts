import { getUpdatedCartItems } from "..";
import { MOCK_PRODUCTS, MOCK_PRODUCT_WITH_MULTIPLE_QUANTITY } from "../../static";

describe('getUpdatedCartItems should return', () => {
    it('the respective product with quantity 1, if there are no cart items', () => {
        const result = getUpdatedCartItems([], MOCK_PRODUCT_WITH_MULTIPLE_QUANTITY, 'ADD');

        expect(result).toEqual([{ ...MOCK_PRODUCT_WITH_MULTIPLE_QUANTITY, quantity: 1 }])
    })

    it('the respective product with updated quantity, if the product is already in cart items', () => {
        const result = getUpdatedCartItems([MOCK_PRODUCT_WITH_MULTIPLE_QUANTITY], MOCK_PRODUCT_WITH_MULTIPLE_QUANTITY, 'ADD');

        expect(result).toEqual([{ ...MOCK_PRODUCT_WITH_MULTIPLE_QUANTITY, quantity: 8 }])
    })

    it('already added products and new product, if the added product is new', () => {
        const result = getUpdatedCartItems([MOCK_PRODUCT_WITH_MULTIPLE_QUANTITY], MOCK_PRODUCTS[0], 'ADD');

        expect(result).toEqual([
            { ...MOCK_PRODUCT_WITH_MULTIPLE_QUANTITY, quantity: 7 },
            { ...MOCK_PRODUCTS[0], quantity: 1}
        ])
    })

    it('the same product with decremented quantity, if the product is decremented', () => {
        const result = getUpdatedCartItems([MOCK_PRODUCT_WITH_MULTIPLE_QUANTITY], MOCK_PRODUCT_WITH_MULTIPLE_QUANTITY, 'REMOVE');

        expect(result).toEqual([
            { ...MOCK_PRODUCT_WITH_MULTIPLE_QUANTITY, quantity: 6 }
        ])
    })

    it('empty array, if the product is decremented and previous quantity was 1', () => {
        const result = getUpdatedCartItems([MOCK_PRODUCTS[0]], MOCK_PRODUCTS[0], 'REMOVE');

        expect(result).toEqual([])
    })
});

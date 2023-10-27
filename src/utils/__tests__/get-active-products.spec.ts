
import {getActiveProducts} from '../get-active-products';

const MOCK_PRODUCTS = [
    { type: 'new', name: 'Shirt' },
    { type: 'best_seller', name: 'Shorts'},
    { type: 'sales', name: 'Skirt' },
    { type: 'new', name: 'Jeans' },
    { type: 'new', name: 'Jacket' }
]

describe('getActiveProducts should', () => {
  it('return empty array if there are no products', () => {
      const activeProducts = getActiveProducts([], "best_seller");
      expect(activeProducts).toEqual([])
  });

  it('return products with given type', () => {
      const activeProducts = getActiveProducts(MOCK_PRODUCTS, "new");
      expect(activeProducts).toEqual([MOCK_PRODUCTS[0],MOCK_PRODUCTS[3], MOCK_PRODUCTS[4]])
  })
});
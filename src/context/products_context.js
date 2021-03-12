import React, { useContext, useReducer, useEffect } from 'react';
import products from '../data/products';
import reducer from '../reducers/products_reducer';

const initialState = {
  all_products: products,
  filtered_products: products,
  filters: {
    text: '',
    category: 'All',
    brand: 'All',
    price: 0,
    max_price: 0,
    min_price: 0,
  },
};

const ProductsContext = React.createContext();

const ProductsProvider = ({ children }) => {
  const allProducts = products;
  const [state, dispatch] = useReducer(reducer, initialState);

  const updateMinMaxPrices = () => {
    const prices = state.all_products.map(product => product.price);
    state.filters.max_price = Math.max(...prices);
    state.filters.price = Math.max(...prices);
    state.filters.min_price = Math.min(...prices);
  };

  const updateFilters = e => {
    let name = e.target.name;
    let value = e.target.value;
    if (name === 'category') {
      value = e.target.textContent;
    }
    if (name === 'price') {
      value = Number(value);
    }
    dispatch({ type: 'UPDATE_FILTERS', payload: { value, name } });
  };

  const clearFilters = () => {
    dispatch({ type: 'CLEAR_FILTERS' });
  };

  useEffect(() => {
    updateMinMaxPrices();
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    dispatch({ type: 'FILTER_PRODUCTS' });
  }, [state.filters]);

  return (
    <ProductsContext.Provider
      value={{ ...state, allProducts, updateFilters, clearFilters }}
    >
      {children}
    </ProductsContext.Provider>
  );
};

export const useProductsContext = () => {
  return useContext(ProductsContext);
};

export default ProductsProvider;

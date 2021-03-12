import React, { useReducer, useContext, useEffect } from 'react';
import reducer from '../reducers/cart_reducer';

const getLocalStorage = () => {
  let cart = localStorage.getItem('casanova-cart');
  if (cart) {
    return JSON.parse(localStorage.getItem('casanova-cart'));
  } else {
    return [];
  }
};

const initialState = {
  cart: getLocalStorage(),
  total_items: 0,
  total_amount: 0,
  shipping_fee: 10.0,
};

const CartContext = React.createContext();

const CartProvier = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const addToCart = (id, amount, product) => {
    dispatch({ type: 'ADD_TO_CART', payload: { id, amount, product } });
  };

  const toggleAmount = (id, type) => {
    dispatch({ type: 'TOGGLE_AMOUNT', payload: { id, type } });
  };

  const removeItem = id => {
    dispatch({ type: 'REMOVE_ITEM', payload: id });
  };

  const clearCart = () => {
    dispatch({ type: 'CLEAR_CART' });
  };

  useEffect(() => {
    dispatch({ type: 'CALC_TOTALS' });
    localStorage.setItem('casanova-cart', JSON.stringify(state.cart));
  }, [state.cart]);

  return (
    <CartContext.Provider
      value={{ ...state, addToCart, toggleAmount, removeItem, clearCart }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCartContext = () => {
  return useContext(CartContext);
};

export default CartProvier;

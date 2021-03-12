import React from 'react';
import styled from 'styled-components';
import { useCartContext } from '../../context/cart_context';
import CartColumns from './CartColumns';
import CartItem from './CartItem';
import CartTotals from './CartTotals';
import { Link } from 'react-router-dom';

const CartContent = () => {
  const { cart, clearCart } = useCartContext();
  console.log(cart);

  return (
    <Wrapper className='section-center'>
      <CartColumns />
      {cart.map(cartItem => {
        return <CartItem key={cartItem.id} {...cartItem} />;
      })}
      <div className='link-container'>
        <Link to='/products' className='link-btn'>
          continue shopping
        </Link>
        <button className='clear-btn link-btn' onClick={clearCart}>
          Clear cart
        </button>
      </div>
      <CartTotals />
    </Wrapper>
  );
};

const Wrapper = styled.section`
  .link-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .link-btn {
    border: none;
    background-color: #337ba7;
    color: #fff;
    padding: 0.7rem 1.2rem;
    text-transform: capitalize;
    border-radius: 8px;
    cursor: pointer;
  }

  .clear-btn {
    background-color: red;
  }
`;

export default CartContent;

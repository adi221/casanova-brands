import React from 'react';
import PageHero from '../components/PageHero/PageHero';
import CartContent from '../components/Cart/CartContent';
import styled from 'styled-components';
import { useCartContext } from '../context/cart_context';
import { Link } from 'react-router-dom';

const CartPage = () => {
  const { cart } = useCartContext();

  if (cart.length < 1) {
    return (
      <Wrapper className='cart-page'>
        <h2>Your Cart is Empty</h2>
        <Link to='/products' className='btn'>
          fill it
        </Link>
      </Wrapper>
    );
  }

  return (
    <div className='cart-page'>
      <PageHero title='Cart' />
      <CartContent />
    </div>
  );
};

const Wrapper = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export default CartPage;

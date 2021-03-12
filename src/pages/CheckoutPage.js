import React from 'react';
import PageHero from '../components/PageHero/PageHero';
import StripeCheckout from '../components/StripeCheckout/StripeCheckout';
import styled from 'styled-components';
import { useCartContext } from '../context/cart_context';
import { Link } from 'react-router-dom';

const CheckoutPage = () => {
  const { cart } = useCartContext();

  return (
    <div className='checkout-page'>
      <PageHero title='Checkout' />
      <Wrapper>
        {cart.length < 1 ? (
          <div className='empty'>
            <h2>Your cart is empty</h2>
            <Link to='/products' className='btn'>
              Fill it
            </Link>
          </div>
        ) : (
          <StripeCheckout />
        )}
      </Wrapper>
    </div>
  );
};

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: calc(80vh - 12rem);

  .empty {
    text-align: center;

    a {
      display: block;
    }
  }
`;

export default CheckoutPage;

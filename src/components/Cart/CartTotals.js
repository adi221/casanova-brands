import React from 'react';
import { useCartContext } from '../../context/cart_context';
import { useUserContext } from '../../context/user_context';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const CartTotals = () => {
  const { total_amount, shipping_fee } = useCartContext();
  const { myUser, loginWithRedirect } = useUserContext();
  return (
    <Wrapper>
      <div>
        <article>
          <h5>
            subtotal : <span>${total_amount.toFixed(2)}</span>
          </h5>
          <p>
            shipping fee : <span>${shipping_fee.toFixed(2)}</span>
          </p>
          <hr />
          <h4>
            order total :{' '}
            <span>${(total_amount + shipping_fee).toFixed(2)}</span>
          </h4>
        </article>
        {myUser ? (
          <Link to='/checkout' className='btn'>
            proceed to checkout
          </Link>
        ) : (
          <button type='button' className='btn' onClick={loginWithRedirect}>
            Login
          </button>
        )}
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  margin-top: 3rem;
  display: flex;
  justify-content: center;
  article {
    border: 1px solid #999;
    border-top-left-radius: 8px;
    border-top-right-radius: 8px;
    padding: 1.5rem 3rem;
  }
  h4,
  h5,
  p {
    display: grid;
    grid-template-columns: 200px 1fr;
    text-transform: capitalize;
    margin: 0.5rem;
  }

  h5 {
    font-size: 18px;
  }
  h4 {
    margin-top: 2rem;
    font-size: 20px;
    text-transform: capitalize;
  }
  span {
    color: #181818;
  }
  @media (min-width: 776px) {
    justify-content: flex-end;
  }
  .btn {
    display: block;
    width: 100%;
    margin-top: -5px;
    text-align: center;
    font-size: 16px;
    padding: 0.7rem;
    text-transform: capitalize;
  }
`;

export default CartTotals;

import React from 'react';
import { FaShoppingCart, FaUserMinus, FaUserPlus } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { useStaffContext } from '../../context/staff_context';
import { useCartContext } from '../../context/cart_context';
import { useUserContext } from '../../context/user_context';

const CartLoginBtns = () => {
  const { toggleSidebar } = useStaffContext();
  const { total_items, clearCart } = useCartContext();
  const { loginWithRedirect, logout, myUser } = useUserContext();

  return (
    <Wrapper className='cart-btn-wrapper icons'>
      <Link to='/cart' className='cart-btn' onClick={toggleSidebar}>
        Cart
        <span className='cart-container'>
          <FaShoppingCart />
          <span className='cart-value'>{total_items}</span>
        </span>
      </Link>
      {myUser ? (
        <button
          type='button'
          className='auth-btn'
          onClick={() => {
            logout({ returnTo: window.location.origin });
            clearCart();
          }}
        >
          Logout <FaUserMinus />
        </button>
      ) : (
        <button type='button' className='auth-btn' onClick={loginWithRedirect}>
          Login <FaUserPlus />
        </button>
      )}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  span {
    color: inherit;
  }

  svg {
    vertical-align: baseline;
  }

  .cart-container {
    position: relative;
  }

  .cart-value {
    position: absolute;
    top: -10px;
    right: -20px;
    background-color: #2c6f91;
    width: 16px;
    height: 16px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    font-size: 0.9rem;
    color: #fff;
    padding: 10px;
  }
`;

export default CartLoginBtns;

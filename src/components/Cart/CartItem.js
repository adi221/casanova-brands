import React from 'react';
import { useCartContext } from '../../context/cart_context';
import styled from 'styled-components';
import AmountButtons from '../AddToCart/AmountButtons';
import { FaTrash } from 'react-icons/fa';

const CartItem = ({ id, image, amount, name, price }) => {
  const { removeItem, toggleAmount } = useCartContext();

  const increase = () => {
    toggleAmount(id, 'inc');
  };
  const decrease = () => {
    toggleAmount(id, 'dec');
  };

  return (
    <Wrapper>
      <div className='title'>
        <img src={image} alt='productImage' />
        <div>
          <h5 className='name'>{name}</h5>
          <h5 className='price-small'>${price}</h5>
        </div>
      </div>
      <h5 className='price'>${price}</h5>
      <AmountButtons amount={amount} increase={increase} decrease={decrease} />
      <h5 className='subtotal'>${(amount * price).toFixed(2)}</h5>
      <button
        className='remove-btn'
        type='button'
        onClick={() => removeItem(id)}
      >
        <FaTrash />
      </button>
    </Wrapper>
  );
};

const Wrapper = styled.article`
  .subtotal {
    display: none;
  }
  .price {
    display: none;
  }
  max-width: 90vw;
  display: grid;
  grid-template-columns: 200px auto auto;
  grid-template-rows: 75px;
  gap: 3rem 1rem;
  justify-items: center;
  margin-bottom: 3rem;
  align-items: center;
  .title {
    grid-template-rows: 75px;
    display: grid;
    grid-template-columns: 75px 125px;
    align-items: center;
    text-align: left;
    gap: 1rem;
  }
  img {
    width: 100%;
    height: 100%;
    display: block;
    border-radius: 8px;
    object-fit: cover;
  }
  h5 {
    font-size: 0.75rem;
    margin-bottom: 0;
  }

  .remove-btn {
    color: red;
    background: transparent;
    border: transparent;
    font-size: 20px;
    width: 1.5rem;
    height: 2rem;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    transition: all 0.3s linear;
  }

  .remove-btn:hover {
    opacity: 0.85;
  }
  @media (min-width: 776px) {
    .subtotal {
      display: block;
      margin-bottom: 0;
      color: var(--clr-grey-5);
      font-weight: 400;
      font-size: 1rem;
    }
    .price-small {
      display: none;
    }
    .price {
      display: block;
      font-size: 1rem;
      color: var(--clr-primary-5);
      font-weight: 400;
    }
    .name {
      font-size: 0.85rem;
    }

    grid-template-columns: 1fr 1fr 1fr 1fr auto;
    align-items: center;
    grid-template-rows: 75px;
    img {
      height: 100%;
    }
    .title {
      height: 100%;
      display: grid;
      grid-template-columns: 100px 200px;
      align-items: center;
      gap: 1rem;
      text-align: left;
    }
    .amount-btns {
      width: 100px;
      button {
        width: 1rem;
        height: 1rem;
        font-size: 1rem;
      }
      h2 {
        font-size: 1.5rem;
      }
    }
  }
  @media (max-width: 450px) {
    grid-template-columns: 200px auto;
    padding: 0 0.5rem;

    .remove-btn {
      justify-self: flex-end;
    }

    .amount-btns {
      display: none;
    }
  }
`;

export default CartItem;

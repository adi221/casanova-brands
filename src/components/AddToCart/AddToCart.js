import React, { useState } from 'react';
import AmountButtons from './AmountButtons';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { useCartContext } from '../../context/cart_context';

const AddToCart = ({ product }) => {
  const { id, countInStock } = product;
  const { addToCart } = useCartContext();

  const [amount, setAmount] = useState(1);

  const increase = () => {
    setAmount(oldAmount => {
      let tempAmount = oldAmount + 1;
      if (tempAmount > countInStock) {
        tempAmount = countInStock;
      }
      return tempAmount;
    });
  };

  const decrease = () => {
    setAmount(oldAmount => {
      let tempAmount = oldAmount - 1;
      if (tempAmount < 1) {
        tempAmount = 1;
      }
      return tempAmount;
    });
  };

  return (
    <Wrapper>
      <AmountButtons amount={amount} increase={increase} decrease={decrease} />
      <Link
        to='/cart'
        className='btn'
        onClick={() => addToCart(id, amount, product)}
      >
        Add To Cart
      </Link>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  a {
    margin-top: 4rem;
  }

  .btn {
    display: block;
    margin: 1.5rem auto;
    padding: 0.5rem 1rem;
    text-align: center;
  }
`;

export default AddToCart;

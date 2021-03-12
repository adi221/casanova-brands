import React from 'react';
import styled from 'styled-components';

const CartColumns = () => {
  return (
    <Wrapper>
      <div className='content'>
        <h5>item</h5>
        <h5>price</h5>
        <h5>quantity</h5>
        <h5>subtotal</h5>
        <span></span>
      </div>
      <hr />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: none;
  @media (min-width: 776px) {
    display: block;

    .content {
      display: grid;
      grid-template-columns: 316px 1fr 1fr 1fr auto;
      justify-items: center;
      column-gap: 1rem;
      h5 {
        text-transform: capitalize;
        font-size: 1rem;
      }
      span {
        width: 2rem;
        height: 2rem;
      }
    }
    hr {
      margin-top: 0.5rem;
      margin-bottom: 1.5rem;
    }
  }
`;

export default CartColumns;

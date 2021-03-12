import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const PageHero = ({ title, product, staff }) => {
  return (
    <Wrapper>
      <div className='section-center'>
        <h2>
          <Link to='/'>Home</Link> / {staff && <Link to='/staff'> Staff</Link>}
          {product && <Link to='/products'> Products</Link>}{' '}
          {(product || staff) && '/'} {title}
        </h2>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  background: linear-gradient(to right bottom, #2c6f91, #3883b8);
  padding: 50px 0;

  .section-center {
    text-align: left;
  }

  a {
    color: #000;
    border-bottom: 1px solid transparent;
    transition: all 0.3s linear;
  }

  a:hover {
    border-bottom: 1px solid #282736;
  }
`;

export default PageHero;

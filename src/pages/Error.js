import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Error = () => {
  return (
    <Wrapper>
      <h2>It Seems Like You are In The Wrong Page..</h2>
      <Link to='/'>
        <button className='btn' style={{ marginTop: '2.5rem' }}>
          Back to Home
        </button>
      </Link>
    </Wrapper>
  );
};

const Wrapper = styled.main`
  min-height: calc(100vh - 19rem);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  a {
    display: block;
  }
`;

export default Error;

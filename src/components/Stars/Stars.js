import React from 'react';
import styled from 'styled-components';
import { BsStarFill, BsStarHalf, BsStar } from 'react-icons/bs';

const Stars = ({ rating, numReviews }) => {
  const tempStars = Array.from({ length: 5 }, (_, index) => {
    return (
      <span key={index}>
        {rating >= index + 1 ? (
          <BsStarFill />
        ) : rating >= index + 0.5 ? (
          <BsStarHalf />
        ) : (
          <BsStar />
        )}
      </span>
    );
  });
  return (
    <Wrapper>
      <div className='stars'>{tempStars}</div>
      <p className='reviews'>({numReviews} customer reviews)</p>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 0.5rem;
  span {
    color: #ffb900;
    font-size: 1rem;
    margin-right: 0.25rem;
  }
  p {
    margin-left: 0.5rem;
    margin-bottom: 0;
    font-size: 14px;
    letter-spacing: 0.7;
  }
`;

export default Stars;

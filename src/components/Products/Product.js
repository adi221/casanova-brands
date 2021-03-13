import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { FaEye } from 'react-icons/fa';

const Product = ({ id, name, image, price }) => {
  return (
    <Wrapper>
      <div className='image-container'>
        <img src={image} alt={name} />
        <Link to={`products/${id}`} className='link'>
          <FaEye />
        </Link>
      </div>
      <footer>
        <h3>{name}</h3>
        <p>${price}</p>
      </footer>
    </Wrapper>
  );
};

const Wrapper = styled.article`
  max-width: 90vw;

  .image-container {
    height: 400px;
    position: relative;
    background: #000;
  }
  .link {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    display: grid;
    justify-content: center;
    place-items: center;
    opacity: 0;
    background: #444;
    cursor: pointer;
    width: 4.5rem;
    height: 4.5rem;
    border-radius: 50%;
    transition: all 0.3s linear;
    svg {
      font-size: 2rem;
      color: #fff;
    }
  }

  .image-container:hover .link {
    opacity: 1;
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 8px;
  }
  footer {
    margin-top: 3px;
    display: flex;
    justify-content: space-between;
  }

  footer p {
    color: #91562c;
  }
`;

export default Product;

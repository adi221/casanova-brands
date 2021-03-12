import React from 'react';
import PageHero from '../components/PageHero/PageHero';
import { useProductsContext } from '../context/products_context';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import Stars from '../components/Stars/Stars';
import AddToCart from '../components/AddToCart/AddToCart';

const SingleProduct = () => {
  const { allProducts } = useProductsContext();
  const { id } = useParams();

  const product = allProducts.find(p => p.id === +id);

  const {
    brand,
    category,
    countInStock,
    description,
    image,
    name,
    numReviews,
    price,
    rating,
  } = product;

  return (
    <main>
      <PageHero title={name} product />
      <Wrapper className='product-center'>
        <img src={`.${image}`} alt={name} />
        <article className='content'>
          <h1>{name}</h1>
          <Stars rating={rating} numReviews={numReviews} />
          <h4 className='price'>${price}</h4>
          <p className='desc'>{description}</p>
          <p className='info'>
            <span>Available:</span>
            {countInStock}
          </p>
          <p className='info'>
            <span>Category:</span>
            {category}
          </p>
          <p className='info'>
            <span>Brand:</span>
            {brand}
          </p>
          <hr />
          {countInStock && (
            <div className='cart'>
              <span>Quantity:</span>
              <AddToCart product={product} />
            </div>
          )}
        </article>
      </Wrapper>
    </main>
  );
};

const Wrapper = styled.div`
  display: grid;
  gap: 2.5rem;
  width: 90vw;
  max-width: 1170px;
  margin: 2rem auto;
  grid-template-columns: 1fr 1fr;

  img {
    max-height: 480px;
    object-fit: cover;
    border-radius: 8px;
  }

  .content {
    text-align: left;
  }

  .content > * {
    margin-bottom: 10px;
  }

  .desc {
    line-height: 2;
  }

  .price {
    color: #91562c;
  }

  span {
    font-weight: bold;
    margin-right: 10px;
  }

  .cart span {
    display: block;
    margin-bottom: 1.5rem;
  }

  hr {
    margin: 2rem;
  }

  @media (min-width: 960px) {
    .product-center {
    }
  }
`;

export default SingleProduct;

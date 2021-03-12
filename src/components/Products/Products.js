import React from 'react';
import styled from 'styled-components';
import { useProductsContext } from '../../context/products_context';
import Product from './Product';

const Products = () => {
  const { filtered_products: products } = useProductsContext();

  return (
    <Wrapper>
      {products.map(product => {
        return <Product key={product.id} {...product} />;
      })}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(360px, 1fr));
  gap: 1.5rem 3rem;
`;

export default Products;

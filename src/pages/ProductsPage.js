import React from 'react';
import styled from 'styled-components';
import PageHero from '../components/PageHero/PageHero';
import Products from '../components/Products/Products';
import Filters from '../components/Filters/Filters';

const ProductsPage = () => {
  return (
    <main style={{ marginTop: '0' }}>
      <PageHero title='Products' />
      <Wrapper>
        <div className='section-center products'>
          <Filters />
          <Products />
        </div>
      </Wrapper>
    </main>
  );
};

const Wrapper = styled.section`
  .products {
    display: grid;
    gap: 2rem 1.5rem;
    margin: 1rem auto 2rem auto;

    @media (min-width: 768px) {
      grid-template-columns: 200px 1fr;
    }
  }
`;

export default ProductsPage;

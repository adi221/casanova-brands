import React from 'react';
import styled from 'styled-components';
import { useProductsContext } from '../../context/products_context';

const Filters = () => {
  const {
    updateFilters,
    clearFilters,
    filters: { text, category, brand, price, min_price, max_price },
    all_products,
  } = useProductsContext();

  console.log(all_products);

  const uniqueValues = type => {
    return [
      'All',
      ...all_products
        .map(product => product[type])
        .filter((val, index, arr) => arr.indexOf(val) === index),
    ];
  };

  const categories = uniqueValues('category');
  const brands = uniqueValues('brand');

  return (
    <Wrapper>
      <div className='filters'>
        <form onSubmit={e => e.preventDefault()}>
          {/* Search Input */}
          <div className='form-control'>
            <input
              className='search'
              type='text'
              name='text'
              value={text}
              placeholder='Search...'
              onChange={updateFilters}
            />
          </div>
          {/* Categories */}
          <div className='form-control'>
            <h4>Category</h4>
            {categories.map((c, index) => {
              return (
                <button
                  key={index}
                  value={category}
                  className={`${
                    c === category ? 'category active-c' : 'category'
                  }`}
                  name='category'
                  onClick={updateFilters}
                >
                  {c}
                </button>
              );
            })}
          </div>
          {/* Brands */}
          <div className='form-control'>
            <h4>Brand</h4>
            <select
              name='brand'
              value={brand}
              onChange={updateFilters}
              className='brand'
            >
              {brands.map((b, index) => {
                return (
                  <option key={index} value={b}>
                    {b}
                  </option>
                );
              })}
            </select>
          </div>
          {/* Price */}
          <div className='form-control'>
            <h4>Price</h4>
            <p className='price'>${price}</p>
            <input
              type='range'
              name='price'
              value={price}
              min={min_price}
              max={max_price}
              onChange={updateFilters}
            />
          </div>
          {/* Clear button */}
        </form>
        <button className='clear-btn' type='button' onClick={clearFilters}>
          Clear Filters
        </button>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  .form-control {
    margin-bottom: 1.25rem;
  }

  .search {
    width: 200px;
    height: 40px;
    padding: 20px 10px;
    border: 1px solid #ccc;
    border-radius: 4px;
    outline: none;
    font-family: inherit;
  }

  .category {
    margin: 5px 0;
    transition: all 0.3s linear;
    cursor: pointer;
    display: block;
    border: none;
    background: transparent;
    font-family: inherit;
    outline: none;
  }

  .active-c {
    border-left: 2px solid #000;
    padding-left: 15px;
  }

  .price {
    font-size: 14px;
  }

  .clear-btn {
    color: #fff;
    padding: 10px 20px;
    background-color: red;
    border: none;
    outline: none;
    border-radius: 8px;
    letter-spacing: 1.5px;
    cursor: pointer;
  }

  /* @media (max-width: 768px) {
    form {
      display: flex;
      flex-wrap: wrap;
      padding: 10px 15px;
    }
    form > * {
      margin: 20px;
    }
  } */
`;

export default Filters;

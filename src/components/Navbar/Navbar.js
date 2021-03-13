import React from 'react';
import { Link } from 'react-router-dom';
import { links } from '../../data/data';
import { FaBars } from 'react-icons/fa';
import { useStaffContext } from '../../context/staff_context';
import { useUserContext } from '../../context/user_context';
import CartLoginBtns from '../Cart/CartLoginBtns';
import styled from 'styled-components';

const Navbar = () => {
  const { toggleSidebar } = useStaffContext();
  const { myUser } = useUserContext();

  return (
    <Wrapper>
      <div className='nav-center'>
        <div className='nav-header'>
          <Link to='/'>
            <h2>
              Casanova<span className='span'>Brands</span>Inc.
            </h2>
          </Link>
          <button className='toggle-btn' onClick={toggleSidebar}>
            <FaBars />
          </button>
        </div>
        <div className='links-container'>
          <ul className='links'>
            {links.map(link => {
              const { id, url, text } = link;
              return (
                <Link key={id} to={url}>
                  <li>{text}</li>
                </Link>
              );
            })}
            {myUser && (
              <Link to='/checkout'>
                <li>Checkout</li>
              </Link>
            )}
          </ul>
        </div>
        <CartLoginBtns />
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.nav`
  @media (max-width: 1200px) {
    .cart-btn-wrapper {
      display: none;
    }
  }
`;

export default Navbar;

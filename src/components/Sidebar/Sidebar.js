import React from 'react';
import { links, social } from '../../data/data';
import { FaTimes } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { useStaffContext } from '../../context/staff_context';
import { useUserContext } from '../../context/user_context';
import CartLoginBtns from '../Cart/CartLoginBtns';

const Sidebar = () => {
  const { toggleSidebar, isShowSidebar } = useStaffContext();
  const { myUser } = useUserContext();

  return (
    <aside className={`${isShowSidebar ? 'sidebar show-sidebar' : 'sidebar'}`}>
      <div className='sidebar-header'>
        <Link to='/'>
          <h2>
            Casanova<span className='span'>Brands</span>Inc.
          </h2>
        </Link>
        <button className='close-btn' onClick={toggleSidebar}>
          <FaTimes />
        </button>
      </div>
      <div className='sidebar-links'>
        {links.map(link => {
          const { id, url, text } = link;
          return (
            <Link key={id} to={url} onClick={toggleSidebar}>
              {text}
            </Link>
          );
        })}
        {myUser && (
          <Link to='/checkout' onClick={toggleSidebar}>
            Checkout
          </Link>
        )}
      </div>
      <div className='sidebar-social'>
        <ul className='icons'>
          {social.map(link => {
            const { id, url, icon } = link;
            return (
              <li key={id}>
                <a href={url}>{icon}</a>
              </li>
            );
          })}
        </ul>
      </div>
      <CartLoginBtns />
    </aside>
  );
};

export default Sidebar;

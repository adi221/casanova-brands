import React from 'react';
import Search from '../components/Search/Search';
import Persons from '../components/Persons/Persons';
import Modal from '../components/Modal/Modal';
import PageHero from '../components/PageHero/PageHero';
import { useStaffContext } from '../context/staff_context';

const Staff = () => {
  const { openModal } = useStaffContext();

  return (
    <>
      <main>
        <PageHero title='Staff' />
        <h1 style={{ marginTop: '2rem' }}>Our Amazing Staff!</h1>
        <div className='underline'></div>
        <Search />
        <Persons />
      </main>

      {openModal && <Modal />}
    </>
  );
};

export default Staff;

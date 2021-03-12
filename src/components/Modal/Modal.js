import React from 'react';
import { useStaffContext } from '../../context/staff_context';
import { Link } from 'react-router-dom';
import Overlay from './Overlay';

const Modal = () => {
  const { openModal, setOpenModal, persons, id } = useStaffContext();
  const person = persons.find(person => person.cell === id);

  if (!openModal) {
    return null;
  }

  return (
    <>
      <Overlay clicked={() => setOpenModal(false)} />
      <div
        className='modal'
        style={{
          opacity: openModal ? '1' : '0',
        }}
      >
        <img src={person.picture.large} alt='person' />
        <h2>
          {person.name.title} {person.name.first} {person.name.last}
        </h2>
        <Link
          to={`/person/${id}`}
          className='btn'
          onClick={() => setOpenModal(false)}
        >
          More Details
        </Link>
      </div>
    </>
  );
};

export default Modal;

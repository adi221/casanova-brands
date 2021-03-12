import React from 'react';
import Person from './Person';
import { useStaffContext } from '../../context/staff_context';

const Persons = () => {
  const { persons, loading, setId, setOpenModal } = useStaffContext();

  const openModalHandler = idPerson => {
    setId(idPerson);
    setOpenModal(true);
  };

  if (loading) {
    return <main>Loading...</main>;
  }

  if (persons.length < 1) {
    return (
      <h2 style={{ textAlign: 'center', marginTop: '1rem' }}>
        No one matches your criteria
      </h2>
    );
  }

  return (
    <div className='persons-container'>
      {persons.map(person => {
        return (
          <Person
            key={person.cell}
            {...person}
            click={() => openModalHandler(person.cell)}
          />
        );
      })}
    </div>
  );
};

export default Persons;

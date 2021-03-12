import React from 'react';

import { useStaffContext } from '../context/staff_context';
import { useParams } from 'react-router-dom';
import PageHero from '../components/PageHero/PageHero';

const SinglePerson = () => {
  const { persons, loading } = useStaffContext();
  const { id } = useParams();

  if (loading) {
    return <h1>Loading</h1>;
  }

  const person = persons.find(person => person.cell === id);

  return (
    <div className='single-person-page'>
      <PageHero title={`${person.name.first} ${person.name.last}`} staff />
      <main style={{ marginTop: '4rem' }}>
        <div className='single-person-container'>
          <img src={person.picture.large} alt={person.name.first} />
          <div className='person-info'>
            <h2>
              <span className='person-data'>Name: </span>
              {person.name.first} {person.name.last}
            </h2>
            <h2>
              <span className='person-data'>Email: </span>
              {person.email}
            </h2>
            <h2>
              <span className='person-data'>Phone: </span>
              {person.phone}
            </h2>
          </div>
        </div>
      </main>
    </div>
  );
};

export default SinglePerson;

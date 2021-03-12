import React from 'react';

const Person = ({ picture, email, name, location, click }) => {
  return (
    <div className='person' onClick={click}>
      <img src={picture.medium} alt={name.first} />
      <div className='person-info'>
        <h2>
          {name.first} {name.last}
        </h2>
        <p>{email}</p>
        <p>
          {location.city}, {location.country}
        </p>
      </div>
    </div>
  );
};

export default Person;

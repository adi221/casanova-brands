import React from 'react';
import { FaSearch } from 'react-icons/fa';
import { useStaffContext } from '../../context/staff_context';

const Search = () => {
  const [input, setInput] = React.useState('');

  const { originalPeople, setPersons } = useStaffContext();
  const searchValue = React.useRef('');

  React.useEffect(() => {
    searchValue.current.focus();
  }, []);

  const inputChangeHandler = e => {
    setInput(e.target.value);

    if (!input) return setPersons(originalPeople);
    const newPersons = [...originalPeople].filter(person => {
      return (
        person.name.first.toLowerCase().startsWith(e.target.value) ||
        person.name.last.toLowerCase().startsWith(e.target.value)
      );
    });
    setPersons(newPersons);
  };

  return (
    <>
      <form className='search' onSubmit={e => e.preventDefault()}>
        <input
          type='text'
          className='search-field'
          placeholder='Search...'
          ref={searchValue}
          value={input}
          onChange={inputChangeHandler}
        />
        <button type='submit' className='search-btn'>
          <FaSearch />
        </button>
      </form>
    </>
  );
};

export default Search;

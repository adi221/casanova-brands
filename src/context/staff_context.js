import React, { useState, useContext, useEffect } from 'react';

const url = 'https://randomuser.me/api/?results=50';
const StaffContext = React.createContext();
let originalPeople;

const StaffProvider = ({ children }) => {
  const [persons, setPersons] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchInput, setSearchInput] = useState('');
  const [openModal, setOpenModal] = useState(false);
  const [id, setId] = useState(null);
  const [isShowSidebar, setIsShowSidebar] = useState(false);

  const fetchPeople = async () => {
    setLoading(true);
    try {
      const res = await fetch(url);
      const data = await res.json();
      originalPeople = data.results;
      setPersons(data.results);
      setLoading(false);
    } catch (e) {
      console.log(e);
      setLoading(false);
    }
  };

  const toggleSidebar = () => {
    setIsShowSidebar(!isShowSidebar);
  };

  useEffect(() => {
    fetchPeople();
  }, []);

  return (
    <StaffContext.Provider
      value={{
        originalPeople,
        loading,
        persons,
        setPersons,
        setSearchInput,
        searchInput,
        id,
        setId,
        openModal,
        setOpenModal,
        isShowSidebar,
        toggleSidebar,
      }}
    >
      {children}
    </StaffContext.Provider>
  );
};

// make sure use
export const useStaffContext = () => {
  return useContext(StaffContext);
};

export default StaffProvider;

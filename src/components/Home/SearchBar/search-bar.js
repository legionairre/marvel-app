import React, { useEffect, useState } from 'react';
import './search-bar.scss';

const SearchBar = () => {
  const [searchValue, setSearchValue] = useState('');

  useEffect(() => {
    console.log('Init');
  }, []);

  return (
    <div className="searchBox">
      <input
        className="searchInput"
        type="text"
        name=""
        placeholder="Search your favorite character"
        value={searchValue}
        onChange={(event) => setSearchValue(event.target.value)}
      />
      <button className="searchButton" onClick={() => console.log(searchValue)}>
        <i className="material-icons">Go</i>
      </button>
    </div>
  );
};

export default SearchBar;

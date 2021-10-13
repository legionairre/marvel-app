import React from 'react';
import './search-bar.scss';

const SearchBar = ({ searchValue, setSearchValue, search }) => {
  return (
    <div className="searchBox">
      <input
        className="searchInput"
        type="text"
        name=""
        placeholder="Search your favorite character"
        value={searchValue}
        onChange={(event) => setSearchValue(event.target.value)}
        onKeyPress={(event) => {
          if (event.key === 'Enter') {
            search();
          }
        }}
      />
      <button className="searchButton" onClick={() => search()}>
        <i className="material-icons">Go</i>
      </button>
    </div>
  );
};

export default SearchBar;

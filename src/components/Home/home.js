import React from 'react';
import './home.scss';
import Header from './Header/header';
import SearchBar from './SearchBar/search-bar';
import CharacterList from './CharacterList/character-list';

const Home = () => {
  return (
    <div>
      <Header />
      <SearchBar />
      <CharacterList />
    </div>
  );
};

export default Home;

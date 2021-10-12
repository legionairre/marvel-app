import React, { useEffect } from 'react';
import './home.scss';
import Header from './Header/header';
import SearchBar from './SearchBar/search-bar';
import CharacterList from './CharacterList/character-list';

const Home = () => {
  useEffect(() => {
    console.log('Init Home Page');
  }, []);

  return (
    <div>
      <Header />
      <SearchBar />
      <CharacterList />
    </div>
  );
};

export default Home;

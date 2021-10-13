import React, { useEffect, useState } from 'react';
import './home.scss';
import Header from './Header/header';
import SearchBar from './SearchBar/search-bar';
import CharacterList from './CharacterList/character-list';
import Spinner from '../Spinner/spinner';
import axios from 'axios';
import { marvelApi } from '../../config/config';

const Home = () => {
  const [spinnerActive, setSpinnerActive] = useState(false);
  const [offset, setOffset] = useState(0);
  const [items, setItems] = useState([]);
  const [totalItemsCount, setTotalItemsCount] = useState([]);
  const [searchValue, setSearchValue] = useState('');
  const [isSearchActive, setSearchActive] = useState(false);

  useEffect(() => {
    setOffset(0);
    if (searchValue && searchValue.trim() !== '') {
      setSearchActive(true);
    } else {
      setSearchActive(false);
      getCharacters();
    }
  }, [searchValue]);

  const getCharacters = () => {
    setSpinnerActive(true);
    axios
      .get(
        marvelApi.API_URL +
          '/characters?limit=30&offset=0&apikey=' +
          marvelApi.publicKey
      )
      .then((response) => {
        setItems(response.data.data.results);
        setSpinnerActive(false);
        setOffset((offset) => offset + 30);
        setTotalItemsCount(response.data.data.total);
      })
      .catch((err) => {
        console.error(err);
        setSpinnerActive(false);
      });
  };

  const getNextCharacters = () => {
    setSpinnerActive(true);
    axios
      .get(
        marvelApi.API_URL +
          '/characters?limit=30&offset=' +
          offset +
          '&apikey=' +
          marvelApi.publicKey
      )
      .then((response) => {
        setItems((items) => [...items, ...response.data.data.results]);
        setSpinnerActive(false);
        setOffset((offset) => offset + 30);
        setTotalItemsCount(response.data.data.total);
      })
      .catch((err) => {
        console.error(err);
        setSpinnerActive(false);
      });
  };

  const getCharactersBySearchValue = () => {
    setSpinnerActive(true);
    axios
      .get(
        marvelApi.API_URL +
          '/characters?nameStartsWith=' +
          searchValue +
          '&limit=30&offset=0&apikey=' +
          marvelApi.publicKey
      )
      .then((response) => {
        setItems(response.data.data.results);
        setSpinnerActive(false);
        setOffset((offset) => offset + 30);
        setTotalItemsCount(response.data.data.total);
      })
      .catch((err) => {
        console.error(err);
        setSpinnerActive(false);
      });
  };

  const getNextCharactersBySearchValue = () => {
    setSpinnerActive(true);
    axios
      .get(
        marvelApi.API_URL +
          '/characters?nameStartsWith=' +
          searchValue +
          '&limit=30&offset=' +
          offset +
          '&apikey=' +
          marvelApi.publicKey
      )
      .then((response) => {
        setItems((items) => [...items, ...response.data.data.results]);
        setSpinnerActive(false);
        setOffset((offset) => offset + 30);
        setTotalItemsCount(response.data.data.total);
      })
      .catch((err) => {
        console.error(err);
        setSpinnerActive(false);
      });
  };

  return (
    <div>
      {spinnerActive && <Spinner />}
      <Header />
      <SearchBar
        searchValue={searchValue}
        setSearchValue={(value) => setSearchValue(value)}
        search={getCharactersBySearchValue}
      />
      <CharacterList
        getNextCharacters={() => getNextCharacters()}
        getNextCharactersBySearchValue={() => getNextCharactersBySearchValue()}
        items={items}
        setSpinnerActive={(status) => setSpinnerActive(status)}
        searchValue={searchValue}
        totalItemsCount={totalItemsCount}
        isSearchActive={isSearchActive}
      />
    </div>
  );
};

export default Home;

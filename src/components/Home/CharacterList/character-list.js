import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './character-list.scss';
import { marvelApi } from '../../../config/config';
import Spinner from '../../Spinner/spinner';
import InfiniteScroll from 'react-infinite-scroll-component';
import CharacterBox from './CharacterBox/character-box';
import Detail from '../../Detail/detail';

const CharacterList = () => {
  const [offset, setOffset] = useState(0);
  const [spinnerActive, setSpinnerActive] = useState(false);
  const [items, setItems] = useState([]);
  const [selectedChar, setSelectedChar] = useState(null);

  useEffect(() => {
    getCharacters();
  }, []);

  const getCharacters = () => {
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
      })
      .catch((err) => {
        console.error(err);
        setSpinnerActive(false);
      });
  };

  return (
    <div>
      {spinnerActive && <Spinner />}
      <InfiniteScroll
        next={getCharacters}
        hasMore={items.length < 1559}
        dataLength={items.length}
        loader={''}
      >
        <div className={'char-list-container'}>
          {items.map((item, index) => (
            <div key={index + '_' + item.id}>
              <CharacterBox
                item={item}
                setSelectedChar={(char) => setSelectedChar(char)}
              />
            </div>
          ))}
        </div>
      </InfiniteScroll>
      <Detail
        selectedChar={selectedChar}
        setSelectedChar={(id) => setSelectedChar(id)}
        setSpinnerActive={(status) => setSpinnerActive(status)}
      />
    </div>
  );
};

export default CharacterList;

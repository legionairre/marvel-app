import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './character-list.scss';
import { marvelApi } from '../../../config/config';
import Spinner from '../../Spinner/spinner';
import InfiniteScroll from 'react-infinite-scroll-component';
import CharacterBox from './CharacterBox/character-box';

const CharacterList = () => {
  const [offset, setOffset] = useState(0);
  const [spinnerActive, setSpinnerActive] = useState(false);
  const [items, setItems] = useState([]);

  useEffect(() => {
    getCharacters();
  }, []);

  const getCharacters = () => {
    // max offset value 1558
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
        console.log(response);

        setItems((items) => [...items, ...response.data.data.results]);
        setSpinnerActive(false);
        setOffset((offset) => offset + 1);
        console.log(items);
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
        hasMore={true}
        dataLength={items.length}
        loader={''}
      >
        <div className={'char-list-container'}>
          {items.map((item, index) => (
            <div key={index + '_' + item.id}>
              <CharacterBox item={item} />
            </div>
          ))}
        </div>
      </InfiniteScroll>
    </div>
  );
};

export default CharacterList;

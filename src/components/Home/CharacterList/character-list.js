import React, { useState } from 'react';
import './character-list.scss';
import InfiniteScroll from 'react-infinite-scroll-component';
import CharacterBox from './CharacterBox/character-box';
import Detail from '../../Detail/detail';

const CharacterList = ({
  setSpinnerActive,
  getNextCharacters,
  getNextCharactersBySearchValue,
  items,
  isSearchActive,
  totalItemsCount
}) => {
  const [selectedChar, setSelectedChar] = useState(null);

  return (
    <div>
      <InfiniteScroll
        next={
          isSearchActive ? getNextCharactersBySearchValue : getNextCharacters
        }
        hasMore={items.length < totalItemsCount}
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

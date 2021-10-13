import React from 'react';
import './character-box.scss';

const CharacterBox = ({ item, setSelectedChar }) => {
  return (
    <div
      className="char-container tooltip-char"
      onClick={() => setSelectedChar(item)}
    >
      <img
        className={'character-thumbnail'}
        src={item.thumbnail.path + '.' + item.thumbnail.extension}
        alt={'character-thumbnail-' + item.id}
        width="225"
        height="225"
      />
      <span className="tooltiptext">{item.name}</span>
    </div>
  );
};

export default CharacterBox;

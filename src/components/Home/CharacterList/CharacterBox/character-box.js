import React, { useEffect } from 'react';
import './character-box.scss';

const CharacterBox = ({ item }) => {
  useEffect(() => {
    console.log(item);
  }, []);

  return (
    <div className="char-container tooltip-char">
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

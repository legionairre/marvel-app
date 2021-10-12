import React from 'react';
import './header.scss';
import MarvelSVG from '../../../assets/images/marvel.svg';

const Header = () => {
  return (
    <div className={'header-container'}>
      <MarvelSVG height={70} />
    </div>
  );
};

export default Header;

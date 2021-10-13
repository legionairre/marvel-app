import React, { useEffect, useState } from 'react';
import './detail.scss';
import Modal from 'react-modal';
import axios from 'axios';
import { marvelApi } from '../../config/config';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    height: '600px',
    inset: '50% 10% 10% 50%',
    maxWidth: '1024px'
  }
};

Modal.setAppElement('#root');

const Detail = ({ selectedChar, setSpinnerActive, setSelectedChar }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [charactersComics, setCharactersComics] = useState([]);

  useEffect(() => {
    if (selectedChar) {
      openModal();
    }
  }, [selectedChar]);

  const openModal = () => {
    setIsOpen(true);
    getCharacterDetails();
  };

  const closeModal = () => {
    setIsOpen(false);
    setSelectedChar(null);
  };

  const getCharacterDetails = () => {
    setSpinnerActive(true);
    axios
      .get(
        marvelApi.API_URL +
          '/characters/' +
          selectedChar.id +
          '/comics?orderBy=onsaleDate&limit=10&apikey=' +
          marvelApi.publicKey
      )
      .then((response) => {
        setCharactersComics(response.data.data.results);
        setSpinnerActive(false);
      })
      .catch((err) => {
        console.error(err);
        setSpinnerActive(false);
      });
  };

  return (
    <div>
      <Modal
        isOpen={isOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Character Detail"
      >
        <div className={'modal-detail-container'}>
          {selectedChar && (
            <div className={'char-name-image-desc'}>
              <img
                className={'char-thumbnail'}
                src={
                  selectedChar.thumbnail.path +
                  '.' +
                  selectedChar.thumbnail.extension
                }
                alt={'character-thumbnail'}
                width="225"
              />
              <div className={'char-name-desc-container'}>
                <div className={'char-name'}>{selectedChar.name}</div>
                <div className={'char-desc'}>{selectedChar.description}</div>
              </div>
            </div>
          )}
          <hr />
          <div className={'comics-head'}>COMICS</div>
          <hr />
          <div className={'char-comics-container'}>
            {charactersComics.length ?
              charactersComics.map((item, index) => (
                <div
                    className={'char-comics-thumbnail-title'}
                    key={index + '_' + item.id}
                  >
                  <img
                      className={'char-comic-thumbnail'}
                      src={item.thumbnail.path + '.' + item.thumbnail.extension}
                      alt={'character-thumbnail-' + item.id}
                      width="225"
                    />
                  <div className={'char-comic-title'}>{item.title}</div>
                </div>
                )) :
              null}
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default Detail;

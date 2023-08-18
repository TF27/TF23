import React, { useState } from 'react';
import './history.css';
import blurr from './assets/blurr.png';
import edm from './assets/edm.png';
import historyImage from './assets/history.png';
import tv from './assets/tv.png';

const images = [
  { id: 'history', url: historyImage, width: '100%'},
  { id: 'blurr', url: blurr, height: '100%', width: '85%' ,text: '2021',additionalText:'lorem podem todem afjhsdbfjhvyjhdvbfjsdvbfsdgbfjufyjsd'},
  { id: 'edm', url: edm, width: '50%',text: '2021',additionalText:'idfhasdiobvsauhfasbfkfhvnoixkhdbaifkihisk' },
  { id: 'blurr', url: blurr, height: '100%', width: '85%' ,text: '2099',additionalText:'dsuhiafhisdhfjhsdvfviwegfvhsdghcvjsd'},
  { id: 'edm', url: edm, width: '50%',text: '2099',additionalText:'hunfksadnufkbsdjfbsudkfbskdjfbs' },
];

const HistoryItem = ({ imageUrl, height, width, isVisible, id, text, additionalText }) => (
  <div className={`history-item ${isVisible ? 'visible' : ''}`} style={{ height, width }}>
    <div className={`history-image ${id}`} style={{ backgroundImage: `url(${imageUrl})` }}>
      {text && <div className="image-text">{text}</div>}
      {additionalText && <div className="additional-text">{additionalText}</div>}
    </div>
  </div>
);

const History = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNextButtonClick = () => {
    console.log(currentIndex);
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  return (
    <section className="history-container" >
      <div className="ripple-container">
        <div className="ripple"></div>
      </div>
      <div className="overlay-images" onClick={handleNextButtonClick}>
        {images.map(({ id, url, height, width, text ,additionalText}, index) => (
          <HistoryItem
            key={index}
            imageUrl={url}
            height={height}
            width={width}
            isVisible={index === currentIndex}
            id={id}
            text={text}
            additionalText={additionalText}
          />
        ))}
      </div>
      <div>
      <button className="next-button" onClick={handleNextButtonClick}>
        Click
      </button>
      </div>
    </section>
  );
};

export default History;

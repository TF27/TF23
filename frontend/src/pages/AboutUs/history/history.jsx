import React, { useState,useEffect } from 'react';
import './history.css';
import blurr from './assets/blurr.png';
import edm from './assets/edm.png';
import historyImage from './assets/history.png';
import tv from './assets/tv.png';

const images = [
  { id: 'history', url: historyImage},
  { id: 'blurr', url: blurr,text: '2021',additionalText:'lorem podem todem afjhsdbfjhvyjhdvbfjsdvbfsdgbfjufyjsd'},
  { id: 'edm', url: edm,text: '2021',additionalText:'idfhasdiobvsauhfasbfkfhvnoixkhdbaifkihisk' },
  { id: 'blurr', url: blurr,text: '2099',additionalText:'dsuhiafhisdhfjhsdvfviwegfvhsdghcvjsd'},
  { id: 'edm', url: edm,text: '2099',additionalText:'hunfksadnufkbsdjfbsudkfbskdjfbs' },
];

const HistoryItem = ({ imageUrl, height, width, isVisible, id, text, additionalText }) => (
  <div className={`history-item ${isVisible ? 'visible' : ''}`} style={{ height, width }}>
    <div className={`history-image ${id}`}>
    {text && <div className="image-text">{text}</div>}
      <img src={imageUrl} alt={text} className="image" />
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

  const handlePreviousButtonClick = () => {
    console.log(currentIndex);
    setCurrentIndex((prevIndex) => (prevIndex - 1 +images.length) % images.length);
  };

  useEffect(() => {
    document.body.classList.add('no-scroll');

    return () => {
      document.body.classList.remove('no-scroll');
    };
  }, []);

  return (
    <div className="history-container">
    {/* <img src={blurr} alt='blurr' className="blurr" /> */}
      <div className="history-overlay" onClick={handleNextButtonClick}>
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
      <div className="history-button">
      <button onClick={handlePreviousButtonClick}>
        Previous
      </button>
      <button onClick={handleNextButtonClick}>
        Click
      </button>
      </div>
    </div>
  );
};

export default History;

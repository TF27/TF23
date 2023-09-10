import React, { useState, useEffect, useCallback } from 'react';
import './history.css';
import edm from './assets/edm.png';
import historyImage from './assets/history.png';
import mars from './assets/mars.png'
import blurr from './assets/blurr.png';


const Mimages = [
  { id: 'history', url: historyImage },
  { id: 'blurr', url: blurr},
  { id: 'mars', url: mars, text: '2021', additionalText: 'idfhasdiobvsauhfasbfkfhvnoixkhdbaifkihisk' },
  { id: 'mars', url: mars, text: '2099', additionalText: 'hunfksadnufkbsdjfbsudkfbskdjfbs' },
];

const MHistoryItem = ({ imageUrl, height, width, isVisible, id, text, additionalText }) => (
  <div className={`history-item ${isVisible ? 'visible' : ''}`} style={{ height, width }}>
    <div className={`mhistory-image ${id}`}>
      {text && <div className="himage-text">{text}</div>}
      <img src={imageUrl} alt={text}  />
      {additionalText && <div className="hadditional-text">{additionalText}</div>}
    </div>
  </div>
);

const MHistory = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNextButtonClick = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % Mimages.length);
  }, []);

  const handlePreviousButtonClick = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + Mimages.length) % Mimages.length);
  }, []);

  // Automatic transition for "blurr" images
  useEffect(() => {
    let timer;
    if (Mimages[currentIndex].id === 'blurr') {
      timer = setInterval(() => {
        handleNextButtonClick();
      }, 2000); // Change image every 3 seconds (adjust as needed)
    }
    return () => clearInterval(timer);
  }, [currentIndex, handleNextButtonClick]);

  return (
    <div className="mhistory-container">
    {/* <img src={blurr} alt='blurr' className="blurr" /> */}
      <div className="history-overlay" onClick={handleNextButtonClick}>
        {Mimages.map(({ id, url, height, width, text, additionalText }, index) => (
          <MHistoryItem
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
        <button onClick={handlePreviousButtonClick} >
          Previous
        </button>
        <button onClick={handleNextButtonClick}>
          Click
        </button>
      </div>
      </div>
  );
};


export default MHistory;

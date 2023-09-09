import React, { useState, useEffect, useCallback } from 'react';
import './history.css';
import blurr from './assets/blurr.png';
import edm from './assets/edm.png';
import i1997 from './assets/1997 1.jpg';
import i2002 from './assets/2002 1.jpg';
import i2006 from './assets/2006 1.jpg';
import historyImage from './assets/history.png';

  const images = [
    { id: 'history', url: historyImage },
    { id: 'blurr', url: blurr, text: '1997', additionalText: 'lorem podem todem afjhsdbfjhvyjhdvbfjsdvbfsdgbfjufyjsd' },
    { id: 'edm', url: i1997, text: '1997', additionalText: 'idfhasdiobvsauhfasbfkfhvnoixkhdbaifkihisk' },
    { id: 'blurr', url: blurr, text: '2002', additionalText: 'dsuhiafhisdhfjhsdvfviwegfvhsdghcvjsd' },
    { id: 'edm', url: i2002, text: '2002', additionalText: 'hunfksadnufkbsdjfbsudkfbskdjfbs' },
  ];

  const HistoryItem = ({ imageUrl, height, width, isVisible, id, text, additionalText }) => (
    <div className={`history-item ${isVisible ? 'visible' : ''}`} style={{ height, width }}>
      <div className={`history-image ${id}`}>
        {text && <div className="himage-text">{text}</div>}
        <img src={imageUrl} alt={text} />
        {additionalText && <div className="hadditional-text">{additionalText}</div>}
      </div>
    </div>
  );

  const History= () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const handleNextButtonClick = useCallback(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, []);

    const handlePreviousButtonClick = useCallback(() => {
      setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
    }, []);

    // Automatic transition for "blurr" images
    useEffect(() => {
      let timer;
      if (images[currentIndex].id === 'blurr') {
        timer = setInterval(() => {
          handleNextButtonClick();
        }, 2000); // Change image every 3 seconds (adjust as needed)
      }
      return () => clearInterval(timer);
    }, [currentIndex, handleNextButtonClick]);

    return (
      <div className="history-container">
      {/* <img src={blurr} alt='blurr' className="blurr" /> */}
        <div className="history-overlay" onClick={handleNextButtonClick}>
          {images.map(({ id, url, height, width, text, additionalText }, index) => (
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


export default History;

import React, { useState, useEffect, useCallback } from 'react';
import './history.css';
import blurr from './assets/blurr.png';
// import edm from './assets/edm.png';
import historyImage from './assets/history.png';
import tvImage from './assets/tv5.png'
import i1997 from './assets/1997.jpg'
import i2011 from './assets/2011.jpg'
import i2013 from './assets/2013.jpg'
import i2014 from './assets/2014.jpg'
import i2017 from './assets/2017.jpg'
import i2018 from './assets/2018.jpg'
import i2022 from './assets/2022.jpg'

  const images = [
    { id: 'history', url: historyImage },
    { id: 'blurr', url: blurr},
    // { id: 'edm', url: edm, text: '2021', additionalText: 'idfhasdiobvsauhfasbfkfhvnoixkhdbaifkihisk' },
    // { id: 'edm', url: edm , text: '2099', additionalText: 'hunfksadnufkbsdjfbsudkfbskdjfbs' },
    { id: 'edm', url: i1997 , text: '1997', additionalText: 'hunfksadnufkbsdjfbsudkfbskdjfbs' },
    { id: 'edm', url: i2011 , text: '2011', additionalText: 'hunfksadnufkbsdjfbsudkfbskdjfbs' },
    { id: 'edm', url: i2013 , text: '2013', additionalText: 'hunfksadnufkbsdjfbsudkfbskdjfbs' },
    { id: 'edm', url: i2014 , text: '2014', additionalText: 'hunfksadnufkbsdjfbsudkfbskdjfbs' },
    { id: 'edm', url: i2017 , text: '2017', additionalText: 'hunfksadnufkbsdjfbsudkfbskdjfbs' },
    { id: 'edm', url: i2018 , text: '2018', additionalText: 'hunfksadnufkbsdjfbsudkfbskdjfbs' },
    { id: 'edm', url: i2022 , text: '2022', additionalText: 'hunfksadnufkbsdjfbsudkfbskdjfbs' },
  ];

  const HistoryItem = ({ imageUrl, height, width, isVisible, id, text, additionalText }) => (
    <div className={`history-item ${isVisible ? 'visible' : ''}`} style={{ height, width }}>
      <div className={`history-image ${id}`}>
        {text && <div className="himage-text">{text}</div>}
        <img src={imageUrl} alt={text} className='himage'/>
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

    const TVImage = () => {
      return (
          <img className='tv-image' src={tvImage} alt="TV" />
        );
    };
    

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
        <div className="tv-container" onClick={handleNextButtonClick}>
        <TVImage />
      </div>
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

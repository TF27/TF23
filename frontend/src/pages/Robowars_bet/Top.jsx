import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './top.module.css';
import drone from './assets/drone.jpg';
import ift from './assets/ift.png';
import robowar from './assets/bg-image.jpg';

const Top = () => {
  const navigate = useNavigate();

  const handleClick = (photoId) => {
    navigate(`/bet?id=${photoId}`);
  };

  return (
    <div className={styles['live-betting-container']}>
      <h1 className={styles.heading}>Live Betting on Matches</h1>
      <div className={styles['round-images']}>
        <div className={styles['round-image']} onClick={() => handleClick('1')}>
          <img
            src={robowar}
            alt="Robowars"
            className={styles['round-image-hover']}
          />
          <p className={styles['image-name-container']}>Robowars</p>
        </div>
        <div className={styles['round-image']} onClick={() => handleClick('2')}>
          <img
            src={ift}
            alt="IFT"
            className={styles['round-image-hover']}
          />
          <p className={styles['image-name-container']}>International Full Throttle</p>
        </div>
        <div className={styles['round-image']} onClick={() => handleClick('3')}>
          <img
            src={drone}
            alt="Drone Racing"
            className={styles['round-image-hover']}
          />
          <p className={styles['image-name-container']}>Drone Racing</p>
        </div>
      </div>
    </div>
  );
};

export default Top;

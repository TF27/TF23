import React, { useState } from 'react';
import styles from './top.module.css';
import BettingAdminComponent from './Admin'; // Import your BettingAdminComponent
import drone from './assets/drone.jpg';
import ift from './assets/ift.png';
import robowar from './assets/bg-image.jpg';

const Top = () => {
  const [selectedComponent, setSelectedComponent] = useState(null);

  const handleComponentClick = (component) => {
    setSelectedComponent(component);
  };

  return (
    <div className={styles['live-betting-container']}>
      
      {selectedComponent ? (
        // Render the selected component
        <BettingAdminComponent photoId={selectedComponent} />
      ) : (
        // Render the list of clickable components
        <div>
            <h1 className={styles.heading}>Hello Coordie!</h1>
        <div className={styles['round-images']}>
          <div className={styles['round-image']} onClick={() => handleComponentClick('1')}>
            <img src={robowar} alt="Robowars" className={styles['round-image-hover']} />
            <p className={styles['image-name-container']}>Robowars</p>
          </div>
          <div className={styles['round-image']} onClick={() => handleComponentClick('2')}>
            <img src={ift} alt="IFT" className={styles['round-image-hover']} />
            <p className={styles['image-name-container']}>International Full Throttle</p>
          </div>
          <div className={styles['round-image']} onClick={() => handleComponentClick('3')}>
            <img src={drone} alt="Drone Racing" className={styles['round-image-hover']} />
            <p className={styles['image-name-container']}>Drone Racing</p>
          </div>
        </div>
        </div>
      )}
    </div>
  );
};

export default Top;

import React, { useState, useEffect } from 'react';
import styles from './loading.module.css';
import side from './img/gate.png';
import tf from '../../components/Navbar/tflogo.png';

const Loading1 = () => {
  const [moveToSide, setMoveToSide] = useState(false);

  useEffect(() => {
    // After 2 seconds, set moveToLeft to true
    const timeoutId = setTimeout(() => {
      setMoveToSide(true);
    }, 1000);

    // Clear the timeout if the component unmounts before the timeout finishes
    return () => {
      clearTimeout(timeoutId);
    };
  }, []);

  return (
    <div className={styles.loading}>
      <img
        src={side}
        alt='Gate'
        className={`${styles.sideL} ${moveToSide && styles.moveLeft}`}
      />
      <img src={tf} alt='Techfest' className={styles.tf} />
      
      <img
        src={side}
        alt='Gate'
        className={`${styles.sideR} ${moveToSide && styles.moveRight}`}
      />
    </div>
  );
};

export default Loading1;
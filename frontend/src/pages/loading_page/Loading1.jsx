import React, { useState, useEffect } from 'react';
import styles from './loading.module.css';
import gate1 from './img/gate1.png';
import gate2 from './img/gate2.png';
import tf from './img/tf.png';
import tfbg from './img/loadingball.png'
import cloud1 from './img/loadcloud1.png'
import cloud2 from './img/loadcloud2.png'

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

  const [badaHai, setBadaHai] = useState(false);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setBadaHai(true);
    }, 1300);
    return () => {
      clearTimeout(timeoutId);
    }
  }, [])

  const [clouds, setclouds] = useState(false);
  useEffect(() => {
    const timeoutId = setTimeout(() => {setclouds(true);}, 2800);
    
    return () => {clearTimeout(timeoutId);}
  }, [])



  return (
    <div className={styles.loading}>
      <img src={tfbg} alt='Techfestbg' className={`${styles.tfbg} ${badaHai && styles.bgspined} ${clouds && styles.loaderremove}`} />
      <img src={tf} alt='Techfest' className={`${styles.tf} ${badaHai && styles.badaKaro} ${clouds && styles.loaderremove}`} />

      <img src={cloud1} alt='Techfestbg' className={`${styles.cloud1}  ${clouds && styles.cloudmoveright}`} />
      <img src={cloud2} alt='Techfestbg' className={`${styles.cloud2}  ${clouds && styles.cloundmoveleft}`} />
      
      <img
        src={gate2}
        alt='Gate'
        className={`${styles.sideL} ${moveToSide && styles.moveLeft}`}
      />
            <img
        src={gate1}
        alt='Gate'
        className={`${styles.sideR} ${moveToSide && styles.moveRight}`}
      />

    </div>
  );
};

export default Loading1;

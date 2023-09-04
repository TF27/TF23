import React from 'react';
import styles from './home.module.css';
import circle from './assets/frame.png'

const Parallax1 = () => {
  return (
    <div>
        <div className={styles.img1}>
           <img src={circle} alt='' className={styles.img2}/>
        </div>
        <div className={styles.img2}>
            
        </div>
        <div className={styles.img3}></div>
    </div>
  )
}

export default Parallax1

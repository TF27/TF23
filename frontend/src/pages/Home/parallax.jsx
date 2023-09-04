import React from 'react';
import styles from './home.module.css';
import rocks from './assets/rocks.png';
import head from './assets/tap.png';
import fire1 from './assets/fire1.png';
import fire2 from './assets/fire2.png';

const HomeParallax = () => {
    return ( 
        <div className={styles.homeParallax}>
            <div className={styles.rockLeft}>
                <img src={rocks} className={styles.rockDown}/>
                
            </div>
            <div className={styles.rockRight}>
                <img src={rocks} className={styles.rockUp}/>
               
            </div>
            <div className={styles.headU}>
                <img src={head} className={styles.head}/>
            </div>
            <div className={styles.fires}></div>
        </div>
     );
}
 
export default HomeParallax;
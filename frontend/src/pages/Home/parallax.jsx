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
                {/* <img src={rocks} className={styles.rockDown}/> */}
            </div>
            <div className={styles.rockRight}>
                <img src={rocks} className={styles.rockUp}/>
                {/* <img src={rocks} className={styles.arockUp}/>   */}
            </div>
            <div>
                <img src={head} className={styles.head}/>
            </div>
            <div>
                <img src={fire1} className={styles.fire1} alt='fire'/>
                <img src={fire2} className={styles.fire2} alt='fire'/>
            </div>
        </div>
     );
}
 
export default HomeParallax;
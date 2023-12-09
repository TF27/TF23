import styles from './ift.module.css';
import React, {useState, useEffect} from 'react';

const Parallax = () => {

    const [scroll, setScroll] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
          setScroll(window.scrollY);
        };
    
        window.addEventListener("scroll", handleScroll);
    
        // Clean up the event listener when the component unmounts
        return () => {
          window.removeEventListener("scroll", handleScroll);
        };
      }, []);

      const topScroll = `${-0.3* scroll}px`;
      const sideScroll = `${-1.3* scroll}px`;

    return ( 
        <div className={styles.parallax}>
            <div className={styles.img1} alt='Top'/>
            <div className={styles.img2} alt='Back' />
            <div className={styles.car} alt='Car' style={{left: sideScroll}}/>
            <div className={styles.img3} alt='IFT' style={{bottom: topScroll}}/>
        </div>
     );
}
 
export default Parallax;
import React, {useState, useEffect} from "react";
import styles from "./home.module.css";
import rocks from "./assets/rocks.png";
import head from "./assets/tap.png";
import fire1 from "./assets/fire1.png";
import fire2 from "./assets/fire2.png";
import cloudR from "./images/cloudR.png";
import cloudL from "./images/cloudL.png";
import cloudM from "./images/cloudM.png";

const HomeParallax = () => {

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
  
    // Calculate the left position of cloudL based on scroll position
    const cloudLeft = `${-scroll}px`;
    const cloudRight = `${scroll}px`;
    const cloudMid = `${-0.3* scroll}px`;
    

  return (
    <div className={styles.homeParallax}>
      {/* <div className={styles.rockLeft}>
                <img src={rocks} className={styles.rockDown}/>
                
            </div>
            <div className={styles.rockRight}>
                <img src={rocks} className={styles.rockUp}/>
               
            </div> */}
      <div className={styles.headU}>
        <img src={head} className={styles.head} />
      </div>
      <div className={styles.clouds}>
        <img
          src={cloudL}
          className={`${styles.cloud} ${styles.cloudL}`}
          alt="Cloud on Left"
          style={{ left: cloudLeft }}
        />
        <img
          src={cloudM}
          className={`${styles.cloud} ${styles.cloudM}`}
          alt="Cloud in mid"
          style={{ bottom: cloudMid }}
        />
        <img
          src={cloudR}
          className={`${styles.cloud} ${styles.cloudR}`}
          alt="Cloud on Right"
          style={{ right: cloudLeft }}
        />
      </div>
      {/* <div className={styles.fires}></div> */}
    </div>
  );
};

export default HomeParallax;
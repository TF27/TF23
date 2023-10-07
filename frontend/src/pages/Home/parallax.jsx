import React, {useState, useEffect} from "react";
import { Link } from "react-router-dom";
import styles from "./home.module.css";
import head from "./images/themename.png";
import headm from "./images/themenamem.png";

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
    const cloudRight = `calc(-100vw - ${scroll}px)`;
    const cloudMid = `${-0.3* scroll}px`;
    

  return (
    <div className={styles.homeParallax}>
      {/* <div className={styles.rockLeft}>
                <img src={rocks} className={styles.rockDown}/>
                
            </div>
            <div className={styles.rockRight}>
                <img src={rocks} className={styles.rockUp}/>
               
            </div> */}
      <div className={styles.headU} >
        <div className={styles.headUU}>
          <img src={head} className={styles.head} />
          <img src={headm} className={styles.headm}/>
        </div>
        <div className={styles.headUL}>
          <Link to='/workshops'>Workshops are Live Now!</Link>
        </div>
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
          style={{ right: cloudRight }}
        />
      </div>
      {/* <div className={styles.fires}></div> */}
    </div>
  );
};

export default HomeParallax;

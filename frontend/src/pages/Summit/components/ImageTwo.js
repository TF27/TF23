import React, { useState, useEffect } from 'react';
import parallax from './parallax.module.css';
import Notify from "../../../components/Notify/notify";
import sum1 from "../assets/sum1.png";
import sum2 from "../assets/sum2.png";
//import Grid from './Grid';

const ImageTwo = () => {
  //parallax effect
  const [scrollPosition, setScrollPosition] = useState(0);
  const handleScroll = () => {
    setScrollPosition(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);


  return(
    <div className={parallax.image} style={{ transform: `translateY(-${scrollPosition * 0.8}px)` }}>
      <div className={parallax.summitRow}>
        {/* <div class="column">
          <img src="img_snow.jpg" alt="Snow" style="width:100%">
        </div> */}
        <div className={parallax.summitColumn}>
          <img src={sum1} alt="FinTech"  />
        </div>
        <div className={parallax.summitColumn}>
          <img src={sum2} alt="Industry 4.0" />
        </div>
      </div>
        <Notify/>
    </div>
  )
};

export default ImageTwo
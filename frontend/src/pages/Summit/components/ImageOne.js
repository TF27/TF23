import React, { useState, useEffect } from 'react';
import parallax from './parallax.module.css';

const ImageOne = () => {
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
  <div className={parallax.parallaxcontainer} >
    <div className={`${parallax.parallaxlayer} ${parallax.layer1}`}/>
    <div className={`${parallax.parallaxlayer} ${parallax.layer2}`} style={{ transform: `translateY(-${scrollPosition * 0.4}px)` }}/>
    <div className={`${parallax.parallaxlayer} ${parallax.layer3}`} style={{ transform: `translateY(-${scrollPosition * 0.8}px)` }}/>
  </div>
  )
};
export default ImageOne
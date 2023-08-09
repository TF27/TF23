import React, { useState, useEffect } from 'react';
import './Parallax.css';

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
  <div className="parallax-container" >
    <div className="parallax-layer layer1" style={{ transform: `translateY(-${scrollPosition * 0.1}px)` }}/>
    <div className="parallax-layer layer2" style={{ transform: `translateY(-${scrollPosition * 0.2}px)` }}/>
    <div className="parallax-layer layer3" style={{ transform: `translateY(-${scrollPosition * 0.4}px)` }}/>
  </div>
  )
};
export default ImageOne
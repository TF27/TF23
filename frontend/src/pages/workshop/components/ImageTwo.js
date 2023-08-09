import React, { useState, useEffect } from 'react';
import './Parallax.css';

const ImageTwo = () => {
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
    <div className="image" style={{ transform: `translateY(-${scrollPosition * 0.4}px)` }}></div>
  )
};

export default ImageTwo
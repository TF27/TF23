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
  <div  className={parallax.parallaxcontainer} style={{height: '100vh'}} >
    <div className={`${parallax.parallaxlayer} ${parallax.layer1}`} style={{ transform: `translateY(${scrollPosition * 0.1}px)`,scrollBehavior:'smooth' }} />
    <div className={`${parallax.parallaxlayer} ${parallax.layer2}`} style={{ transform: `translateY(${scrollPosition * 0.3}px)` }}/>
    <div className={`${parallax.parallaxlayer} ${parallax.layer3}`} />
    {/* <div style={{zIndex: '200'}}>Register</div> */}
    <div className={parallax.blackGradientbottom}/>
  </div>
  )
};
export default ImageOne;
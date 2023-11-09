import React, { useState, useEffect } from 'react';
import parallax from './m-parallax.module.css';
import styles from '../m-accommodation.module.css';
import Register from './reg';
const ImageOne = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [activeTab, setActiveTab] = useState(null); 
  const [showRegistrationForm, setShowRegistrationForm] = useState(false);
  const [showBackButton, setShowBackButton] = useState(false);
  const tabClickHandler = (tab) => {
    setActiveTab(activeTab === tab ? null : tab);
    setShowRegistrationForm(false);
  };

  const toggleRegistrationForm = () => {
    setActiveTab(null);
    setShowRegistrationForm(true);
    setShowBackButton(true); // Show the "BACK" button
  };

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
    <div className={parallax.blackGradientbottom}/>
    {/* {showRegistrationForm && (
          <Register />
        )}

<div className={`${styles['m-titSpn']} ${styles['m-hometheme']}`}>
          
          {showBackButton ? (
            // Render the "BACK" button when it's enabled
            <div></div>
          ) : (
            // Render the "REGISTER NOW" button when it's enabled
            <div className={styles['m-titSpn_rect1']}>
            <button className={`${styles['m-titSpn_rect2']} ${styles.registerButton}`} onClick={toggleRegistrationForm}>
              REGISTER NOW
            </button>
            </div>
          )}
        </div> */}
  </div>
  )
};
export default ImageOne;
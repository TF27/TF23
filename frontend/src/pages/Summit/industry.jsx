import React, { useState } from 'react';
import styles from './fintech.module.css';
import ImageOne from './components/ImageOne';
import bg from './assets/summit_bg.jpg';

const Industry = () => {
  const bgHaiJi = {
    backgroundImage: `url(${bg})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center center',
    width: '100vw',
    position: 'absolute',
    top: '0',
    zIndex: '-1',
    backgroundAttachment: 'fixed',
    // Add a pseudo-element to create an overlay
  '::before': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: 'rgba(0, 0, 0, 1)', // Adjust the color and transparency here
  },
  };

  return (
    <div className="yoyohoneysingh" style={bgHaiJi}>
      <div className={styles['accommodation-container']}>
        <ImageOne />
        
        <div className={`${styles.titSpn} ${styles.homeTheme}`}>
        <div className={styles.titSpn_rect1}>
          <div className={styles.titSpn_rect2}>About</div>
        </div>
      </div>
      <div className={`row ${styles.themeData}`}>
        
        <div className={styles.themeText}>
        Now is the time for digitalization. With scarce resources in our hands, rapid changes in customers and producers' behavior, a comfort-loving generation; E-Commerce is the best option socially, politically, and economically. E-Commerce is booming, even faster than Zomato's posts on their social media handles. And this growth is very promising.

The International Industry Summit aims at discussing the trends that are bringing this change and changing the consumer’s perspective to this new way of shopping. The summit will provide you with a complete outlook on the growth and potential of D2C, B2C, brand marketing, etc.

For Students:

Build your career by interacting with our honorable speakers, industry professionals and get a certificate of completion.
Connect with CxO’s, innovators, investors, industry professionals, and entrepreneurs and get inspired by their brand-making stories.
For Professionals:

Learn about the loopholes a company faces, and prepare yourself for upcoming challenges while also growing your industry network
Discover the trends that will reshape the E-commerce landscape: ML & AI chatbots, ultra personalization, customer experience.
        </div>
      </div>
      </div>
    </div>
  );
};

export default Industry;

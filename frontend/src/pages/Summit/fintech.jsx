import React, { useState } from 'react';
import styles from './fintech.module.css';
import ImageOne from './components/ImageOne';
import bg from './assets/summit_bg.jpg';

const Fintech = () => {
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
        The rise of Fintech has forever changed the way companies do business. There have never been as many decisions for business people from crowdsourcing to mobile payments as there are now. It's never been less expensive to set up your business as well as to extend it. Fintech has been a boon for the consumer of banking and financial services. It has improved customer satisfaction and worked on consumers' pain points, providing a digital platform for entrepreneurs and investors to digitize financially.
The International Fintech Summit is the ideal meeting place facilitating multi-stakeholder dialogue with power-packed networking opportunities among C-Level executives, leading industry experts, decision-makers, and policymakers from across the value chain to foster collaboration, discuss current challenges, business opportunities, develop market strategies, share knowledge and identify solutions aimed at shaping the future of Fintech.

For Students:

Lay the foundation for your career through live intellectual discussions with speakers through chat and individual assessments to add to your expertise.
Networking opportunities with Fintech leaders.
Build your career by interacting with our honorable speakers, industry professionals and get a certificate of completion.
For Professionals:

Meet influential people and expand your professional network.
Get insights about the current state of the industry and the future possibilities.
Explore opportunities in the fintech sector.
        </div>
      </div>
      </div>
    </div>
  );
};

export default Fintech;

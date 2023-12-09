import React from 'react';
import bg from './assets/darkbg.png';
import bob from './assets/bob.png';
import mars from './assets/mars.png';
import styles from './sponsors.module.css'; // Import the CSS file

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

const Sponsors = () => {
  return (
    <div className='yoyohoneysingh' style={bgHaiJi}>
      <div className={styles.head}><h1>Title Sponsor</h1></div>
      <div className={styles.singlehead}>
        <img src={mars}></img>
      </div>
      <div className={styles.title}><h1>Marsh McLennan Global Services India Pvt Ltd</h1></div>
      <div className={styles.title}><h1>Associate Title Sponsor</h1></div>
      <div className={styles.bobby}>
        <img src={bob}></img>
        <img src={bob}></img>
      </div>
      <div className={styles.title}><h1>Powered By</h1></div>
      <div className={styles.bobby}>
        <img src={bob}></img>
        <img src={bob}></img>
      </div>
      <div className={styles.title}><h1>Digital Partner</h1></div>
      <div className={styles.single}>
        <img src={bob}></img>
      </div>
      <div className={styles.title}><h1>International Partner</h1></div>
      <div className={styles.bobby}>
        <img src={bob}></img>
        <img src={bob}></img>
      </div>
      <div className={styles.title}><h1>Competitions Sponsor</h1></div>
      <div className={styles.bobby}>
        <img src={bob}></img>
        <img src={bob}></img>
        <img src={bob}></img>
      </div>
      <div className={styles.bobby}>
        <img src={bob}></img>
        <img src={bob}></img>
        <img src={bob}></img>
      </div>
      <div className={styles.bobby}>
        <img src={bob}></img>
        <img src={bob}></img>
        <img src={bob}></img>
      </div>
      <div className={styles.bobby}>
        <img src={bob}></img>
        <img src={bob}></img>
      </div>
      <div className={styles.bobby}>
        <img src={bob}></img>
        <img src={bob}></img>
      </div>
      <div className={styles.title}><h2>Blockchain Summit Title Sponsor</h2><h2> Industry Summit Title Sponsor</h2></div>
      <div className={styles.bobby}>
        <img src={bob}></img>
        <img src={bob}></img>
      </div>
      <div className={styles.title}><h1>Workshop Partner</h1></div>
      <div className={styles.single}>
        <img src={bob}></img>
      </div>
      <div className={styles.title}><h1>Build your future with Google</h1></div>
      <div className={styles.single}>
        <img src={bob}></img>
      </div>
      <div className={styles.title}><h1>Beverage Partner</h1></div>
      <div className={styles.single}>
        <img src={bob}></img>
      </div>
      <div className={styles.title}><h1>Energy Partner</h1></div>
      <div className={styles.single}>
        <img src={bob}></img>
      </div>
      <div className={styles.title}><h1>Snack Partner</h1></div>
      <div className={styles.single}>
        <img src={bob}></img>
      </div>
      <div className={styles.title}><h1>General Sponsor</h1></div>
      <div className={styles.bobby}>
        <img src={bob}></img>
        <img src={bob}></img>
        <img src={bob}></img>
      </div>
      <div className={styles.bobby}>
        <img src={bob}></img>
        <img src={bob}></img>
        <img src={bob}></img>
      </div>
      <div className={styles.title}><h1>Stationary Partner</h1></div>
      <div className={styles.single}>
        <img src={bob}></img>
      </div>
      <div className={styles.title}><h1>Fashion Partner</h1></div>
      <div className={styles.single}>
        <img src={bob}></img>
      </div>
      <div className={styles.title}><h1>Digital Outdoor Media Partner</h1></div>
      <div className={styles.single}>
        <img src={bob}></img>
      </div>
      <div className={styles.title}><h1>Cine Media Partner</h1></div>
      <div className={styles.single}>
        <img src={bob}></img>
      </div>
      <div className={styles.title}><h1>Multiplex Partner</h1></div>
      <div className={styles.single}>
        <img src={bob}></img>
      </div>
      <div className={styles.title}><h1>Online Media Partners</h1></div>
      <div className={styles.bobby}>
        <img src={bob}></img>
        <img src={bob}></img>
      </div>
      <div className={styles.title}><h1>Digital Media Partners</h1></div>
      <div className={styles.bobby}>
        <img src={bob}></img>
        <img src={bob}></img>
      </div>
      </div>
    
  );
};

export default Sponsors;

import React, { useState } from 'react';
import styles from './accommodation.module.css';
import ImageOne from './components/ImageOne';
import bg from './img/darkbg.png';
import Register from './components/reg';

const Accommodation = () => {
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

  const tabs = [
    'ABOUT US',
    'ACCOMMODATION POLICIES',
    'INSTRUCTIONS',
    'FAQs',
    'REACHING IITB',
    'CONTACT US',
  ];

  // Define content for each tab
  const tabContent = {
    'ABOUT US': 'Techfest has been an example in achieving huge feats with unparalleled figures ever since its inception in 1998. Techfest has grown in stature in terms of its content, infrastructure and logistics. The overwhelming crowd of such a high magnitude and a world-class technological display along with a tinge of enjoyment has made our dream a technological extravaganza. With such vastness and diversity, the hospitality of the guests is of paramount importance. We, at Techfest, constantly strive towards the satisfaction of everyone. We shall leave no stone unturned in fulfilling the needs of a secure accommodation away from home. Along with accommodation facilities for our participants, we also set up a cafeteria serving a variety of cuisines satisfying the needs of every palate. We strive to make your stay comfortable and your experience, a memorable one. Hospitality management would be one of the prime focuses of Team Techfest 2021-22. Hope to see you at Techfest 2021-22. We will be more than happy to receive your suggestions and queries. Kindly email at hospitality@techfest.org',
    'ACCOMMODATION POLICIES': 'Content for ACCOMMODATION POLICIES',
    'INSTRUCTIONS': 'Content for INSTRUCTIONS',
    'FAQs': 'Content for FAQs',
    'REACHING IITB': 'Content for REACHING IITB',
    'CONTACT US': 'Content for CONTACT US',
  };

  const [activeTab, setActiveTab] = useState('ABOUT US'); // Default to ABOUT US
  const [showRegistrationForm, setShowRegistrationForm] = useState(false);
  const [showBackButton, setShowBackButton] = useState(false);

  const lastActiveTabRef = React.useRef(null); // To store the last active tab

  const tabClickHandler = (tab) => {
    lastActiveTabRef.current = activeTab; // Store the current active tab
    setActiveTab(tab);
    setShowRegistrationForm(false); // Close the registration form when switching tabs
    setShowBackButton(false); // Hide the "BACK" button when switching tabs
  };

  const toggleRegistrationForm = () => {
    lastActiveTabRef.current = activeTab; // Store the current active tab before showing the registration form
    setActiveTab(null); // Hide the content when showing the registration form
    setShowRegistrationForm(true);
    setShowBackButton(true); // Show the "BACK" button
  };

  const goBack = () => {
    setActiveTab(lastActiveTabRef.current); // Restore the last active tab when clicking the "BACK" button
    setShowRegistrationForm(false); // Close the registration form when going back
    setShowBackButton(false); // Hide the "BACK" button after going back
  };

  return (
    <div className="yoyohoneysingh" style={bgHaiJi}>
      <div className={styles['accommodation-container']}>
        <ImageOne />
        <div className={styles.tabs}>
          {tabs.map((tab) => (
            <div
              key={tab}
              className={`tab ${activeTab === tab ? 'active' : ''} ${styles.titSpn_rect1}`}
              onClick={() => tabClickHandler(tab)}
            >
              <div className={styles.titSpn_rect2}>{tab}</div>
            </div>
          ))}
        </div>

        <div className={styles.content}>
          {activeTab !== null && !showRegistrationForm && (
            <div className={styles['content-rect1']}>
              <div className={styles['content-rect2']}>
                {tabContent[activeTab]}
              </div>
            </div>
          )}

          {showRegistrationForm && (
           <Register />
          )
          }
        </div>

        <div className={`${styles.titSpn} ${styles.homeTheme}`}>
          <div className={styles.titSpn_rect1}>
            {showBackButton ? (
              // Render the "BACK" button when it's enabled
              <button className={`${styles.titSpn_rect2} ${styles.registerButton}`} onClick={goBack}>
                BACK
              </button>
            ) : (
              // Render the "REGISTER NOW" button when it's enabled
              <button className={`${styles.titSpn_rect2} ${styles.registerButton}`} onClick={toggleRegistrationForm}>
                REGISTER NOW
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Accommodation;

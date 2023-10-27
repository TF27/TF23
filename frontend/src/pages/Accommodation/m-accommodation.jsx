// M-Accommodation.jsx

import React, { useState } from 'react';
import styles from './m-accommodation.module.css'; // Create a new CSS file for mobile styles
import bg from './img/bgm.png';
import ImageOne from './components/m-ImageOne';

const MAccommodation = () => {
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
  };

  const tabs = [
    'ABOUT US',
    'ACCOMMODATION POLICIES',
    'INSTRUCTIONS',
    'FAQs',
    'REACHING IITB',
    'CONTACT US',
  ];

  const tabContent = {
    'ABOUT US': 'Techfest has been an example in achieving huge feats with unparalleled figures ever since its inception in 1998. Techfest has grown in stature in terms of its content, infrastructure and logistics. The overwhelming crowd of such a high magnitude and a world-class technological display along with a tinge of enjoyment has made our dream a technological extravaganza. With such vastness and diversity, the hospitality of the guests is of paramount importance. We, at Techfest, constantly strive towards the satisfaction of everyone. We shall leave no stone unturned in fulfilling the needs of a secure accommodation away from home. Along with accommodation facilities for our participants, we also set up a cafeteria serving a variety of cuisines satisfying the needs of every palate. We strive to make your stay comfortable and your experience, a memorable one. Hospitality management would be one of the prime focuses of Team Techfest 2021-22. Hope to see you at Techfest 2021-22. We will be more than happy to receive your suggestions and queries. Kindly email at hospitality@techfest.org',
    'ACCOMMODATION POLICIES': 'Content for ACCOMMODATION POLICIES',
    'INSTRUCTIONS': 'Content for INSTRUCTIONS',
    'FAQs': 'Content for FAQs',
    'REACHING IITB': 'Content for REACHING IITB',
    'CONTACT US': 'Content for CONTACT US',
  };

  const [activeTab, setActiveTab] = useState(null); // Start with no active tab
  const [showRegistrationForm, setShowRegistrationForm] = useState(false);

  const tabClickHandler = (tab) => {
    setActiveTab(activeTab === tab ? null : tab);
    setShowRegistrationForm(false);
  };

  const toggleRegistrationForm = () => {
    setActiveTab(null);
    setShowRegistrationForm(true);
  };

  return (
    <div className="m-accommodation" style={bgHaiJi}>
      <div className={styles['m-accommodation-container']}>
        <ImageOne />
        <div className={styles.tabs}>
          {tabs.map((tab, index) => (
            <div
              key={tab}
              className={`tab ${activeTab === tab ? 'active' : ''} ${styles['m-titSpn_rect1']}`}
              onClick={() => tabClickHandler(tab)}
              style={{ marginBottom: activeTab === tab ? '80vh' : 0 }}
            >
              <div className={styles['m-titSpn_rect2']}>{tab}</div>
              {activeTab === tab && (
                <div className={styles['m-content-rect1']}>
                  <div className={styles['m-content-rect2']}>{tabContent[tab]}</div>
                </div>
              )}
            </div>
          ))}
        </div>

        {showRegistrationForm && (
          <div className={styles['rm-content-rect1']}>
            <div className={styles['rm-content-rect2']}>
              {/* Your registration form code goes here */}
              {/* Example: */}
              <form>
                {/* Form fields and submit button */}
              </form>
            </div>
          </div>
        )}

        <div className={`${styles['m-titSpn']} ${styles['m-homeTheme']}`}>
          <div className={styles['m-titSpn_rect1']}>
            <button className={`${styles['m-titSpn_rect2']} ${styles['registerButton']}`} onClick={toggleRegistrationForm}>
              REGISTER NOW
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MAccommodation;

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
    'ABOUT US': `Techfest has been an example in achieving huge feats with unparalleled figures ever since its inception in 1998. Techfest has grown in stature in terms of its content, infrastructure and logistics. The overwhelming crowd of such a high magnitude and a world-class technological display along with a tinge of enjoyment has made our dream a technological extravaganza. With such vastness and diversity, the hospitality of the guests is of paramount importance. \n\nWe, at Techfest, constantly strive towards the satisfaction of everyone. We shall leave no stone unturned in fulfilling the needs of a secure accommodation away from home. Along with accommodation facilities for our participants, we also set up a cafeteria serving a variety of cuisines satisfying the needs of every palate. We strive to make your stay comfortable and your experience, a memorable one. Hospitality management would be one of the prime focuses of Team Techfest 2022-23.\n\nYou'll get accommodation at Techfest, IIT Bombay for five nights; from 15th December 8:00 AM to 19th December 10:00 AM at IIT Bombay, with an exclusive free access to the entire fest along with all evening/night events which are exclusively conducted for those who've opted for Accommodation at Techfest, IIT Bombay. Get free and exclusive entries to events like Robowars Finales, Technoholix - The Concert Night, and many other events at the most economical cost.\n\nHope to see you at Techfest 2022-23. \nPlease visit the Freqently Asked Questions (FAQ) section for to get most of your queries resolved."																									`,
    'ACCOMMODATION POLICIES': (<div className={styles['centered-content']}><h1>Accommodation Charges</h1></div>),
    'INSTRUCTIONS': `1. All guests carrying electronic items of any kind will have to declare them at the IIT Bombay main gate through a ‘Gate Pass’. The belongings will also be checked on the way out of IIT Bombay along with the ‘Gate Pass’, failing to do so will result in the belongings being impounded.\n2. All guests will be provided with a mattress. Techfest will not provide mattress cover, blankets, or pillows. The guests are encouraged to arrange them on their own (if required), since the weather might get cold during the night.\n3. Any commodities issued to the guests would have to be returned in sound condition to the organizers during check-out.\n4. Random checks would be made to avoid any illegal stay at the campus. Any team failing to produce their electronic/physical receipts of accommodation would be heavily fined and disqualified.\n5. Entry will be only through the 'Main Gate' of IIT Bombay. All other gates will be closed for entry.\n6. All guests are required to carry their valid government photo ID proofs at all times. In addition, the student participants are also required to carry their valid college photo ID card. Any guest failing to produce their ID card will not be permitted inside the campus during Techfest 2023.\n7. Alcohol, drugs, sharp objects, and explosives of any kind are strictly prohibited inside the campus. Any other item if deemed unsafe will be prohibited. The decision of Security and Techfest team will be final in case of any disputes.\n8. No outside vehicles will be allowed into the campus during Techfest 2023.\n9. All guests are required to maintain the decorum and cleanliness of the campus and follow the rules of the campus at all times.\n10. Techfest 2023 and IIT Bombay will not be responsible for any mishaps that occur through the duration of the stay for Techfest 2023`,
    'FAQs': 'Content for FAQs',
    'REACHING IITB': 'Travelling in Mumbai is very easy and systematic. The modes of travelling in Mumbai are taxis, auto rickshaws, local train and BEST Buses. IIT Bombay is located at Powai, which is an eastern suburb in the North-Eastern part (Central Railway Line) of Mumbai. Mumbai is in the form of a long narrow island, almost a peninsula, thrusting southwards into the Arabian Sea. In Mumbai, local trains run through the following routes. Western Railway: Churchgate to Borivali/Virar and return. Central Railway: Mumbai CST to Karjat/Kasara and return. Harbour Route: Mumbai CST to Andheri and return New Bombay Route: Mumbai CST to Vashi/Panvel and return. Kanjur Marg, a Local Train Station is the closest local train stop to IIT Bombay. It is located on Central Railway line. An auto rickshaw from Kanjur-Marg station to IIT Bombay Main Gate costs Rs.45 approx. Important railway stations where you can get down are: Chhatrapati Shivaji Terminal (CST) Churchgate Mumbai Central Dadar Lokmanya Tilak Terminus Thane Borivali Andheri Bandra Kalyan Thane is the nearest station to IIT Bombay. Next is Lokmanya Tilak Terminus (LTT) (near Kurla) and Dadar is third in this regard. The taxis ply through all of Mumbai. Auto rickshaws ply between Bandra-Borivali and Sion-Mulund and should be preferred if you have some heavy luggage, which may otherwise cause you inconvenience while travelling by local trains and buses. In taxis, you also have an option of AC Taxis-Cool Cabs, which is a more comfortable way of travel. Trains/buses should be preferred if you carry less baggage with you, say a small bag per person. Please beware of pickpockets in locals and BEST buses. Southbound trains on all the Local train lines are more crowded in the morning and thus should be avoided if the passenger is carrying baggage. Similarly, the northbound trains in the evening are more crowded. With respect to mornings at Kanjurmarg station, travelling from Mumbai CST, Dadar or Kurla would be less crowded that travelling from Kalyan or Thane. For buses/autorickshaws, the destination should be stated as "IIT Main Gate, Powai." Please download m-indicator mobile application for hands-on maps & routes of Mumbai. Every team has to register online on the official Techfest website for the competition. A Team ID will be allocated to the team on registration which shall be used for future references. The decision of the organizers or judges shall be treated as final and binding on all. No responsibility will be held by Techfest, IIT Bombay for any late, lost or misdirected entries. Note that at any point of time the latest information will be that which is on the website. However, registered participants will be informed through mail about any changes. All modes of official communication will be through the Techfest e-mail. Participants are advised to keep track of all folders in their e-mail accounts.',

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
          
            {showBackButton ? (
              // Render the "BACK" button when it's enabled
              <div></div>
            ) : (
              // Render the "REGISTER NOW" button when it's enabled
              <div className={styles.titSpn_rect1}>
              <button className={`${styles.titSpn_rect2} ${styles.registerButton}`} onClick={toggleRegistrationForm}>
                REGISTER NOW
              </button>
              </div>
            )}
          </div>
        
      </div>
    </div>
  );
};

export default Accommodation;

// M-Accommodation.jsx

import React, { useState } from 'react';
import styles from './m-accommodation.module.css'; // Create a new CSS file for mobile styles
import bg from './img/bgm.png';
import ImageOne from './components/m-ImageOne';
import Register from './components/reg';
import Faq from 'react-faq-component';

const MAccommodation = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const handleClick = (index) => {
    setShowBackButton(false);
    if (activeIndex === index) {
      setActiveIndex(null);
    } else {
      setActiveIndex(index);
    }
  };
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

  const data = {
    rows: [
      {
        title: "How to avail accommodation?",
        content: <>1. Click on Register now <br/>2. Complete the payment procedure. <br /> Confirmation will be sent to you\n4. Report at accommodation desk</>
      },
      {
        title: "What is the payment procedure?",
        content: "The payment procedure will be online. The accommodation charges are provided under the tab Accommodation Charges on the hospitality page. You will have to report at the accommodation desk near the Old Swimming Pool with the email printout and the mandatory documents. Failing to bring any of the documents may lead to the cancellation of your accommodation."
      },
      {
        title: "How do I know that my payment is confirmed?",
        content: "Confirmation is not confirmed till a confirmation mail is not received in 24 hours. If not received confirmation in 24 hours, then mail your transaction ID, Techfest ID, name, amount to nivesh@techfest.org with the subject as Transaction ID :: team ID :: Confirmation mail not received."
      },
      {
        title: "Documents that guests should carry?",
        content: <>1. Any valid Govt photo ID <br />2. Print out of Email confirmation <br />3. Gate pass <br />4. Valid College ID for participants</>
      },
      {
        title: "Should I carry my ID card with me?",
        content: "It is mandatory for all guest participants to carry college IDs. This is for your own convenience. Moreover, you will be asked to produce your college ID cards at the time of allotment of rooms."
      },
      {
        title: "What are the Accommodation charges?",
        content: "The accommodation charges and other necessary details regarding the payment will be available under the tab Accommodation Charges."
      },
      {
        title: "What kind of accommodation is provided?",
        content: "Accommodation is provided on a shared basis inside campus hostels or outside hotels. One mattress, and enough space for keeping luggage, and other essential commodities will be provided. Girls and boys will be accommodated separately. The number of guests in a room will be decided by Techfest and will be allotted by Techfest team."
      },
      {
        title: "Does the accommodation facilities include food facilities?",
        content: "No, the accommodation charges do not include food facilities. Guests can purchase their meals from the food court, night cafeteria, or private hostel canteens or hostel messes at just INR 50 per meal."
      },
      {
        title: "What are the food facilities inside IIT Bombay?",
        content: "For all our guests and guests, we set up a huge cafeteria serving a variety of cuisines satisfying the needs of every palate. In addition, you can also eat in the many canteens, messes, and restaurants inside the campus."
      },
      {
        title: "Can I enter IIT Bombay campus at any time?",
        content: "You can enter IIT Main gate anytime by showing a valid photo ID proof during 6am to 10pm, however, you need to have accommodation inside the campus to stay in the campus after 10pm."
      },
      {
        title: "Can we get accommodation on the spot at Techfest?",
        content: "No confirmation of accommodation will be provided. It is completely subject to the availability of rooms."
      }
    ]
  }


  const tabs = [
    'ABOUT US',
    'ACCOMMODATION POLICIES',
    'INSTRUCTIONS',
    'FAQs',
    'REACHING IITB',
    'CONTACT US',
  ];

  const tabContent = {
    'ABOUT US': <>Techfest has been an example in achieving huge feats with unparalleled figures ever since its inception in 1998. Techfest has grown in stature in terms of its content, infrastructure and logistics. The overwhelming crowd of such a high magnitude and a world-class technological display along with a tinge of enjoyment has made our dream a technological extravaganza. With such vastness and diversity, the hospitality of the guests is of paramount importance. We, at Techfest, constantly strive towards the satisfaction of everyone. We shall leave no stone unturned in fulfilling the needs of a secure accommodation away from home. Along with accommodation facilities for our participants, we also set up a cafeteria serving a variety of cuisines satisfying the needs of every palate. We strive to make your stay comfortable and your experience, a memorable one. Hospitality management would be one of the prime focuses of Team Techfest 2023-24. Hope to see you at Techfest 2023-24. We will be more than happy to receive your suggestions and queries. Kindly email at hospitality@techfest.org</>
    ,
    'ACCOMMODATION POLICIES': 
    <table className={styles.table} style={{width:'95%', margin:'0 2.5%'}}>
      <tr>
        <th style={{width:'25%'}}>Accommodation Charges</th>
        <td>Accommodation charges are INR 2999 <s>3499</s> (Early Bird Offer) per candidate for 5 days. Maximum of 5 nights stay allowed (26th Dec 6 AM - 30th Dec 10 AM). It does not include food facility. Guest can purchase their meals from the food court, night cafeteria or private hostel canteens or hostel messes at subsidized rates.</td>
      </tr>
      <br />
      <tr>
        <th>Timing</th>
        <td>Check-in: 6:00 AM to 10:00 PM on your check-in date</td>
      </tr>
      <br />  
      <tr>
        <th>Cancellation Policy</th>
        <td>Confirmed Accommodation can be cancelled through email only. Send an e-mail having your Acco ID and the number of members for whom accommodation has to be cancelled, at hospitality@techfest.org. The subject of the email should be ""Cancellation of Accommodation"" For any cancellations before deadline, 75% of the total amount shall be refunded within 10 working days after the festival. There shall be no refunds for cancellation after the deadline.Deadline of cancellation: 10th December 2023.</td>
      </tr>
    </table>
    ,
    'INSTRUCTIONS': 
    <ol>
        <li>
            <p>All guests carrying electronic items of any kind will have to declare them at the IIT Bombay main gate
                through a 'Gate Pass'. The belongings will also be checked on the way out of IIT Bombay along with the
                'Gate Pass', failing to do so will result in the belongings being impounded.</p>
        </li>
        <li>
            <p>All guests will be provided with a mattress. Techfest will not provide mattress cover, blankets, or pillows.
                The guests are encouraged to arrange them on their own (if required), since the weather might get cold
                during the night.</p>
        </li>
        <li>
            <p>Any commodities issued to the guests would have to be returned in sound condition to the organizers during
                check-out.</p>
        </li>
        <li>
            <p>Random checks would be made to avoid any illegal stay at the campus. Any team failing to produce their
                electronic/physical receipts of accommodation would be heavily fined and disqualified.</p>
        </li>
        <li>
            <p>Entry will be only through the 'Main Gate' of IIT Bombay. All other gates will be closed for entry.</p>
        </li>
        <li>
            <p>All guests are required to carry their valid government photo ID proofs at all times. In addition, the student
                participants are also required to carry their valid College photo ID card. Any guest failing to produce
                their ID card will not be permitted inside the campus during Techfest 2023.</p>
        </li>
        <li>
            <p>Alcohol, drugs, sharp objects, and explosives of any kind are strictly prohibited inside the campus. Any
                other item if deemed unsafe will be prohibited. The decision of Security and Techfest team will be final in
                case of any disputes.</p>
        </li>
        <li>
            <p>No outside vehicles will be allowed into the campus during Techfest 2023.</p>
        </li>
        <li>
            <p>All guests are required to maintain the decorum and cleanliness of the campus, and follow the rules of the
                campus at all times.</p>
        </li>
        <li>
            <p>Techfest 2023 and IIT Bombay will not be responsible for any mishaps that occur through the duration of stay
                for Techfest 2023.</p>
        </li>
    </ol>
    ,
    'FAQs':
    <div>
      <h5>How to avail accommodation?</h5>
      <ol>
        <li>Click on Register now</li>
        <li>Complete the payment procedure</li>
        <li>Confirmation will be sent to you</li>
        <li>Report at the accommodation desk</li>
      </ol>

      <h5>What is the payment procedure?</h5>
      <p>The payment procedure will be online. The accommodation charges are provided under the tab Accommodation Charges on the hospitality page. You will have to report at the accommodation desk near the Old Swimming Pool with the email printout and the mandatory documents. Failing to bring any of the documents may lead to the cancellation of your accommodation.</p>

      <h5>How do I know that my payment is confirmed?</h5>
      <p>Confirmation is not confirmed until a confirmation mail is received in 24 hours. If you have not received confirmation in 24 hours, then email your transaction ID, Techfest ID, name, amount to nivesh@techfest.org with the subject as (Transaction ID :: team ID :: Confirmation mail not received).</p>

      <h5>Documents that guests should carry?</h5>
      <ul>
        <li>Any valid Govt photo ID</li>
        <li>Print out of Email confirmation</li>
        <li>Gate pass</li>
        <li>Valid College ID for participants</li>
      </ul>

      <h5>Should I carry my ID card with me?</h5>
      <p>It is mandatory for all guest participants to carry college IDs. This is for your own convenience. Moreover, you will be asked to produce your college ID cards at the time of allotment of rooms.</p>

      <h5>What are the Accommodation charges?</h5>
      <p>The accommodation charges and other necessary details regarding the payment will be available under the tab Accommodation Charges.</p>

      <h5>What kind of accommodation is provided?</h5>
      <p>Accommodation is provided on a shared basis inside campus hostels or outside hotels. One mattress, and enough space for keeping luggage and other essential commodities will be provided. Girls and boys will be accommodated separately. The number of guests in a room will be decided by Techfest and will be allotted by the Techfest team.</p>

      <h5>Does the accommodation facilities include food facilities?</h5>
      <p>No, the accommodation charges do not include food facilities. Guests can purchase their meals from the food court, night cafeteria, or private hostel canteens or hostel messes at just INR 50 per meal.</p>

      <h5>What are the food facilities inside IIT Bombay?</h5>
      <p>For all our guests and guest, we set up a huge cafeteria serving a variety of cuisines satisfying the needs of every palate. In addition, you can also eat in the many canteens, messes, and restaurants inside the campus.</p>

      <h5>Can I enter IIT Bombay campus at any time?</h5>
      <p>You can enter IIT Main gate anytime by showing a valid photo ID proof during 6 am to 10 pm; however, you need to have accommodation inside the campus to stay in the campus after 10 pm.</p>

      <h5>Can we get accommodation on the spot at Techfest?</h5>
      <p>No confirmation of accommodation will be provided. It is completely subject to the availability of rooms.</p>
    </div>,
    'REACHING IITB': <>
    Travelling in Mumbai is very easy and systematic. The modes of travelling in Mumbai are taxis, auto rickshaws, local train and BEST Buses. IIT Bombay is located at Powai, which is an eastern suburb in the North-Eastern part (Central Railway Line) of Mumbai.<br/>
     Mumbai is in the form of a long narrow island, almost a peninsula, thrusting southwards into the Arabian Sea. In Mumbai, local trains run through the following routes. <br/>
      Western Railway: Churchgate to Borivali/Virar and return. <br/>
     Central Railway: Mumbai CST to Karjat/Kasara and return.<br/>
      Harbour Route: Mumbai CST to Andheri and return<br/>
      New Bombay Route: Mumbai CST to Vashi/Panvel and return.<br/> 
      Kanjur Marg, a Local Train Station is the closest local train stop to IIT Bombay. It is located on Central Railway line.<br/>
      An auto rickshaw from Kanjur-Marg station to IIT Bombay Main Gate costs Rs.45 approx.<br/>
      Important railway stations where you can get down are:<br/>Chhatrapati Shivaji Terminal (CST)<br/>
      Churchgate<br/>
      Mumbai Central<br/> 
      Dadar <br/>
      Lokmanya Tilak Terminus<br/>
      Thane<br/>
      Borivali<br/>
      Andheri<br/>
      Bandra<br/>
      Kalyan<br/>
      <br />
      Thane is the nearest station to IIT Bombay. Next is Lokmanya Tilak Terminus (LTT) (near Kurla) and Dadar is third in this regard.
      <br/>The taxis ply through all of the Mumbai. Auto rickshaws ply between Bandra-Borivali and Sion-Mulund and should be preferred if you have some heavy luggage, which may otherwise cause you inconvenience while travelling by local trains and buses. In taxis, you also have an option of AC Taxis-Cool Cabs, which is a more comfortable way of travel.<br/>
      Trains/buses should be preferred if you carry less baggage with you, say a small bag per person. Please beware of pickpockets in locals and BEST buses.<br/>
      Southbound trains on all the Local train lines are more crowded in the morning and thus should be avoided if the passenger is carrying baggage. Similarly, the northbound trains in the evening are more crowded.<br/>
      With respect to mornings at Kanjurmarg station, travelling from Mumbai CST, Dadar or Kurla would be less crowded that travelling from Kalyan or Thane.
      <br/> <br />
      For buses/autorickshaws, the destination should be stated as "IIT Main Gate, Powai".<br/>
      Please download m-indicator mobile application for hands-on maps & routes of Mumbai<br/>
      1. Every team has to register online on the official Techfest website for the competition.<br/>
      2. A Team ID will be allocated to the team on registration which shall be used for future references.<br/>
      3. The decision of the organizers or judges shall be treated as final and binding on all.<br/>
      4. No responsibility will be held by Techfest, IIT Bombay for any late, lost or misdirected entries.<br/>
      5. Note that at any point of time the latest information will be that which is on the website. However, registered participants will be informed through mail about any changes.<br/>
      6. All modes of official communication will be through the Techfest e-mail. Participants are advised to keep track of all folders in their e-mail accounts. <br/>
      </>,
    'CONTACT US': 
    <div style={{textAlign:'Center', width:'100%', fontSize:'20px'}}>
      Nivesh Maheshwari <br />
      Hospitality Manager <br />
      +91 73576 54007 <br />
      nivesh@techfest.org
    </div>,
  };

  const [activeTab, setActiveTab] = useState(null); // Start with no active tab
  const [showRegistrationForm, setShowRegistrationForm] = useState(false);
  const [showBackButton, setShowBackButton] = useState(false);

  const tabClickHandler = (tab) => {
    setShowBackButton(false)
    setActiveTab(activeTab === tab ? null : tab);
    setShowRegistrationForm(false);
  };

  const toggleRegistrationForm = () => {
    setActiveTab(null);
    setShowRegistrationForm(true);
    setShowBackButton(true); // Show the "BACK" button
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
              style={{ marginBottom: activeTab === tab ? '40vh' : 0 }}
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
        </div>
      </div>
    </div>
  );
};

export default MAccommodation;

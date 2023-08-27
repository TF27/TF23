import React, {useState} from 'react';
import styles from './compi_data.module.css';
import Faq from 'react-faq-component';

const Meshmerize = () => {
    const [activeCity, setActiveCity] = useState('About');

    const openCity = (cityName) => {
      setActiveCity(cityName);
    }

      const data = {
        title: "FAQs",
        rows: [
          {
            title: "What does it mean to be a College Ambassador?",
            content: "As a College Ambassador, seize the opportunity to showcase your college at Techfest, IIT Bombay. Serve as a vital link connecting Techfest with your estemmed college."
          },
          {
            title: "Am I eligible to be a College Ambassador?",
            content: 'To be eligible, all you need is a valid student id and a lot of enthusiasm.'
          },
          {
            title: "How can I apply for the post of College Ambassador?",
            content: 'Click on the Google Sign In button to apply now! Once the registration is complete, you will not be able to change your email address. Allow pop-ups if prompted to do so.'
          },
          {
            title: "What are my responsibilities as a CA?",
            content: 'As a College Ambassador, you will be engaged in social media managing, analysing trends, organising events/workshops and various other tasks designed to enhance your skills. You will also be instrumental in conducting workshops and sessions under the aegis of Techfest, IIT Bombay on your campus.'
          },
          {
            title: "How much time and effort would I have to invest?",
            content: 'You are expected to put in 1-2 hours every week on an average. Consistent commitment and sincerity toward the assigned tasks are imperative.'
          },
          {
            title: "Can there be multiple College Ambassadors from a single college?",
            content: 'Yes, depending on the size of the college, Techfest can appoint multiple College Ambassadors.'
          },
          {
            title:"How will my progress be monitored?",
            content: "You will upload proofs of your work on the CA portal; we will verify them and reward you with points that measure your progress. Please feel free to reach out to your mentors if you have any queries."
          },
    
        ],
      };

      const styles1 = {
        bgColor: '#A2A7AB',
        titleTextColor: 'black',
        rowTitleColor: 'black',
        arrowColor: 'black',
        rowContentColor: 'black',
        marginBottom: '20px',
        maxWidth: '80%',
        margin: 'auto',
      }

    const lol = {
        objectFit: 'scale-down', 
        paddingRight: '8px',
    }


    return ( 
      <div className={styles.impdata}>
        <div className={styles.info_head}>
          <div className={styles.bar_extra}></div>
          <div className={styles.bar_oii}><div className={`${styles.bar} ${activeCity === 'About' ? styles.baractive : ''}`} ></div><div className={`${styles.bar_item} ${activeCity === 'About' ? styles.active : ''}`} onClick={() => openCity('About')}>About</div></div>
          <div className={styles.bar_oii}><div className={`${styles.bar} ${activeCity === 'Structure' ? styles.baractive : ''}`}></div><div className={`${styles.bar_item} ${activeCity === 'Structure' ? styles.active : ''}`} onClick={() => openCity('Structure')}>Structure</div></div>
          <div className={styles.bar_oii}><div className={`${styles.bar} ${activeCity === 'Timeline' ? styles.baractive : ''}`}></div><div className={`${styles.bar_item} ${activeCity === 'Timeline' ? styles.active : ''}`} onClick={() => openCity('Timeline')}>Timeline</div></div>
          <div className={styles.bar_oii}><div className={`${styles.bar} ${activeCity === 'FAQs' ? styles.baractive : ''}`}></div><div className={`${styles.bar_item} ${activeCity === 'FAQs' ? styles.active : ''}`} onClick={() => openCity('FAQs')}>FAQs</div></div>
          <div className={styles.bar_oii}><div className={`${styles.bar} ${activeCity === 'Rules' ? styles.baractive : ''}`}></div><div className={`${styles.bar_item} ${activeCity === 'Rules' ? styles.active : ''}`} onClick={() => openCity('Rules')}>Rules</div></div>
          <div className={styles.bar_oii}><div className={`${styles.bar} ${activeCity === 'Contact' ? styles.baractive : ''}`}></div><div className={`${styles.bar_item} ${activeCity === 'Contact' ? styles.active : ''}`} onClick={() => openCity('Contact')}>Contact</div></div>
          <div className={styles.bar_extra}></div>
        </div>
        <div className={styles.information}>
          <div id="About" className={`${styles.info} ${activeCity === 'About' ? styles.show : styles.hide}`}>
            <div className={styles.info_tab}>
            <div className={styles.info_data}>
                Abouti
              </div>
            </div>
          </div>
          <div id="Structure" className={`${styles.info} ${activeCity === 'Structure' ? styles.show : styles.hide}`}>
            <div className={styles.info_tab}>
            <div className={styles.info_data}>
                Structure
              </div>
            </div>
          </div>
          <div id="Timeline" className={`${styles.info} ${activeCity === 'Timeline' ? styles.show : styles.hide}`}>
            <div className={styles.info_tab}>
            <div className={styles.info_data}>
                Timeline
              </div>
            </div>
          </div>
          <div id="FAQs" className={`${styles.info} ${activeCity === 'FAQs' ? styles.show : styles.hide}`}>
            <div className={styles.info_tab}>
            <div className={styles.info_data}>
              <Faq data={data} styles={styles1}/>
              </div>
            </div>
          </div>
          <div id="Rules" className={`${styles.info} ${activeCity === 'Rules' ? styles.show : styles.hide}`}>
            <div className={styles.info_tab}>
            <div className={styles.info_data}>
                Rules
              </div>
            </div>
          </div>
          <div id="Contact" className={`${styles.info} ${activeCity === 'Contact' ? styles.show : styles.hide}`}>
            <div className={styles.info_tab}>
              <div className={styles.info_data}>
                Contact
              </div>
            </div>
          </div>
        </div>
      </div>
     );
}
 
export default Meshmerize;
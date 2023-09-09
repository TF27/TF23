import React, {useState} from 'react';
import styles from './compi_data.module.css';
import Faq from 'react-faq-component';
import './x.css';

const TechfestOlympiad = () => {
    const [activeCity, setActiveCity] = useState('About');
    const [activeIndex, setActiveIndex] = useState(null);
    const openCity = (cityName) => {
      setActiveCity(cityName);
    }

      const data = {
        rows: [
          {
            title: "Why should I participate in the Techfest Olympiad?",
            content: "The competition provides the participants with real life problems which they have to solve through their practical knowledge and mental aptitude."
          },
          {
            title: "How to register?",
            content: 'Follow this steps for registration : www.techfest.org > Competitions > Techfest Olympiad > Explore More -> Register > Fill all your details > You will be registered and now you must either Create a team/Join a team'
          },
          {
            title: "Is this a team-based competition?",
            content: 'No, this competition is individual-based wherein each individual will have to give separate paper.'
          },
          {
            title: "Is it free to register for Techfest Olympiad?",
            content: 'Yes, it is free to register.'
          },
          {
            title: "What is the Registered Mail ID?",
            content: 'The Gmail ID which was used to Sign In is the Registered Mail ID. It is a unique identity of any participant. It will be used in adding team members in a team, joining a pre-existing team etc.'
          },
          {
            title: "Can I register for more than one competition?",
            content: 'Yes, you can participate in more than one competition. However, it is recommended to focus on only one competition as there may be some chances of slot clash.'
          },
    
        ],
      };

      const handleClick = (index) => {
        if (activeIndex === index) {
          // If the clicked item is already open, close it
          setActiveIndex(null);
        } else {
          // If the clicked item is not open, open it and close any previously open item
          setActiveIndex(index);
        }
      };


      const styles1 = {
        bgColor: 'none',
        titleTextColor: 'white',
        rowTitleColor: 'white',
        arrowColor: 'white',
        rowContentColor: 'white',
        marginBottom: '20px',
        maxWidth: '80%',
        margin: 'auto',
        rowContentMarginBottom: '0',
      }

    const lol = {
        objectFit: 'scale-down', 
        paddingRight: '8px',
    }


    return ( 
      <div className={styles.impdata}>
        <div className={styles.info_head}>
          {/* <div className={styles.bar_extra}></div> */}
          <div className={styles.bar_oii}><div className={`${styles.bar} ${activeCity === 'About' ? styles.baractive : ''}`} ></div><div className={`${styles.bar_item} ${activeCity === 'About' ? styles.active : ''}`} onClick={() => openCity('About')}>About</div></div>
          <div className={styles.bar_oii}><div className={`${styles.bar} ${activeCity === 'Structure' ? styles.baractive : ''}`}></div><div className={`${styles.bar_item} ${activeCity === 'Structure' ? styles.active : ''}`} onClick={() => openCity('Structure')}>Structure</div></div>
          <div className={styles.bar_oii}><div className={`${styles.bar} ${activeCity === 'Timeline' ? styles.baractive : ''}`}></div><div className={`${styles.bar_item} ${activeCity === 'Timeline' ? styles.active : ''}`} onClick={() => openCity('Timeline')}>Timeline</div></div>
          <div className={styles.bar_oii}><div className={`${styles.bar} ${activeCity === 'FAQs' ? styles.baractive : ''}`}></div><div className={`${styles.bar_item} ${activeCity === 'FAQs' ? styles.active : ''}`} onClick={() => openCity('FAQs')}>FAQs</div></div>
          <div className={styles.bar_oii}><div className={`${styles.bar} ${activeCity === 'Rules' ? styles.baractive : ''}`}></div><div className={`${styles.bar_item} ${activeCity === 'Rules' ? styles.active : ''}`} onClick={() => openCity('Rules')}>Rules</div></div>
          <div className={styles.bar_oii}><div className={`${styles.bar} ${activeCity === 'Contact' ? styles.baractive : ''}`}></div><div className={`${styles.bar_item} ${activeCity === 'Contact' ? styles.active : ''}`} onClick={() => openCity('Contact')}>Contact</div></div>
          {/* <div className={styles.bar_extra}></div> */}
        </div>
        <div className={styles.information}>
          <div id="About" className={`${styles.info} ${activeCity === 'About' ? styles.show : styles.hide}`}>
            <div className={styles.info_tab}>
            <div className={styles.info_data}>
            Techfest Olympiad presents students with a platform to develop and showcase their scientific and practical life problem-solving skills. All participants have to solve the maximum number of questions in a specified time interval to compete with the brightest minds of the country. Only Standard 8th, 9th, and 10th students are eligible to participate.
              </div>
            </div>
          </div>
          <div id="Structure" className={`${styles.info} ${activeCity === 'Structure' ? styles.show : styles.hide}`}>
            <div className={styles.info_tab}>
            <div className={styles.info_data}>
            Stage 1:<br/>
            This stage will be held at each of the 5 Zonal Qualifiers. Top 3 students will qualify for the STAGE 2 to be held during Techfest 2023-24 (provided their score is more than a minimum cut-off score which will be decided later).
            <br/><br/>
            Stage 2:<br/>
            This stage will be held at IIT Bombay campus during Techfest from 27th to 29th December 2023. These 75 students will go through a screening round and the top 15 students will go ahead to participate in the Grand Finale.
            <br/><br/>
            Stage 3:<br/>
            Personal Interview round to be taken by professional person from IIT Bombay testing critical thinking and pressure handling skills.
              </div>
            </div>
          </div>
          <div id="Timeline" className={`${styles.info} ${activeCity === 'Timeline' ? styles.show : styles.hide}`}>
            <div className={styles.info_tab}>
            <div className={styles.info_data}>
            Round 1:<br/>
            Zonals Round will be held at Techfest 2023-24 during 27th - 29th December 2023.
            <br/><br/>Round 2:<br/>
            Finale will be held at Techfest 2023-24 during 27th - 29th December 2023.
              </div>
            </div>
          </div>
          <div id="FAQs" className={`${styles.info} ${activeCity === 'FAQs' ? styles.show : styles.hide}`}>
            <div className={styles.info_tab}>
            <div className={styles.info_data}>
              <Faq 
                data={data} 
                styles={styles1} 
                activeIndex={activeIndex}
                onToggle={handleClick}
              />
              </div>
            </div>
          </div>
          <div id="Rules" className={`${styles.info} ${activeCity === 'Rules' ? styles.show : styles.hide}`}>
            <div className={styles.info_tab}>
            <div className={styles.info_data}>
            1. Every team has to register online on the official Techfest website for the competition.
            <br/>2. A Team ID will be allocated to the team on registration which shall be used for future references.
            <br/>3. The decision of the organizers or judges shall be treated as final and binding on all.
            <br/>4. No responsibility will be held by Techfest, IIT Bombay for any late, lost or misdirected entries.
            <br/>5. Note that at any point of time the latest information will be that which is on the website. However, registered participants will be informed through mail about any changes.
            <br/>6. All modes of official communication will be through the Techfest e-mail. Participants are advised to keep track of all folders in their e-mail accounts.
              </div>
            </div>
          </div>
          <div id="Contact" className={`${styles.info} ${activeCity === 'Contact' ? styles.show : styles.hide}`}>
            <div className={styles.info_tab}>
              <div className={styles.info_data}>
              Akshat Gupta<br/>
              +91 96196 78850<br/>
              akshat@techfest.org
              </div>
            </div>
          </div>
        </div>
      </div>
     );
}
 
export default TechfestOlympiad;
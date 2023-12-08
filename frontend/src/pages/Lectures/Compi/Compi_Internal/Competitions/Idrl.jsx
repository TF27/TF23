import React, {useState} from 'react';
import styles from './compi_data.module.css';
import Faq from 'react-faq-component';
import './x.css';
import Whatsapplink from '../../../../components/whatsapp/link';


const Idrl = () => {
    const [activeCity, setActiveCity] = useState('About');
    const [activeIndex, setActiveIndex] = useState(null);
    const openCity = (cityName) => {
      setActiveCity(cityName);
    }

      const data = {
        rows: [
          {
            title: "How to register?",
            content: "Follow this steps for registration : www.techfest.org > Competitions > Int'l Drone Racing > Explore More -> Register > Fill all your details"
          },
          {
            title: "Who can participate?",
            content: 'Any individual with a valid government ID card'
          },
          {
            title: "Is this an individual competition or a team competition?",
            content: 'Only individual participation is allowed in International Drone Racing League'
          },
          {
            title: "Is it free to register for International Drone Racing League?",
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
    const walink1 = "https://chat.whatsapp.com/HdWEz4Ak9UC7Uo3bKKXWjs";
    const dslink1 = "https://chat.whatsapp.com/HdWEz4Ak9UC7Uo3bKKXWjs";

    return ( 
      <div>
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
            For the first time in the history of techfest organizing International FPV Drone Racing League.Brace yourselves for one of the most elite extravaganza events International Drone Racing at Techfest IIT Bombay and witness the drones slicing through the air with absolute speed. </div>
            </div>
          </div>
          <div id="Structure" className={`${styles.info} ${activeCity === 'Structure' ? styles.show : styles.hide}`}>
            <div className={styles.info_tab}>
            <div className={styles.info_data}>
            All races will be governed by an appointed team of judges/organizers. <br />
            Each race will be monitored by judges, cameras, timing/lap systems and volunteers to maintain fair and accurate competition <br />
            QUALIFIERS with 5 HEATS: Fastest 3 consecutive laps considered <br />
           (If the pilot thinks he has set his fastest timing n secured his position in top 9 for semis he can skip the rest of the heats) <br />
           SEMIS with 4 HEATS: Fastest 3 consecutive laps considered <br />
           (If the pilot thinks he has set his fastest timing in semis n secured his position in top 3 for final he can skip the rest of the heats) <br />
           FINALS with CHASE THE ACE (3 Pilots)</div>
            </div>
          </div>
          <div id="Timeline" className={`${styles.info} ${activeCity === 'Timeline' ? styles.show : styles.hide}`}>
            <div className={styles.info_tab}>
            <div className={styles.info_data}>
            <li>Practice Day: 26 December, 2023 </li> <br />
            <li>Date of Competition: 27th December, 2023 </li>
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
            1. Every team has to register online on the official Techfest website for the competition <br />
                      2. Pilots must adhere to all rules within the competition venue, and will not fly in any other part of the venue unless it is a designated flight zone. <br />
                      3. Pilots must arrive at the venue with their complete setup 1 hour before the official race time and must be in complete READY-TO-GO state 15 mins before race time. <br />
                      4. Pilots will NOT be given any practice sessions during the 15 mins before race starts. <br />
                      5. Pilots who are not in READY-TO-GO state 15 mins prior to race start will be disqualified from participating in the race. <br />
                      6. Pilots MUST NOT assume any change of race time until it is officially announced by the organizers. <br />
                      7. Pilots must contain all equipment and airframes within the pilot pit area and must not solder, weld or cause any spark within the pit area. <br />
                      8. There will be established workbench areas for soldering, repairs and modifications. <br />
                      9. A charging station would be provided with power points. <br />
                      10. General charging of electronic devices including radios or any device with a self-contained power supply is permitted. <br />
                      11. All batteries must be stored in a LiPo-safe bag or in an approved, fire resistant <br />
                      12. The organisers reserve the right to change any or all of the above rules as they deem fit; Change in rules, if any, will be highlighted on the website and notified to the registered teams.
              </div>
            </div>
          </div>
          <div id="Contact" className={`${styles.info} ${activeCity === 'Contact' ? styles.show : styles.hide}`}>
            <div className={styles.info_tab}>
              <div className={styles.info_data}>
              Chirag Rao<br/>
              +91 82871 75335<br/>
              chiragrao.techfest@gmail.com
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.grouplink}>
      <div className={styles.wabutton }><Whatsapplink walink={walink1} dslink={dslink1} target="_blank"/></div>
    </div>
    </div>
     );
}
 
export default Idrl ;
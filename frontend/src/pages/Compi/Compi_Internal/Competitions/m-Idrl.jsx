import React, { useState } from 'react';
import styles from './compi_data.module.css';
import Faq from 'react-faq-component';
import './x.css';
import Whatsapplink from '../../../../components/whatsapp/link';

const Idrl = () => {

    const [open, setOpen] = useState(false);

    const handleClickOpen = (openX) => {
        if(openX === open){
            setOpen(false);
        }
        else{
            setOpen(openX);
        }
    }

    const [openFaq, setOpenFaq] = useState(false);

    const OpenFaq = (index) => {
        setOpenFaq(prevOpenFaq => prevOpenFaq === index ? null : index);
    }


    const data = {
        rows: [
          {
            title: "How to register?",
            content: "Follow this steps for registration : www.techfest.org > Competitions > Int'l Drone Racing > Explore More -> Register > Fill all your details > You will be registered and now you must either Create a team/Join a team"
          },
          {
            title: "Is it free to register for Int'l Drone Racing?",
            content: 'Yes, it is free to register.'
          },
          {
            title: "How can I make my own team (as a team leader)?",
            content: "Follow this process: www.techfest.org -> (hover on) Competitions -> Competitions -> Int'l Drone Racing-> Explore -> Register -> Fill all your details"
          },
          {
            title: "What is the Registered Mail ID?",
            content: 'The Gmail ID which was used to Sign In is the Registered Mail ID. It is a unique identity of any participant.'
          },
          {
            title: "Can I register for more than one competition?",
            content: 'Yes, you can participate in more than one competition. However, it is recommended to focus on only one competition as there may be some chances of slot clash.'
          },

    
    
        ],
      };

    const styles1 = {
        bgColor: 'none',
        titleTextColor: '#fff',
        rowTitleColor: '#fff',
        arrowColor: '#fff',
        rowContentColor: '#fff',
        marginBottom: '20px',
        maxWidth: '80%',
        margin: 'auto',
        rowContentMarginBottom: '0',
      }
      const walink1 = "https://chat.whatsapp.com/HdWEz4Ak9UC7Uo3bKKXWjs";
      const dslink1 = "https://chat.whatsapp.com/HdWEz4Ak9UC7Uo3bKKXWjs";
    return (
        <div className={styles.mWholeData}>
        <div className={styles.grouplink}>
        <div className={styles.wabutton }><Whatsapplink walink={walink1} dslink={dslink1} target="_blank"/></div>
        </div>  
            <div>
                <div onClick={() => handleClickOpen('About')} className={`${styles.whatu} ${open === 'About' ? styles.whatuOpen : ''}`}>
                    <div className={`${styles.abt_rect1} ${styles.whatu_rect1}`}></div>
                    <div className={`${styles.abt_rect2} ${styles.whatu_rect2}`}>About</div>
                </div>
                <div className={`${styles.whatd} ${open === 'About' ? styles.whatdOpen : ''}`}>
                    <div className={`${styles.abt_rect1} ${styles.whatd_rect1}`}></div>
                    <div className={`${styles.abt_rect2} ${styles.whatd_rect2}`}>For the first time in the history of techfest organizing International FPV Drone Racing League.Brace yourselves for one of the most elite extravaganza events International Drone Racing at Techfest IIT Bombay and witness the drones slicing through the air with absolute speed.</div>
                </div>
            </div>
            <div>
                <div onClick={() => handleClickOpen('Structure')} className={`${styles.whatu} ${open === 'Structure' ? styles.whatuOpen : ''}`}>
                    <div className={`${styles.str_rect1} ${styles.whatu_rect1}`}></div>
                    <div className={`${styles.str_rect2} ${styles.whatu_rect2}`}>Structure</div>
                </div>
                <div className={`${styles.whatd} ${open === 'Structure' ? styles.whatdOpen : ''}`}>
                    <div className={`${styles.abt_rect1} ${styles.whatd_rect1}`}></div>
                    <div className={`${styles.abt_rect2} ${styles.whatd_rect2}`}>
                    All races will be governed by an appointed team of judges/organizers. <br />
            Each race will be monitored by judges, cameras, timing/lap systems and volunteers to maintain fair and accurate competition <br />
            QUALIFIERS with 5 HEATS: Fastest 3 consecutive laps considered <br />
           (If the pilot thinks he has set his fastest timing n secured his position in top 9 for semis he can skip the rest of the heats) <br />
           SEMIS with 4 HEATS: Fastest 3 consecutive laps considered <br />
           (If the pilot thinks he has set his fastest timing in semis n secured his position in top 3 for final he can skip the rest of the heats) <br />
           FINALS with CHASE THE ACE (3 Pilots)</div>
                </div>
            </div>
            <div>
                <div onClick={() => handleClickOpen('Timeline')} className={`${styles.whatu} ${open === 'Timeline' ? styles.whatuOpen : ''}`}>
                    <div className={`${styles.time_rect1} ${styles.whatu_rect1}`}></div>
                    <div className={`${styles.time_rect2} ${styles.whatu_rect2}`}>Timeline</div>
                </div>
                <div className={`${styles.whatd} ${open === 'Timeline' ? styles.whatdOpen : ''}`}>
                    <div className={`${styles.abt_rect1} ${styles.whatd_rect1}`}></div>
                    <div className={`${styles.abt_rect2} ${styles.whatd_rect2}`}>
                    <li>Practice Day: 26 December, 2023</li> <br />
                    <li>Date of Competition: 27th December, 2023</li>  </div>
                </div>
            </div>
            <div>
                <div onClick={() => handleClickOpen('FAQs')} className={`${styles.whatu} ${open === 'FAQs' ? styles.whatuOpen : ''}`}>
                    <div className={`${styles.faq_rect1} ${styles.whatu_rect1}`}></div>
                    <div className={`${styles.faq_rect2} ${styles.whatu_rect2}`}>FAQs</div>
                </div>
                <div className={`${styles.whatd} ${open === 'FAQs' ? styles.whatdOpen : ''}`}>
                    <div className={`${styles.abt_rect1} ${styles.whatd_rect1}`}></div>
                    <div className={`${styles.abt_rect2} ${styles.whatd_rect2}`}>
                        <Faq data={data} styles={styles1}/>
                    </div>
                </div>
            </div>
            <div>
                <div onClick={() => handleClickOpen('Rules')} className={`${styles.whatu} ${open === 'Rules' ? styles.whatuOpen : ''}`}>
                    <div className={`${styles.rule_rect1} ${styles.whatu_rect1}`}></div>
                    <div className={`${styles.rule_rect2} ${styles.whatu_rect2}`}>Rules</div>
                </div>
                <div className={`${styles.whatd} ${open === 'Rules' ? styles.whatdOpen : ''}`}>
                    <div className={`${styles.abt_rect1} ${styles.whatd_rect1}`}></div>
                    <div className={`${styles.abt_rect2} ${styles.whatd_rect2}`}>
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
                      12. The organisers reserve the right to change any or all of the above rules as they deem fit; Change in rules, if any, will be highlighted on the website and notified to the registered teams</div>
                </div>
            </div>
            <div>
                <div onClick={() => handleClickOpen('Contact')} className={`${styles.whatu} ${open === 'Contact' ? styles.whatuOpen : ''}`}>
                    <div className={`${styles.ctc_rect1} ${styles.whatu_rect1}`}></div>
                    <div className={`${styles.ctc_rect2} ${styles.whatu_rect2}`}>Contact</div>
                </div>
                <div className={`${styles.whatd} ${open === 'Contact' ? styles.whatdOpen : ''}`}>
                    <div className={`${styles.abt_rect1} ${styles.whatd_rect1}`}></div>
                    <div className={`${styles.abt_rect2} ${styles.whatd_rect2}`}>
                    Atharv Apshinge<br/>
                    <div className="col-3 contactMail" onClick={() => window.location.href = `mailto:chirag@techfest.org`}>chirag@techfest.org</div>
                    <div className="col-3 contactNum" onClick={() => window.location.href = `tel:8287175335`}>+91 82871 75335</div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Idrl;
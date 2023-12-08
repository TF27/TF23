import React, {useState} from 'react';
import styles from './compi_data.module.css';
import Faq from 'react-faq-component';
import './x.css';
import Whatsapplink from '../../../../components/whatsapp/link';

const Edel = () => {
    const [activeCity, setActiveCity] = useState('About');
    const [activeIndex, setActiveIndex] = useState(null);
    const openCity = (cityName) => {
      setActiveCity(cityName);
    }

      const data = {
        rows: [
          {
            title: "How to register?",
            content: 'Follow this steps for registration : www.techfest.org > Competitions > Cashflow Modelling > Explore More -> Register > Fill all your details > You will be registered and now you must either Create a team/Join a team'
          },
          {
            title: "How many people can be there in one team?",
            content: 'One team can have a maximum of 4 members.'
          },
          {
            title: "Is it free to register for Cashflow Modelling?",
            content: 'Yes, it is free to register.'
          },
          {
            title: "How can I make my own team (as a team leader)?",
            content: 'Follow this process: www.techfest.org -> (hover on) Competitions -> Competitions -> Cashflow Modelling -> Explore -> Register -> Fill all your details -> Team -> Create a team -> Use the Registered Mail ID of other participants to add them to your team. They must be already registered before adding them to your team'
          },
          {
            title: "What is the Registered Mail ID?",
            content: 'The Gmail ID which was used to Sign In is the Registered Mail ID. It is a unique identity of any participant. It will be used in adding team members in a team, joining a pre-existing team etc.'
          },
          {
            title:"Who can add members in a team?",
            content: "Only the team leader has the right to add members in a team. However, others can join an existing team by clicking on the Join Team button."
          },
          {
            title: "Can I add myself to an existing team?",
            content: 'Yes, follow these steps to get added to a team. Join team -> Enter required details. You will be added to that team.'
          },
          {
            title: "How can I remove members from my team (as a team leader)?",
            content: 'You cannot remove any team member.'
          },
          {
            title: "What happens when the team leader leaves their team?",
            content: 'If the team leader leaves their team, the team will get dissolved. The other members of the team will then have to create a new team.'
          },
          {
            title: "Is it necessary for the team leader to add all the team members at once?",
            content: 'No, it is not necessary. The team leader can add one member or none, only once, which is while creating the team, but if the team is not full and they want to add more members afterwards, then members (to be added) will have to use the Join Team button to join the team.'
          },
          {
            title: "How can a team member (other than the leader) leave the team?",
            content: 'Click on the Leave Team button and you will be removed from the registered team.'
          },
          {
            title: "Who can delete a team?",
            content: 'Only the team leader can delete the team using the Dissolve Team button.'
          },
          {
            title: "Can a team have members from different colleges?",
            content: 'Yes, students from different colleges can form a team.'
          },
          {
            title: "Can I register for more than one competition?",
            content: 'Yes, you can participate in more than one competition. However, it is recommended to focus on only one competition as there may be some chances of slot clash.'
          },
          {
            title: "How many teams can I join?",
            content: 'You can join only one team in one competition. Participating in more than one team will get you DISQUALIFIED.'
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
    const walink1 = "https://chat.whatsapp.com/Gur8T8nzfTdHT6k6cP1QOn";
    const dslink1 = "https://chat.whatsapp.com/Gur8T8nzfTdHT6k6cP1QOn";

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
            Join our Cash Flow Optimization Challenge! Develop models to forecast cash flow, recommend optimal payment strategies, and apply solutions to the last 7 months' data. Revolutionize our cash flow management and maximize investment income.   
              </div>
            </div>
          </div>
          <div id="Structure" className={`${styles.info} ${activeCity === 'Structure' ? styles.show : styles.hide}`}>
            <div className={styles.info_tab}>
            <div className={styles.info_data}>
              <ul>
                <li>
                  Round 1: <br />
                  Participants are required to provide a comprehensive summary of their comprehension of the Problem Statement. 
                </li>
                <li>
                  Final round: <br />
                  This stage will involve a physical demonstration, during which the chosen teams will present the functionality of their model. Students will be required to demonstrate the functionality of their model on the data provided, the scenario analysis and present their recommendations. 
                </li>
              </ul>
              </div>
            </div>
          </div>
          <div id="Timeline" className={`${styles.info} ${activeCity === 'Timeline' ? styles.show : styles.hide}`}>
            <div className={styles.info_tab}>
            <div className={styles.info_data}>
              <ul>
                <li>
                  Last date of registration: <br />
                  7th December 2023
                </li>
                <li>
                  Draft Submission Deadline: <br />
                  8th December 2023
                </li>
                <li>
                  Finalist announcement: <br />
                  13th December 2023
                </li>
                <li>
                  Submission of Presentation: <br />
                  25th December 2023
                </li>
                <li>
                  Final Round at IIT Bombay Campus: <br />
                  29th December 2023
                </li>
              </ul>
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
            1. Every team has to register online on the official Techfest website for the competition
            <br/>2. A Team ID will be allocated to the team on registration which shall be used for future references
            <br/>3. The decision of the organizers or judges shall be treated as final and binding on all
            <br/>4. No responsibility will be held by Techfest, IIT Bombay for any late, lost or misdirected entries
            <br/>5. All modes of official communication will be through the Techfest e-mail, participants are advised to keep track of all folders in their e-mail accounts
            <br/>6. Participants have to bring their own laptops during the competition
            <br/>7. Teams will be responsible for their devices, it is advised that laptops should be charged before the competition
            <br/>8. Mobile phones are not allowed during the competition
            <br/>9. The organisers reserve the right to change any or all of the above rules as they deem fit. Change in rules, if any, will be highlighted on the website and notified to the registered teams
              </div>
            </div>
          </div>
          <div id="Contact" className={`${styles.info} ${activeCity === 'Contact' ? styles.show : styles.hide}`}>
            <div className={styles.info_tab}>
              <div className={styles.info_data}>
              Atharv Apshinge <br />
        
              <div className="col-3 contactMail" onClick={() => window.location.href = `mailto:atharv@techfest.org`}>atharv@techfest.org</div>
              <div className="col-3 contactNum" onClick={() => window.location.href = `tel:9324589830`}>+91 93245 89830</div>
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
 
export default Edel;
import React, {useState} from 'react';
import styles from './compi_data.module.css';
import Faq from 'react-faq-component';
import './x.css';
import whatsapplink from '../../../../components/whatsapp/link';


const CozmoClench = () => {
    const [activeCity, setActiveCity] = useState('About');
    const [activeIndex, setActiveIndex] = useState(null);
    const openCity = (cityName) => {
      setActiveCity(cityName);
    }

      const data = {
        rows: [
          {
            title: "Why should I participate in the CozmoClench?",
            content: "The competition provides a platform for students to design and construct their own gripper bot which can drive through an obstacle-filled path and put the objects in the respective target zones. It also provides an opportunity for students to work as a team and test their skills"
          },
          {
            title: "How to register?",
            content: 'Follow this steps for registration : www.techfest.org > Competitions > CozmoClench > Explore More -> Register > Fill all your details > You will be registered and now you must either Create a team/Join a team'
          },
          {
            title: "How many people can be there in one team?",
            content: 'One team can have a maximum of 4 members.'
          },
          {
            title: "Is it free to register for CozmoClench?",
            content: 'Yes, it is free to register.'
          },
          {
            title: "How can I make my own team (as a team leader)?",
            content: 'Follow this process: www.techfest.org -> (hover on) Competitions -> Competitions -> CozmoClench -> Explore -> Register -> Fill all your details -> Team -> Create a team -> Use the Registered Mail ID of other participants to add them to your team. They must be already registered before adding them to your team'
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
            content: 'You cannot remove a team member.'
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
            The competition provides a platform for students to design and construct their own gripper bot which can drive through an obstacle-filled path and put the objects in the respective target zones. It also provides an opportunity for students to work as a team and test their skills
              </div>
            </div>
          </div>
          <div id="Structure" className={`${styles.info} ${activeCity === 'Structure' ? styles.show : styles.hide}`}>
            <div className={styles.info_tab}>
            <div className={styles.info_data}>
            Top 5 teams from each Zonal Qualifier will qualify for the Grand Finale that will be held during Techfest 2022-23 (Only if they score higher than the minimum cut-off score)
              </div>
            </div>
          </div>
          <div id="Timeline" className={`${styles.info} ${activeCity === 'Timeline' ? styles.show : styles.hide}`}>
            <div className={styles.info_tab}>
            <div className={styles.info_data}>
              <ul>
                <li>
                  Round 1:<br/>
                  Zonals Round will be held at Techfest 2023-24 during 27th - 29th December 2023
                </li>
                <li>
                Round 2:<br/>
                Finale will be held at Techfest 2023-24 during 27th - 29th December 2023
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
            <br/>5. Note that at any point of time the latest information will be that which is on the website; However, registered participants will be informed through mail about any changes
            <br/>6. All modes of official communication will be through the Techfest e-mail. Participants are advised to keep track of all folders in their e-mail accounts
              </div>
            </div>
          </div>
          <div id="Contact" className={`${styles.info} ${activeCity === 'Contact' ? styles.show : styles.hide}`}>
            <div className={styles.info_tab}>
              <div className={styles.info_data}>
              Tarun Kumar<br/>
              <div className="col-3 contactMail" onClick={() => window.location.href = `mailto:abhishek@techfest.org`}>abhishek@techfest.org</div>
                <div className="col-3 contactNum" onClick={() => window.location.href = `tel:7549952736`}>7549952736</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.grouplink}>
      <div className={styles.wabutton }>{whatsapplink('https://www.youtube.com/')}</div>
    </div></div>
     );
}
 
export default CozmoClench;
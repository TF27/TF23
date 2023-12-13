import React, {useState} from 'react';
import styles from './compi_data.module.css';
import Faq from 'react-faq-component';
import './x.css';
import Whatsapplink from '../../../../components/whatsapp/link';


const Soker = () => {
    const [activeCity, setActiveCity] = useState('About');
    const [activeIndex, setActiveIndex] = useState(null);
    const openCity = (cityName) => {
      setActiveCity(cityName);
    }

      const data = {
        rows: [
          {
            title: "Is it free to register for Robosoccer?",
            content: 'Yes, it is free to register.'
          },
          {
            title: "Why should I participate in Soker?",
            content: "This year, Techfest is proud to organise PRAGYAN K-12, where students from the K-12 segment will get a platform to showcase their expertise in Robotics. Students have to design and construct a robot, capable of pushing or dragging the ball in an opponent's goal. The competition will enhance team spirit and test their skills in robotics."
          },
          {
            title: "How to register?",
            content: 'Participants should be Signed in before Registering.Then, follow these steps for registration :www.techfest.org -> Competitions > Robosoccer -> Register -> Fill all your details -> You are registered in that competition. Now you must either Create a team or Join a Team using the registered mail ID.'
          },
          {
            title: "What is the Registered Mail Id of a person?",
            content: 'The Gmail Id which was used to Sign In is the registered mail Id. It is a unique identity of any participant. And will be used in adding team members to a team, joining a pre-existing team, availing accommodation, etc.'
          },
          {
            title: "How can I make my own team (as a team leader)?",
            content: 'Follow this process: www.techfest.org -> (hover on) Competitions -> Competitions -> Robosoccer -> Explore -> Register -> Fill all your details -> Team -> Create a team -> Use the Registered Mail ID of other participants to add them to your team. They must be already registered before adding them to your team'
          },
          {
            title: "How many people can be there in one team?",
            content: 'One team can have maximum of 4 members.'
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
            content: 'You cannot remove a team member once added, you can dissolve the team and form a new one.'
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
            title: "Can we change the team leader of our team?",
            content: "No, you can't change the team leader of your team. But, you can dissolve the team and form a new one."
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
    const walink1 = "https://chat.whatsapp.com/IBCPtDoICtS71hMMAvcG5F";
    const dslink1 = "https://chat.whatsapp.com/IBCPtDoICtS71hMMAvcG5F";

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
            Teams have to build a manually controlled Robo-soccer bot, which should be able to push or drag the ball in opponents goal, without gripping. </div>
            </div>
          </div>
          <div id="Structure" className={`${styles.info} ${activeCity === 'Structure' ? styles.show : styles.hide}`}>
            <div className={styles.info_tab}>
            <div className={styles.info_data}>
            A team may consist of a maximum of 4 members. Students from different educational institutes can form a team. <br />
            The competition will start from 27th December and teams will be eliminated as they compete with each other, with the Finals being done by 29th December 2023.
            </div>
          </div>
          </div>

          
          <div id="Timeline" className={`${styles.info} ${activeCity === 'Timeline' ? styles.show : styles.hide}`}>
            <div className={styles.info_tab}>
            <div className={styles.info_data}>
            <li>Last date for registration: 26th December 2023</li>
            <li>Competition Date: 27th-29th December 2023</li>
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
            The bot would be checked for safety before starting and will be disqualified if found unsafe for other participants. <br />
            Only one team member is allowed to handle the bot. No other team member is allowed to enter the arena. <br />
            The bot will be liable for disqualification if it causes any kind of damage to the arena. <br />
            The soccer bot can only transform to its size at the beginning. It cannot divide into multiple separate parts. <br />
            Each team will be given a time span of 2 minutes at the beginning of each half to check the bot and fine tune. Referees will check the robot after every modification. <br />
            If the bot becomes immobile during the match, the team will first be given 60 seconds to fix it, without any loss of points. If the team fails to fix it in 60 seconds, another 60 seconds will be given at the expense of 2 points. If the team does not repair the bot within this time, then that bot will be disqualified. <br />
            No stalling of any kind is allowed. <br />
            All bots must have their own power supply. <br />
            Bots will be analyzed by the referee before a match. He will select or reject bots, taking into consideration the rules and dimension limits. <br />
            The match will be paused in case of any entanglement of wires of both the bots. <br />
            Any clamp in the structure of the bot should not grip the robot. <br />
            The bot should not lift the ball in the air. <br />
            In case one team is disqualified, the other team may be asked to play again. <br />
            The decisions taken by the referees will be final. <br />
            In case of any disputes, the decisions of the referees or event managers will be final.
              </div>
            </div>
          </div>
          <div id="Contact" className={`${styles.info} ${activeCity === 'Contact' ? styles.show : styles.hide}`}>
            <div className={styles.info_tab}>
              <div className={styles.info_data}>
                Sajal Sharma<br/>
                    <div className="col-3 contactNum" onClick={() => window.location.href = `tel:
                    `}>+91 84497 74393</div>
                    <div className="col-3 contactMail" onClick={() => window.location.href = `sajal.techfest@gmail.com`}>sajal.techfest@gmail.com</div>
              
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
 
export default Soker;
import React, { useState } from 'react';
import styles from './compi_data.module.css';
import Faq from 'react-faq-component';
import Whatsapplink from '../../../../components/whatsapp/link';
import './x.css';

const Robocapleague = () => {

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
            content: 'Follow these steps for registration: Go to www.robocapleague.com/apply -> Select a suitable time for the RCAT (RoboCap Assessment Test) ->: Attend the test and demonstrate your skills -> Get your RoboCap Certificate -> The teams with all the participants having the RoboCap Certificate will have to register on a link provided to them later'
          },
          {
            title: "How many people can be there in one team?",
            content: 'One team can have a maximum of 4 members.'
          },
          {
            title: "Is it free to register for Robocap League?",
            content: 'Yes, it is free to register.'
          },
          // {
          //   title: "How can I make my own team (as a team leader)?",
          //   content: 'Follow this process: www.techfest.org -> Competitions -> Robocap League -> Explore -> Register -> Fill all your details -> Team -> Create a team -> Use the Registered Mail ID of other participants to add them to your team. They must be already registered before adding them to your team'
          // },
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
            content: 'Click on the Remove Member button and then select the member you wish to remove.'
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
    const walink1 = "https://chat.whatsapp.com/EBvDj4F7hh22c4DMkDf4O0";
    const dslink1 = "https://chat.whatsapp.com/EBvDj4F7hh22c4DMkDf4O0";

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
                    <div className={`${styles.abt_rect2} ${styles.whatd_rect2}`}>Unleash your creativity in the realm of space with the 'Space Exploration and Colonization' competition, celebrating Chandrayaan 3's success, where students build innovative robotics projects from scratch and showcase their skills at IIT Bombay.</div>
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
                    Stage 1: <br />
                    Students have to give the online RCAT (RoboCap Assessment Test) and get the Green Robocap certificate <br />
                    <br />
                    Stage 2: <br />
                    Teams that qualify the RCAT will be selected for the national finals at IIT Bombay during Techfest 2023-24. Here they will be presenting their final projects to the judges in offline mode.</div>
                </div>
            </div>
            <div>
                <div onClick={() => handleClickOpen('Timeline')} className={`${styles.whatu} ${open === 'Timeline' ? styles.whatuOpen : ''}`}>
                    <div className={`${styles.time_rect1} ${styles.whatu_rect1}`}></div>
                    <div className={`${styles.time_rect2} ${styles.whatu_rect2}`}>Timeline</div>
                </div>
                <div className={`${styles.whatd} ${open === 'Timeline' ? styles.whatdOpen : ''}`}>
                    <div className={`${styles.abt_rect1} ${styles.whatd_rect1}`}></div>
                    <div className={`${styles.abt_rect2} ${styles.whatd_rect2}`}>Round 1:<br/>
                    Round 1:<br/>
            Last date to earn Green RoboCap & meet eligibility: 30 November, 2023 <br />
             <br />
            Round 2:<br/>
            Finale will be held at Techfest 2023-24 during 27th - 29th December 2023 (exact date and time of the competition will be conveyed to the finalists)</div>
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
                    <div className={`${styles.abt_rect2} ${styles.whatd_rect2}`}>1. Every team has to register online on the official Techfest website for the competition
                    <br/>2. A Team ID will be allocated to the team on registration which shall be used for future references
                    <br/>3. The decision of the organizers or judges shall be treated as final and binding on all
                    <br/>4. No responsibility will be held by Techfest, IIT Bombay for any late, lost or misdirected entries
                    <br/>5. Note that at any point of time the latest information will be that which is on the website; However, registered participants will be informed through mail about any changes
                    <br/>6. All modes of official communication will be through the Techfest e-mail, participants are advised to keep track of all folders in their e-mail accounts</div>
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
                    Shreshth Raj
                    <div className="col-3 contactNum" onClick={() => window.location.href = `tel:9507505848`}>+91 95075 05848</div>
                    <div className="col-3 contactMail" onClick={() => window.location.href = `mailto:shreshthraj.techfest@gmail.com`}>shreshthraj.techfest@gmail.com</div>
                    
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Robocapleague;
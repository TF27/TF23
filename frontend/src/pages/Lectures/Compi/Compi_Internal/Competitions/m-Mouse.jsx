import React, { useState } from 'react';
import styles from './compi_data.module.css';
import Faq from 'react-faq-component';
import Whatsapplink from '../../../../components/whatsapp/link';
import './x.css';

const Mouse = () => {

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
                title: "How many stages does the competition have?",
                content: 'The competition is divided into 2 stages, detailed information about both stages can be found in the problem statement.'
              },
              {
                title: "How to register?",
                content: 'Participants should be Signed in before Registering.Then, follow these steps for registration :www.techfest.org -> Competitions > Micromouse Challenge -> Register -> Fill all your details -> You are registered in that competition. Now you must either Create a team or Join a Team using the registered mail ID.'
              },
              {
                title: "What is the Registered Mail Id of a person?",
                content: 'The Gmail Id which was used to Sign In is the registered mail Id. It is a unique identity of any participant. And will be used in adding team members to a team, joining a pre-existing team, availing accommodation, etc.'
              },
              {
                title: "Is it free to register for Micromouse Challenge?",
                content: 'Yes, it is free to register.'
              },
              {
                title: "How can I make my own team (as a team leader)?",
                content: 'Follow this process: www.techfest.org -> (hover on) Competitions -> Competitions -> Micromouse Challeneg -> Explore -> Register -> Fill all your details -> Team -> Create a team -> Use the Registered Mail ID of other participants to add them to your team. They must be already registered before adding them to your team'
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
                content: 'No, you can’t change the team leader of your team. But, you can dissolve the team and form a new one.'
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
      const walink1 = "https://chat.whatsapp.com/JfnswTDxpTU7QXuidxymK4";
      const dslink1 = "https://chat.whatsapp.com/JfnswTDxpTU7QXuidxymK4";
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
                    <div className={`${styles.abt_rect2} ${styles.whatd_rect2}`}>Participants are required to code an autonomous self-contained bot on ROS to be simulated on Gazebo, Micromouse, which can get to the centre of a maze in the shortest possible time. A micromouse essentially comprises of a drive motor or motors to move it; a steering and turning method and sensors to detect the presence or absence of maze walls which has to be specified in the URDF and sensors or control logic to oversee the action of the rest and keep the vehicle 'on track' or to solve the maze.</div>
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
                    This is a single stage competiton. Participants have to code their bot and then send all the required files as a zip file as mentioned in the Problem Statement and compete at Techfest 2023.
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
                    <li>Last date for submitting code & all required files:<br />
            25th December 2023</li>
            <li>Final Competition:<br />
            28th-29th December 2023 </li>
           
                    </div>
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
                    1. Every team has to register online on the official Techfest website for the competition
            <br/>2. A Team ID will be allocated to the team on registration which shall be used for future references
            <br/>3. The decision of the organizers or judges shall be treated as final and binding on all
            <br/>4. No responsibility will be held by Techfest, IIT Bombay for any late, lost or misdirected entries
            <br/>5. Note that at any point of time the latest information will be that which is on the website; however, registered participants will be informed through mail about any changes
            <br/>6. All modes of official communication will be through the Techfest e-mail, participants are advised to keep track of all folders in their e-mail accounts
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
                    Vidyanand Kumar<br/>
                    <div className="col-3 contactNum" onClick={() => window.location.href = `tel:9142538453`}>+91 91425 38453</div>
                    <div className="col-3 contactMail" onClick={() => window.location.href = `kvidyanand966@gmail.com`}>kvidyanand966@gmail.com</div>
                    </div>
                </div>
            </div>
        </div>
        </div>
        </div>
    );
}

export default Mouse;
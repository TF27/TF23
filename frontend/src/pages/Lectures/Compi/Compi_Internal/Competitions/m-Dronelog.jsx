import React, { useState } from 'react';
import styles from './compi_data.module.css';
import Faq from 'react-faq-component';
import './x.css';
import Whatsapplink from '../../../../components/whatsapp/link';

const Dronelog = () => {

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
            title: "Why should I participate in the Dronelog?",
            content: "The competition provides a platform for students to design and construct their own gripper bot which can drive through an obstacle-filled path and put the objects in the respective target zones. It also provides an opportunity for students to work as a team and test their skills"
          },
          {
            title: "How to register?",
            content: 'Follow this steps for registration : www.techfest.org > Competitions > Dronelog > Explore More -> Register > Fill all your details > You will be registered and now you must either Create a team/Join a team'
          },
          {
            title: "How many people can be there in one team?",
            content: 'One team can have a maximum of 4 members.'
          },
          {
            title: "Is it free to register for Dronelog?",
            content: 'Yes, it is free to register.'
          },
          {
            title: "How can I make my own team (as a team leader)?",
            content: 'Follow this process: www.techfest.org -> (hover on) Competitions -> Competitions -> Dronelog -> Register -> Fill all your details -> Team -> Create a team -> Use the Registered Mail ID of other participants to add them to your team. They must be already registered before adding them to your team'
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
      const walink1 = "https://chat.whatsapp.com/GNuNQZdMEE7LaSfuz7zxZ9";
      const dslink1 = "https://chat.whatsapp.com/GNuNQZdMEE7LaSfuz7zxZ9";

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
                    <div className={`${styles.abt_rect2} ${styles.whatd_rect2}`}>Revolutionize Inventory Management with Scalable Drone Technology: Achieve Real-Time Accuracy, Automated Scanning, and Autonomous Movement for Efficient Warehousing using drones</div>
                </div>
            </div>
            <div>
                <div onClick={() => handleClickOpen('Structure')} className={`${styles.whatu} ${open === 'Structure' ? styles.whatuOpen : ''}`}>
                    <div className={`${styles.str_rect1} ${styles.whatu_rect1}`}></div>
                    <div className={`${styles.str_rect2} ${styles.whatu_rect2}`}>Structure</div>
                </div>
                <div className={`${styles.whatd} ${open === 'Structure' ? styles.whatdOpen : ''}`}>
                    <div className={`${styles.abt_rect1} ${styles.whatd_rect1}`}></div>
                    <div className={`${styles.abt_rect2} ${styles.whatd_rect2}`}>Abstract Submission: <br />
Participants have to submit a report based on the work done so far and also consistent with the format mentioned in the problem statement. <br /> <br />
Code Submission: <br />
Participants need to submit the Code required for proceeding to further rounds. <br /></div>
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
                Last Date of Registration: <br />
                30th October 2023 <br /> <br />

                AbstractSubmission: <br />
                30th October 2023 <br /> <br />

                Code Submission: <br />
                10th December 2023 <br /> <br />

                Finale Round: <br />
                27th December 2023</div>
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
                      <br/>5. Note that at any point of time the latest information will be that which is on the website, however, registered participants will be informed through mail about any changes
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
                    Sajal Sharma<br/>
                    <div className="col-3 contactMail" onClick={() => window.location.href = `mailto:sajal.techfest@gmail.com`}>sajal.techfest@gmail.com</div>
                    <div className="col-3 contactNum" onClick={() => window.location.href = `tel:8449774393`}>+91 84497 74393</div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Dronelog;
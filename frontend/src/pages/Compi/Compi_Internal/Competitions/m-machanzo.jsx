import React, { useState } from 'react';
import styles from './compi_data.module.css';
import Faq from 'react-faq-component';
import './x.css';

const Machanzo = () => {

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
                content: 'Follow this steps for registration : www.techfest.org > Competitions > Mechanzo League > Explore More -> Register > Fill all your details > You will be registered and now you must either Create a team/Join a team'
              },
              {
                title: "How many people can be there in one team?",
                content: 'One team can have a maximum of 3 members.'
              },
              {
                title: "Is it free to register for Mechanzo League?",
                content: 'Yes, it is free to register.'
              },
              {
                title: "How can I make my own team (as a team leader)?",
                content: 'Follow this process: www.techfest.org -> (hover on) Competitions -> Competitions -> Mechanzo League -> Explore -> Register -> Fill all your details -> Team -> Create a team -> Use the Registered Mail ID of other participants to add them to your team. They must be already registered before adding them to your team'
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
                title: "Can a team have members from different schools?",
                content: 'Yes, students from different schools can form a team.'
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

    return (
        <div className={styles.mWholeData}>
            <div>
                <div onClick={() => handleClickOpen('About')} className={`${styles.whatu} ${open === 'About' ? styles.whatuOpen : ''}`}>
                    <div className={`${styles.abt_rect1} ${styles.whatu_rect1}`}></div>
                    <div className={`${styles.abt_rect2} ${styles.whatu_rect2}`}>About</div>
                </div>
                <div className={`${styles.whatd} ${open === 'About' ? styles.whatdOpen : ''}`}>
                    <div className={`${styles.abt_rect1} ${styles.whatd_rect1}`}></div>
                    <div className={`${styles.abt_rect2} ${styles.whatd_rect2}`}>In this exhilarating competition, the stage is set to show your Creativity through your Robot to demonstrate their prowess in the intricate art of pick and place. The task is deceptively simple yet profoundly challenging - designing, assembling, and programming robots that can skillfully identify, grasp, and relocate objects precisely and efficiently.</div>
                </div>
            </div>
            <div>
                <div onClick={() => handleClickOpen('Structure')} className={`${styles.whatu} ${open === 'Structure' ? styles.whatuOpen : ''}`}>
                    <div className={`${styles.str_rect1} ${styles.whatu_rect1}`}></div>
                    <div className={`${styles.str_rect2} ${styles.whatu_rect2}`}>Structure</div>
                </div>
                <div className={`${styles.whatd} ${open === 'Structure' ? styles.whatdOpen : ''}`}>
                    <div className={`${styles.abt_rect1} ${styles.whatd_rect1}`}></div>
                    <div className={`${styles.abt_rect2} ${styles.whatd_rect2}`}>It will be conducted in 2 categories:
            <br/>Junior: For students from 5th to 8th Standard
            <br/>Senior: For students from 9th to 12th Standard

            <br/><br/>Top 5 teams from each Zonal Qualifier will qualify for the Grand Finale that will be held during Techfest 2023-24 (Only if they score higher than the minimum cut-off score)</div>
                </div>
            </div>
            <div>
                <div onClick={() => handleClickOpen('Timeline')} className={`${styles.whatu} ${open === 'Timeline' ? styles.whatuOpen : ''}`}>
                    <div className={`${styles.time_rect1} ${styles.whatu_rect1}`}></div>
                    <div className={`${styles.time_rect2} ${styles.whatu_rect2}`}>Timeline</div>
                </div>
                <div className={`${styles.whatd} ${open === 'Timeline' ? styles.whatdOpen : ''}`}>
                    <div className={`${styles.abt_rect1} ${styles.whatd_rect1}`}></div>
                    <div className={`${styles.abt_rect2} ${styles.whatd_rect2}`}>Round 1: <br/>
            Zonals Round will be held at Techfest 2023-24 during 27th - 29th December 2023.<br/><br/>
            Round 2:<br/>
            Finale will be held at Techfest 2023-24 during 27th - 29th December 2023.
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
                      <ul>
                        <li>1. Every team has to register online on the official Techfest website for the competition.</li>
                        <li>2. A Team ID will be allocated to the team on registration which shall be used for future references.</li>
                        <li>3. The decision of the organizers or judges shall be treated as final and binding on all.</li>
                        <li>4. No responsibility will be held by Techfest, IIT Bombay for any late, lost or misdirected entries.</li>
                        <li>5. Note that at any point of time the latest information will be that which is on the website. However, registered participants will be informed through mail about any changes.</li>
                        <li>6. All modes of official communication will be through the Techfest e-mail. Participants are advised to keep track of all folders in their e-mail accounts.</li>
                      </ul>
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
                    Gourish Singhal<br/>
              +91 94248 73725<br/>
              gourish@techfest.org
                    </div>
                </div>
            </div></div>
        </div>
    );
}

export default Machanzo;
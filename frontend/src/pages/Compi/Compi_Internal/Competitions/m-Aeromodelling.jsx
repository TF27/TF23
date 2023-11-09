import React, { useState } from 'react';
import styles from './compi_data.module.css';
import Faq from 'react-faq-component';
import Whatsapplink from '../../../../components/whatsapp/link';
import './x.css';


const Aeromodelling = () => {

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
                content: 'Participants should be Signed in before Registering.Then, follow these steps for registration :www.techfest.org -> Competitions > Boeing Aermodelling -> Register -> Fill all your details -> You are registered in that competition. Now you must either Create a team or Join a Team using the registered mail ID.'
              },
              {
                title: "How many stages does the competition have?",
                content: 'The competition is divided into 2 stages, detailed information about both stages can be found in the problem statement.'
              },
              {
                title: "What is the Registered Mail Id of a person?",
                content: 'The Gmail Id which was used to Sign In is the registered mail Id. It is a unique identity of any participant. And will be used in adding team members to a team, joining a pre-existing team, availing accommodation, etc.'
              },
              {
                title: "Is it free to register for Boeing Aermodelling?",
                content: 'Yes, it is free to register.'
              },
              {
                title: "How can I make my own team (as a team leader)?",
                content: 'Follow this process: www.techfest.org -> (hover on) Competitions -> Competitions -> Boeing Aermodelling -> Explore -> Register -> Fill all your details -> Team -> Create a team -> Use the Registered Mail ID of other participants to add them to your team. They must be already registered before adding them to your team'
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
                content: 'Yes, follow these steps to get added to a team. Join team -> Enter your Team ID. You will be added to that team.'
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
      const walink1 = "https://chat.whatsapp.com/GQjNx1VQ3FN6X63x8NRas5";
      const dslink1 = "https://chat.whatsapp.com/GQjNx1VQ3FN6X63x8NRas5";
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
                    <div className={`${styles.abt_rect2} ${styles.whatd_rect2}`}>
                    A competition that revolves around optimizing the performance of an RC plane in terms of maneuver execution time. Your challenge is to design and construct an RC aircraft that excels in swiftly completing a maneuvers.
                    </div>
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
                    <ul>
              <li>
              The competition is divided into two Stages:
              </li> 
              <li>
              Stage 1:<br/>
              Every team must submit their design for the robot, which should also contain a detailed description of the critical components of the design. The submissions which satisfy the specifications given in the problem statement will qualify for the second stage, which will be informed to the teams through the mail. There are no restrictions on design and you can think like an unconventional thinker keeping in mind the constraints given in the problem statement.
              </li>
              <li>
              Stage 2:<br/>
              The teams shortlisted for Stage 2 will compete in a knock-out type round where two teams compete against each other. The 2nd round will be held during Techfest from 27th to 29th December 2023. Details of the round shall be mentioned in the problem statement mailed to those who qualify for the 2nd round.
              </li>

            </ul>
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
                    <li>Last date for registration:<br />
                    10th December, 2023</li>

            <li>Last date for abstract submission <br />
            10th December, 2023</li>

            <li>Abstract result announcement:<br />
            12th December 2023</li>

            <li>IIT Bombay zonal round:<br />
            27th-29th December 2023 </li>
            
            <li>Final at RVCE Bangalore:<br />
            February 2024 </li>
           
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
                    <li>1. Each team would be given two attempts in Qualifier round and two attempts in Payload Round. Best score from both attempts will be considered as a score for each round. 

                    </li>

                    <li>2. The timer will start after 30 seconds of the previous team completing their attempt. The participants need to be prepared in time and launch without delay after entering the take-off zone.

                    </li>
                    <li>3. The teams would lose their turn if they are not ready in time.

                    </li>

                    <li>4. The same aircraft should be used in both the rounds and it should be the same one in the abstract. In case of damages during the competition, teams can repair the same aircraft but are not allowed to use a replacement. The repaired aircraft should be ready in given time.
                        
                    </li>
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
                    Arnav Dutt Sharma<br/>
                    <div className="col-3 contactNum" onClick={() => window.location.href = `tel:8880030000`}>+91 88800 30000</div>
                    <div className="col-3 contactMail" onClick={() => window.location.href = `arnavv.techfest@gmail.com`}>arnavv.techfest@gmail.com</div>
                    </div>
                </div>
            </div>
        </div>
        </div>
        </div>
    );
}

export default Aeromodelling;
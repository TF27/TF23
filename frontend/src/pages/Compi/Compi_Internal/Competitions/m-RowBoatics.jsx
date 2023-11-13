import React, { useState } from 'react';
import styles from './compi_data.module.css';
import Faq from 'react-faq-component';
import Whatsapplink from '../../../../components/whatsapp/link';
import './x.css';

const RowBoatics = () => {

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
                title: "Why should I participate in RowBoatics?",
                content: 'The competition provides its participants with a reasonable grasp of important mechanical and programming principles that will take them in the direction of being able to design and construct their boat. Participants work together to design and build a boat that can navigate on an obstacle-filled track and complete the race task before the other boat'
              },
              {
                title: "How many stages does the competition have?",
                content: 'The competition is divided into 2 stages, detailed information about both stages can be found in the problem statement.'
              },
              {
                title: "How to register?",
                content: 'Participants should be Signed in before Registering.Then, follow these steps for registration :www.techfest.org -> Competitions > RowBoatics -> Register -> Fill all your details -> You are registered in that competition. Now you must either Create a team or Join a Team using the registered mail ID.'
              },
              {
                title: "What is the Registered Mail Id of a person?",
                content: 'The Gmail Id which was used to Sign In is the registered mail Id. It is a unique identity of any participant. And will be used in adding team members to a team, joining a pre-existing team, availing accommodation, etc.'
              },
              {
                title: "Is it free to register for RowBoatics?",
                content: 'Yes, it is free to register.'
              },
              {
                title: "How can I make my own team (as a team leader)?",
                content: 'Follow this process: www.techfest.org -> (hover on) Competitions -> Competitions -> RowBoatics -> Explore -> Register -> Fill all your details -> Team -> Create a team -> Use the Registered Mail ID of other participants to add them to your team. They must be already registered before adding them to your team'
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
      const walink1 = "https://chat.whatsapp.com/HlSkcSNFJsFJCWKBRoE6e0";
      const dslink1 = "https://chat.whatsapp.com/HlSkcSNFJsFJCWKBRoE6e0";
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
                    <div className={`${styles.abt_rect2} ${styles.whatd_rect2}`}>Developing a MERN stack-focused code assistant tool that understands and caters to the specific needs of MongoDB, Express.js, React.js, and Node.js developers to enhance their productivity and efficiency.</div>
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
            30th November 2023</li>

            <li>Last date for abstract submission <br />
            30th November 2023</li>

            <li>Results and shortlisting of teams for Stage 2: <br />
            1st December 2023</li>

            <li>Final round - Stage 2 competition:<br />
            27th-29th December 2023 </li>
           
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
                    <li>Abstract should include all necessary projection images of the boat design along with a detailed description of the critical components used and abilities of boat.<br/>
              Although there is no cost restriction but estimation of the total cost of the device with all its components should be mentioned in final abstract.
              </li>
              <li>The Abstract file must be uploaded in the pdf format with file name TeamID.pdf in the google form (link given in the problem statement) with all other necessary details, before the deadline. <br/>
              The last date to fill the form and uploading the abstract file is 30th Nov, 2023. No other mode of submission will be considered unless any technical or genuine issue with the form.
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
                    Ank Kumar Gupta<br/>
                    <div className="col-3 contactNum" onClick={() => window.location.href = `tel:6306061251`}>+91 63060 61251</div>
                    <div className="col-3 contactMail" onClick={() => window.location.href = `ank.techfest@gmail.com`}>ank.techfest@gmail.com</div>
                    </div>
                </div>
            </div>
        </div>
        </div>
        </div>
    );
}

export default RowBoatics;
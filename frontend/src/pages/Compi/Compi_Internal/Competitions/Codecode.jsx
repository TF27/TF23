import React, {useState} from 'react';
import styles from './compi_data.module.css';
import Faq from 'react-faq-component';
import './x.css';
import Whatsapplink from '../../../../components/whatsapp/link';

const Codecode = () => {
    const [activeCity, setActiveCity] = useState('About');
    const [activeIndex, setActiveIndex] = useState(null);
    const openCity = (cityName) => {
      setActiveCity(cityName);
    }

      const data = {
        rows: [
          {
            title: "Why should I participate in the CoDecode?",
            content: "The competition provides the participants with real life problems which they have to solve through code using their programming and algorithmic skills. Participants work together to solve the problems in a given time"
          },
          {
            title: "How to register?",
            content: 'Follow this steps for registration : www.techfest.org > Competitions > CoDecode > Explore More -> Register > Fill all your details > You will be registered and now you must either Create a team/Join a team'
          },
          {
            title: "How many people can be there in one team?",
            content: 'One team can have a maximum of 2 members.'
          },
          {
            title: "Is it free to register for CoDecode?",
            content: 'Yes, it is free to register.'
          },
          {
            title: "How can I make my own team (as a team leader)?",
            content: 'Follow this process: www.techfest.org -> (hover on) Competitions -> Competitions -> CozmoClench -> Register -> Fill all your details -> Team -> Create a team -> Use the Registered Mail ID of other participants to add them to your team. They must be already registered before adding them to your team'
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
          {
            title: "Will any charging facility for our equipment be provided at the venue?",
            content: 'Charging points for laptops would be provided in case of special requests. There might be a limited number of charging points, so all participants are advised to charge their devices properly before the competition.'
          },
          {
            title: "How many stages does the competition have?",
            content: 'Two, namely zonal qualifier and finale. Top five teams from Each Zonal Qualifier will qualify for the Grand Finale at Techfest 2023-24.'
          },
          {
            title: "Do we need to carry laptops?",
            content: 'Yes, each team must have at least one laptop with them.'
          },
          {
            title: "Can we use online compilers for our code compilation?",
            content: 'Online Compilers are strictly not allowed. Any team found using them, will be disqualified from the competition.'
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
    const walink1 = "https://chat.whatsapp.com/GVnfSWLpVsz8n2L8EITuS5";
    const dslink1 = "https://chat.whatsapp.com/GVnfSWLpVsz8n2L8EITuS5";
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
            Teams are required to unravel real-life issues through coding. Participants should tackle the most significant conceivable questions in indicated time interim in the most proficient way. The programming aptitudes of members would be tested in this competition.   
              </div>
            </div>
          </div>
          <div id="Structure" className={`${styles.info} ${activeCity === 'Structure' ? styles.show : styles.hide}`}>
            <div className={styles.info_tab}>
            <div className={styles.info_data}>
              Description of Competition:<br/>
              1. It is a 3-hour coding contest.<br/>
              2. Teams will use coding to solve extremely tricky mathematical problems that can't be solved by using a calculator.<br/>
              3. Problems will revolve around mathematical intricacies, statistical predictions, physics, seepage, real-life scenarios, and much more.<br/>

              Scoring:<br/>
              The exact marking scheme will be disclosed later. There would be some tie-breaker questions in the paper in case of a tie. The person with more correct answers to the tie-breaker questions would be given a higher position.<br/>

              Eligibility:<br/>
              All students with a valid identity card from their respective educational institutes are eligible to participate in the event.<br/>

              Programming Languages Allowed:<br/>
              1. C<br/>
              2. C++<br/>
              3. Java<br/>
              4. Python<br/>
              5. Perl<br/>

              Example of a problem:<br/>
              Given n numbers such that their sum is not divisible by 4, remove k numbers such that after every removal, the sum of the remaining numbers is not divisible by 4. Find the maximal sum of n-k remaining numbers.<br/>
              Solution:<br/>
              Divide the initial n numbers into four separate arrays corresponding to the 4 different remainders they leave when divided by 4. Now, sort them. Let's call these arrays a0, a1, a2, and a3. Now, say the sum of n numbers is divisible by 4.<br/>
              f(k, a0, a1, a2, a3) = max {'{f(k-1, a0, a1+1,a2,a3), f(k-1,a0,a1,a2+1,a3), f(k-1,a0,a1,a2,a3+1)}'}<br/>
              If the sum upon dividing by 4 gives a remainder of 1, we would have considered the arrays a0, a2 and a3.<br/>
              Test case: n = 10 {'{44, 12, 45, 23, 22, 34, 47, 37, 50, 31}'}, Sum = 345<br/>
              Answers:<br/>
              k = 1, 333<br/>
              k = 2, 311<br/>
              k = 3, 279<br/>
              k = 4, 257<br/>
              k = 5, 223<br/>
              k = 6, 186<br/>
              k = 7, 142<br/>
              k = 8, 97<br/>
              k = 9, 50<br/>
              k = 10, 0 <br/>
              </div>
            </div>
          </div>
          <div id="Timeline" className={`${styles.info} ${activeCity === 'Timeline' ? styles.show : styles.hide}`}>
            <div className={styles.info_tab}>
            <div className={styles.info_data}>
            Venue: IIT Bombay
            Wildcard Round: 28th December 2023<br/>
            Final Round: 29th December 2023 
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
            1. Every team has to register online on the official Techfest website for the competition.
            <br/>2. A Team ID will be allocated to the team on registration which shall be used for future references
            <br/>3. Participants have to bring their own laptops during the competition
            <br/>4. Teams will be responsible for their devices. It is advised that laptops should be charged before the competition
            <br/>5. Use of online compilers and the internet is not allowed, Participants have to come with offline compilers pre-installed on their laptops
            <br/>6. Mobile phones are not allowed during the competition
            <br/>7. The organisers reserve the right to change any or all of the above rules as they deem fit; Change in rules, if any, will be highlighted on the website and notified to the registered teams
            <br/>8. Online Compiler is strictly not allowed, Any team found using it will be disqualified from the competition
              </div>
            </div>
          </div>
          <div id="Contact" className={`${styles.info} ${activeCity === 'Contact' ? styles.show : styles.hide}`}>
            <div className={styles.info_tab}>
              <div className={styles.info_data}>
              Mrutyunjaya Sahu<br/>
              +91 96923 76527<br/>
              sahumrutyunjaya.techfest@gmail.com
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
 
export default Codecode;
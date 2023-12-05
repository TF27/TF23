import React, { useState } from "react";
import styles from "./compi_data.module.css";
import Faq from "react-faq-component";
import "./x.css";
import Whatsapplink from "../../../../components/whatsapp/link";

const Datamatics = () => {
  const [activeCity, setActiveCity] = useState("About");
  const [activeIndex, setActiveIndex] = useState(null);
  const openCity = (cityName) => {
    setActiveCity(cityName);
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

  const data = {
    rows: [
      {
        title: "Why should I participate in Datamatics Hackathon?",
        content:
          "The competition provides the participants with real life problem solving. In the final round, participants work together to solve the problems in a specific time.",
      },
      {
        title: "How many stages does the competition have?",
        content:
          "The competition is divided into 2 stages, detailed information about both stages can be found in the problem statement.",
      },
      {
        title: "How to register?",
        content:
          "Participants should be Signed in before Registering.Then, follow these steps for registration :www.techfest.org -> Competitions > Datamatics Hackathon -> Register -> Fill all your details -> You are registered in that competition. Now you must either Create a team or Join a Team using the registered mail ID.",
      },
      {
        title: "What is the Registered Mail Id of a person?",
        content:
          "The Gmail Id which was used to Sign In is the registered mail Id. It is a unique identity of any participant. And will be used in adding team members to a team, joining a pre-existing team, availing accommodation, etc.",
      },
      {
        title: "Is it free to register for Datamatics Hackathon?",
        content: "Yes, it is free to register.",
      },
      {
        title: "How can I make my own team (as a team leader)?",
        content:
          "Follow this process: www.techfest.org -> (hover on) Competitions -> Competitions -> Datamatics Hackathon -> Explore -> Register -> Fill all your details -> Team -> Create a team -> Use the Registered Mail ID of other participants to add them to your team. They must be already registered before adding them to your team",
      },
      {
        title: "How many people can be there in one team?",
        content: "One team can have maximum of 2 members.",
      },
      {
        title: "Who can add members in a team?",
        content:
          "Only the team leader has the right to add members in a team. However, others can join an existing team by clicking on the Join Team button.",
      },
      {
        title: "Can I add myself to an existing team?",
        content:
          "Yes, follow these steps to get added to a team. Join team -> Enter Team-Id. You will be added to that team.",
      },
      {
        title: "How can I remove members from my team (as a team leader)?",
        content:
          "You cannot remove a team member once added, you can dissolve the team and form a new one.",
      },
      {
        title: "What happens when the team leader leaves their team?",
        content:
          "If the team leader leaves their team, the team will get dissolved. The other members of the team will then have to create a new team.",
      },
      {
        title:
          "Is it necessary for the team leader to add all the team members at once?",
        content:
          "No, it is not necessary. The team leader can add one member or none, only once, which is while creating the team, but if the team is not full and they want to add more members afterwards, then members (to be added) will have to use the Join Team button to join the team.",
      },
      {
        title: "How can a team member (other than the leader) leave the team?",
        content:
          "Click on the Leave Team button and you will be removed from the registered team.",
      },
      {
        title: "Who can delete a team?",
        content:
          "Only the team leader can delete the team using the Dissolve Team button.",
      },
      {
        title: "Can a team have members from different colleges?",
        content: "Yes, students from different colleges can form a team.",
      },
      {
        title: "Can we change the team leader of our team?",
        content:
          "No, you can’t change the team leader of your team. But, you can dissolve the team and form a new one.",
      },
      {
        title: "Can I register for more than one competition?",
        content:
          "Yes, you can participate in more than one competition. However, it is recommended to focus on only one competition as there may be some chances of slot clash.",
      },
      {
        title: "How many teams can I join?",
        content:
          "You can join only one team in one competition. Participating in more than one team will get you DISQUALIFIED.",
      },
    ],
  };
  const styles1 = {
    bgColor: "none",
    titleTextColor: "white",
    rowTitleColor: "white",
    arrowColor: "white",
    rowContentColor: "white",
    marginBottom: "20px",
    maxWidth: "80%",
    margin: "auto",
    rowContentMarginBottom: "0",
  };

  const lol = {
    objectFit: "scale-down",
    paddingRight: "8px",
  };
  const walink1 = "https://chat.whatsapp.com/FiTAUOleLl1ALx8Dxwn0on";
  const dslink1 = "https://chat.whatsapp.com/FiTAUOleLl1ALx8Dxwn0on";

  return (
    <div>
      <div className={styles.impdata}>
        <div className={styles.info_head}>
          {/* <div className={styles.bar_extra}></div> */}
          <div className={styles.bar_oii}>
            <div
              className={`${styles.bar} ${
                activeCity === "About" ? styles.baractive : ""
              }`}
            ></div>
            <div
              className={`${styles.bar_item} ${
                activeCity === "About" ? styles.active : ""
              }`}
              onClick={() => openCity("About")}
            >
              About
            </div>
          </div>
          <div className={styles.bar_oii}>
            <div
              className={`${styles.bar} ${
                activeCity === "Structure" ? styles.baractive : ""
              }`}
            ></div>
            <div
              className={`${styles.bar_item} ${
                activeCity === "Structure" ? styles.active : ""
              }`}
              onClick={() => openCity("Structure")}
            >
              Structure
            </div>
          </div>
          <div className={styles.bar_oii}>
            <div
              className={`${styles.bar} ${
                activeCity === "Timeline" ? styles.baractive : ""
              }`}
            ></div>
            <div
              className={`${styles.bar_item} ${
                activeCity === "Timeline" ? styles.active : ""
              }`}
              onClick={() => openCity("Timeline")}
            >
              Timeline
            </div>
          </div>
          <div className={styles.bar_oii}>
            <div
              className={`${styles.bar} ${
                activeCity === "FAQs" ? styles.baractive : ""
              }`}
            ></div>
            <div
              className={`${styles.bar_item} ${
                activeCity === "FAQs" ? styles.active : ""
              }`}
              onClick={() => openCity("FAQs")}
            >
              FAQs
            </div>
          </div>
          <div className={styles.bar_oii}>
            <div
              className={`${styles.bar} ${
                activeCity === "Rules" ? styles.baractive : ""
              }`}
            ></div>
            <div
              className={`${styles.bar_item} ${
                activeCity === "Rules" ? styles.active : ""
              }`}
              onClick={() => openCity("Rules")}
            >
              Rules
            </div>
          </div>
          <div className={styles.bar_oii}>
            <div
              className={`${styles.bar} ${
                activeCity === "Contact" ? styles.baractive : ""
              }`}
            ></div>
            <div
              className={`${styles.bar_item} ${
                activeCity === "Contact" ? styles.active : ""
              }`}
              onClick={() => openCity("Contact")}
            >
              Contact
            </div>
          </div>
          {/* <div className={styles.bar_extra}></div> */}
        </div>
        <div className={styles.information}>
          <div
            id="About"
            className={`${styles.info} ${
              activeCity === "About" ? styles.show : styles.hide
            }`}
          >
            <div className={styles.info_tab}>
              <div className={styles.info_data}>
              Improve productivity and accuracy by intelligently automating tasks, processes and documents with TruBot RPA and TruCap+ IDP.
              </div>
            </div>
          </div>
          <div
            id="Structure"
            className={`${styles.info} ${
              activeCity === "Structure" ? styles.show : styles.hide
            }`}
          >
            <div className={styles.info_tab}>
              <div className={styles.info_data}>
              <ul>
                <li>
                  Round 1: <br />
                  In this round, the teams will have to solve the Round 1 Problem Statment provided and complete the quiz to get shortlisted for round 2. 
                </li>
                <li>
                  Final round: <br />
                  This problem statement will be provided with the selected participants and selected finalists will compete in an offline hackathon at IIT Bombay campus. 
                </li>
              </ul>
              </div>
            </div>
            </div>
            <div
              id="Timeline"
              className={`${styles.info} ${
                activeCity === "Timeline" ? styles.show : styles.hide
              }`}
            >
              <div className={styles.info_tab}>
                <div className={styles.info_data}>
                  <li>
                    Last date for registration and completing quiz:
                    <br />
                    10th December, 2023
                  </li>

                  {/* <li>
                    Last date for abstract submission <br />
                    10th December, 2023
                  </li> */}

                  <li>
                    Round 1 result announcement:
                    <br />
                    11th December 2023
                  </li>

                  <li>
                  Final Round at IIT Bombay Campus:
                    <br />
                    27th-29th December 2023
                  </li>

                </div>
              </div>
            </div>
            <div
              id="FAQs"
              className={`${styles.info} ${
                activeCity === "FAQs" ? styles.show : styles.hide
              }`}
            >
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
            <div
              id="Rules"
              className={`${styles.info} ${
                activeCity === "Rules" ? styles.show : styles.hide
              }`}
            >
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
            <div
              id="Contact"
              className={`${styles.info} ${
                activeCity === "Contact" ? styles.show : styles.hide
              }`}
            >
              <div className={styles.info_tab}>
                <div className={styles.info_data}>
                  Mahak Kalra
                  <br />
                  <div
                    className=""
                    onClick={() => (window.location.href = `tel:8000657709`)}
                  >
                    +91 80006 57709
                  </div>
                  <div
                    className=""
                    onClick={() =>
                      (window.location.href = `mahak.techfest@gmail.com`)
                    }
                  >
                    mahak.techfest@gmail.com
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.grouplink}>
          <div className={styles.wabutton}>
            <Whatsapplink walink={walink1} dslink={dslink1} target="_blank" />
          </div>
        </div>
      </div>
  );
};

export default Datamatics;

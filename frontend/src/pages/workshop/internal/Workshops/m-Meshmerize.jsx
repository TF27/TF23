import React, { useState } from "react";
import styles from "./workshop_data.module.css";
import Faq from "react-faq-component";
import Whatsapplink from "../../../../components/whatsapp/link";
import "./x.css";

const Meshmerize = () => {
  const [open, setOpen] = useState(false);

  const handleClickOpen = (openX) => {
    if (openX === open) {
      setOpen(false);
    } else {
      setOpen(openX);
    }
  };

  const [openFaq, setOpenFaq] = useState(false);

  const OpenFaq = (index) => {
    setOpenFaq((prevOpenFaq) => (prevOpenFaq === index ? null : index));
  };


  const styles1 = {
    bgColor: "none",
    titleTextColor: "#fff",
    rowTitleColor: "#fff",
    arrowColor: "#fff",
    rowContentColor: "#fff",
    marginBottom: "20px",
    maxWidth: "80%",
    margin: "auto",
    rowContentMarginBottom: "0",
  };
  const walink1 = "https://chat.whatsapp.com/CYpCpfezIEf09EtiY591Y5";
  const dslink1 = "https://chat.whatsapp.com/CYpCpfezIEf09EtiY591Y5";

  return (
    <div className={styles.mWholeData}>
      <div>
        <div
          onClick={() => handleClickOpen("About")}
          className={`${styles.whatu} ${
            open === "About" ? styles.whatuOpen : ""
          }`}
        >
          <div className={`${styles.abt_rect1} ${styles.whatu_rect1}`}></div>
          <div className={`${styles.abt_rect2} ${styles.whatu_rect2}`}>
            About
          </div>
        </div>
        <div
          className={`${styles.whatd} ${
            open === "About" ? styles.whatdOpen : ""
          }`}
        >
          <div className={`${styles.abt_rect1} ${styles.whatd_rect1}`}></div>
          <div className={`${styles.abt_rect2} ${styles.whatd_rect2}`}>
            Teams must build a line follower bot that can keep track of
            directions while going through a maze. It must analyze the path in
            the Dry Run and use this information in the Actual Run to traverse
            the maze to reach the ending point in the minimum possible time.
          </div>
        </div>
      </div>
      <div>
        <div
          onClick={() => handleClickOpen("Structure")}
          className={`${styles.whatu} ${
            open === "Structure" ? styles.whatuOpen : ""
          }`}
        >
          <div className={`${styles.str_rect1} ${styles.whatu_rect1}`}></div>
          <div className={`${styles.str_rect2} ${styles.whatu_rect2}`}>
            Structure
          </div>
        </div>
        <div
          className={`${styles.whatd} ${
            open === "Structure" ? styles.whatdOpen : ""
          }`}
        >
          <div className={`${styles.abt_rect1} ${styles.whatd_rect1}`}></div>
          <div className={`${styles.abt_rect2} ${styles.whatd_rect2}`}>
            Top 5 teams from each Zonal Qualifier will qualify for the Grand
            Finale that will be held during Techfest 2022-23 (Only if they score
            higher than the minimum cut-off score)
          </div>
        </div>
      </div>
      <div>
        <div
          onClick={() => handleClickOpen("Rules")}
          className={`${styles.whatu} ${
            open === "Rules" ? styles.whatuOpen : ""
          }`}
        >
          <div className={`${styles.rule_rect1} ${styles.whatu_rect1}`}></div>
          <div className={`${styles.rule_rect2} ${styles.whatu_rect2}`}>
            Rules
          </div>
        </div>
        <div
          className={`${styles.whatd} ${
            open === "Rules" ? styles.whatdOpen : ""
          }`}
        >
          <div className={`${styles.abt_rect1} ${styles.whatd_rect1}`}></div>
          <div className={`${styles.abt_rect2} ${styles.whatd_rect2}`}>
            1. Every team has to register online on the official Techfest
            website for the competition
            <br />
            2. A Team ID will be allocated to the team on registration which
            shall be used for future references
            <br />
            3. The decision of the organizers or judges shall be treated as
            final and binding on all
            <br />
            4. No responsibility will be held by Techfest, IIT Bombay for any
            late, lost or misdirected entries
            <br />
            5. Note that at any point of time the latest information will be
            that which is on the website; However, registered participants will
            be informed through mail about any changes
            <br />
            6. All modes of official communication will be through the Techfest
            e-mail, participants are advised to keep track of all folders in
            their e-mail accounts
          </div>
        </div>
      </div>
      <div>
        <div
          onClick={() => handleClickOpen("Contact")}
          className={`${styles.whatu} ${
            open === "Contact" ? styles.whatuOpen : ""
          }`}
        >
          <div className={`${styles.ctc_rect1} ${styles.whatu_rect1}`}></div>
          <div className={`${styles.ctc_rect2} ${styles.whatu_rect2}`}>
            Contact
          </div>
        </div>
        <div
          className={`${styles.whatd} ${
            open === "Contact" ? styles.whatdOpen : ""
          }`}
        >
          <div className={`${styles.abt_rect1} ${styles.whatd_rect1}`}></div>
          <div className={`${styles.abt_rect2} ${styles.whatd_rect2}`}>
            Rishu Bhadani
            <div
              className="col-3 contactNum"
              onClick={() => (window.location.href = `tel:8709397909`)}
            >
              +91 87093 97909
            </div>
            <div
              className="col-3 contactMail"
              onClick={() =>
                (window.location.href = `mailto:rishu.techfest.iitb@gmail.com`)
              }
            >
              rishu.techfest.iitb@gmail.com
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Meshmerize;

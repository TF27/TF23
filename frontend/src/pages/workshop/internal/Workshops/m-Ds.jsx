import React, { useState } from "react";
import styles from "./workshop_data.module.css";
import Faq from "react-faq-component";
import Whatsapplink from "../../../../components/whatsapp/link";
import "./x.css";

const Ds = () => {
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
  // const walink1 = "https://chat.whatsapp.com/CYpCpfezIEf09EtiY591Y5";
  // const dslink1 = "https://chat.whatsapp.com/CYpCpfezIEf09EtiY591Y5";

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
            Details
          </div>
        </div>
        <div
          className={`${styles.whatd} ${
            open === "About" ? styles.whatdOpen : ""
          }`}
        >
          <div className={`${styles.abt_rect1} ${styles.whatd_rect1}`}></div>
          <div className={`${styles.abt_rect2} ${styles.whatd_rect2}`}>
          
          Date: 26th-27th December <br /> <br />
          Duration: 12-14 hours <br /> <br />
          Venue: IIT Bombay <br />
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
            Discounts
          </div>
        </div>
        <div
          className={`${styles.whatd} ${
            open === "Structure" ? styles.whatdOpen : ""
          }`}
        >
          <div className={`${styles.abt_rect1} ${styles.whatd_rect1}`}></div>
          <div className={`${styles.abt_rect2} ${styles.whatd_rect2}`}>
          Register and Pay before 12th November 2023 to avail the workshop at the early bird price <br /><br />
            Group Discounts: <br/>
            Register as a group to avail the following discounts: <br/>
            2 members Rs. 150 off <br/>
            3 members Rs. 300 off <br/>
            4 members Rs. 500 off <br/>
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
          1.<b>Eligibility:</b> Participants will have to register individually for each workshop. <br/>
            2. <b>Payment Instructions:</b> While paying the fees, login with the same credentials with which you had registered on the Techfest Website. Please enter the data correctly for us to process your payment information properly. <br/>
            3. <b>Prerequisites:</b> A laptop/PC with Microsoft Windows (7 or later & Minimum 4GB RAM), configuration Internet Connectivity (Typically to be able to do video call / conferencing), Notepad & Pen. <br/>
            4. <b>Certificate Criterion:</b> Participants should be present in all the sessions. Failing this, no certificate will be awarded to the participant. Certificate of Training from Techfest, IIT Bombay will be given to all the participants.<br/>
            <br />No Refunds will be entertained <br />
            **Limited number of seats <br/>
            **If the Workshop gets canceled, all the participants will be given a full refund, irrespective of the Deadline. <br />
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
            Mankirat Chawla
            <div
              className="contactNum"
              onClick={() => (window.location.href = `tel:9996437175`)}
            >
              +91 99964 37175
            </div>
            <div
              className="contactMail"
              onClick={() =>
                (window.location.href = `mailto:mankirat@techfest.org`)
              }
            >
              mankirat@techfest.org
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Ds;
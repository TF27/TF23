import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import { UserAuth } from "../../../contexts/AuthContext";
import styles from "./reg.module.css";
import bgimg from "./../img/exp_bg.png";

const WorkReg = () => {
  axios.defaults.xsrfCookieName = "csrftoken";
  axios.defaults.xsrfHeaderName = "X-CSRFToken";

  const [romeo, setRegsitering] = useState(false);
  const { cardName } = useParams();
  const { user } = UserAuth();
  const navigate = useNavigate();

  
  const [formData, setFormData] = useState({
    workshop: cardName,
    name: user ? user.displayName : "",
    email: user ? user.email : "",
    phoneno: "",
    city: "",
    gender: "",
    pincode: "",
    ca_referral: "",
    sexy_word: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // const handleFocus = (e) => {
  //   const label = e.target.previousSibling;
  //   if (romeo) {
  //   } else {
  //     if (label) {
  //       label.classList.add(styles.floatingLabel);
  //     }
  //   }
  // };

  // const handleBlur = (e) => {
  //   const label = e.target.previousSibling;
  //   if (romeo) {
  //   } else {
  //     if (label && e.target.value === "") {
  //       label.classList.remove(styles.floatingLabel);
  //     }
  //   }
  // };
  // function checkInputValues() {
  //   const inputs = document.querySelectorAll("input");

  //   inputs.forEach((input) => {
  //     handleFocus({ target: input });
  //     handleBlur({ target: input });
  //   });
  // }
  // setInterval(checkInputValues, 100);
  let paynow;
  if (cardName ==='bio analytics'){
    paynow = 'https://www.meraevents.com/event/bio-analytics-workshop-by-techfest-iit-bombay?ucode=organizer'
  } else if (cardName==='java'){
    paynow = 'https://www.meraevents.com/event/java-workshop-at-iit-bombay?ucode=organizer'
  } else if (cardName==='crypto trading by wazirX'){
    paynow = 'https://www.meraevents.com/event/iit-bombay-crypto-trading-workshop-at-techfest?ucode=organizer'
  } else if (cardName==='cloud computing by amazon'){
    paynow = 'https://www.meraevents.com/event/iit-bombay-amazon-cloud-computing-workshop-at-techfest?ucode=organizer'
  } else if (cardName==='web development'){
    paynow = 'https://www.meraevents.com/event/iit-bombay-web-dev-workshop-at-techfest?ucode=organizer'
  } else if (cardName==='blockchain'){
    paynow = 'https://www.meraevents.com/event/iit-bombay-blockchain-workshop-at-techfest?ucode=organizer'
  } else if (cardName==='machine learning'){
    paynow = 'https://www.meraevents.com/event/iit-bombay-machine-learning-workshop-at-techfest?ucode=organizer'
  } else if (cardName==='arduino'){
    paynow = 'https://www.meraevents.com/event/iit-bombay-arduino-workshop-at-techfest-copy?ucode=organizer'
  } else if (cardName==='python'){
    paynow = 'https://www.meraevents.com/event/iit-bombay-pyhton-workshop-at-techfest-copy?ucode=organizer'
  } else if (cardName==='android development'){
    paynow = 'https://www.meraevents.com/event/iit-bombay-android-workshop-at-techfest?ucode=organizer'
  } else if (cardName==='cybersecurity'){
    paynow = 'https://www.meraevents.com/event/iit-bombay-cybersecurity-workshop-at-iit-bombay?ucode=organizer'
  } else if (cardName==='digital marketing'){
    paynow = 'https://www.meraevents.com/event/iit-bombay-digital-marketing-workshop-at-techfest?ucode=organizer'
  } else if (cardName==='artificial intelligence'){
    paynow = 'https://www.meraevents.com/event/iit-bombay-artificial-intelligence-workshop-at-techfest?ucode=organizer'
  } else if (cardName==='game development'){
    paynow = 'https://www.meraevents.com/event/game-development-workshop-at-iit-bombay?ucode=organizer'
  } else if (cardName==='ethical hacking'){
    paynow = 'https://www.meraevents.com/event/iit-bombay-ethical-hacking-workshop-at-techfest?ucode=organizer'
  } else if (cardName==='data analytics'){
    paynow = 'https://www.meraevents.com/event/iit-bombay-data-analytics-workshop-at-techfest-copy?ucode=organizer'
  } else if (cardName==='solarizer'){
    paynow = 'https://www.meraevents.com/event/iit-bombay-solarizer-workshop-at-techfest?ucode=organizer'
  } else if (cardName==='data to aI by google'){
    paynow = 'https://www.meraevents.com/event/iit-bombay-data-to-ai-workshop-at-techfest?ucode=organizer'
  } else if (cardName==='electric vehicles'){
    paynow = 'https://www.meraevents.com/event/iit-bombay-electric-vehicles-workshop-at-techfest?ucode=organizer'
  } else if (cardName==='6th sense robotics'){
    paynow = 'https://www.meraevents.com/event/iit-bombay-6th-sense-robotics-workshop-at-techfest-copy?ucode=organizer'
  } else if (cardName==='gesture robotics'){
    paynow = 'https://www.meraevents.com/event/iit-bombay-gesture-robotics-workshop-at-techfest?ucode=organizer'
  } else if (cardName==='chatgpt (prompt engineering)'){
    paynow = 'https://www.meraevents.com/event/iit-bombay-chatgpt-prompt-engineering-workshop?ucode=organizer'
  } else if (cardName==='web 3.0'){
    paynow = 'https://www.meraevents.com/event/iit-bombay-web-3-0-workshop-at-techfest?ucode=organizer'
  } else if (cardName==='quadcopter (slot 2)'){
    paynow = 'https://www.meraevents.com/event/iit-bombay-quadcopter-workshop-at-techfest?ucode=organizer'
  } else if (cardName==='uI uX design'){
    paynow = 'https://www.meraevents.com/event/ui-ux-design-workshop-at-iit-bombay?ucode=organizer'
  } else if (cardName==='ethical hacking (slot 2)'){
    paynow = 'https://www.meraevents.com/event/iit-bombay-ethical-hacking-workshop-at-techfest?ucode=organizer'
  }
 



  const handleSubmit = (event) => {
    setRegsitering(true);
    event.preventDefault();
    // console.log(formData);
    const sexyWord = `${formData.workshop}15Novlolol${formData.email}or19Nov${formData.phoneno}`;
    const updatedFormData = { ...formData, sexy_word: sexyWord };
    axios
      .post("/api/workshop_reg/", updatedFormData)
      .then((response) => {
        alert("Registered succesfully!!");
        window.open(paynow, '_blank');
        navigate(`/workshops/${cardName}`);
      })
      .catch((error) => {
        console.error("Error:", error);
        setRegsitering(false);
        // Handle the error
      });
  };

  const fixbg = {
    backgroundImage: `url(${bgimg})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "center",
    height: "100vh",
    position: "fixed",
    width: "100%",
    zIndex: "-1",
    top: "0",
    backgroundAttachment: "fixed",
  };
  return (
    <>
    <div className={styles.compiReg}>
      <div style={fixbg} />
      <div className={styles.bgitis}>
        {user ? (
        <div className={styles.overlay}>
          <div className={styles.reg_head}>
            <div>
              <img src={user?.photoURL} alt="User" />
            </div>
            <div className={styles.head_n}>
              <div>
                <h2>{user?.displayName}</h2>
              </div>
              <hr></hr>
              <div>Every Field is Compulsory</div>
            </div>
          </div>
          <div>
            <form onSubmit={handleSubmit} autoComplete="off">
              <div className={styles.regFormContainer}>
                <div
                  className={styles.inputWrapper}
                  // style={{ display: "none" }}
                >
                  <label
                    className={`${styles.floatingLabel} ${styles.formLabel}`}
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={user.displayName}
                    onChange={handleChange}
                    className={styles.formInput}
                    disabled
                    autoComplete="off"
                  />
                </div>
                <div className={`row ${styles.multiWrapper}`}>
                  <div className={`col-md-6 ${styles.inputWrapper}`}>
                    <label
                      className={`${styles.floatingLabel} ${styles.formLabel}`}
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={user.email}
                      onChange={handleChange}
                      className={styles.formInput}
                      disabled
                      autoComplete="off"
                    />
                  </div>
                  <div className={`col-md-6 ${styles.inputWrapper}`}>
                    <label
                      className={`${styles.floatingLabel} ${styles.formLabel}`}
                    >
                      Phone No.
                    </label>
                    <input
                      type="number"
                      name="phoneno"
                      value={formData.phoneno}
                      onChange={handleChange}
                      className={styles.formInput}
                      autoComplete="off"
                      maxLength={6}
                      required
                    />
                  </div>
                </div>
                <div className={`row ${styles.multiWrapper}`}>
                  <div className={`col-md-6 ${styles.inputWrapper}`}>
                    <label
                      className={`${styles.floatingLabel} ${styles.formLabel}`}
                    >
                      Gender
                    </label>
                    <select
                      name="gender"
                      value={formData.gender}
                      onChange={handleChange}
                      className={styles.formInput}
                      required
                    >
                      <option
                        value=""
                        style={{ display: "none" }}
                        className={styles.genderOps}
                      >
                        Select
                      </option>
                      <option value="M" className={styles.genderOps}>
                        Male
                      </option>
                      <option value="F" className={styles.genderOps}>
                        Female
                      </option>
                      <option value="O" className={styles.genderOps}>
                        Other
                      </option>
                    </select>
                  </div>
                  <div className={`col-md-6 ${styles.inputWrapper}`}>
                    <label
                      className={`${styles.floatingLabel} ${styles.formLabel}`}
                    >
                      City
                    </label>
                    <input
                      type="text"
                      name="city"
                      value={formData.city}
                      onChange={handleChange}
                      className={styles.formInput}
                      autoComplete="off"
                      required
                    />
                  </div>
                </div>
                <div className={`row ${styles.multiWrapper}`}>
                  <div className={`col-md-6 ${styles.inputWrapper}`}>
                    <label
                      className={`${styles.floatingLabel} ${styles.formLabel}`}
                    >
                      Pincode
                    </label>
                    <input
                      type="number"
                      name="pincode"
                      value={formData.pincode}
                      onChange={handleChange}
                      className={styles.formInput}
                      required
                      autoComplete="off"
                    />
                  </div>
                  <div className={`col-md-6 ${styles.inputWrapper}`}>
                    <label
                      className={`${styles.floatingLabel} ${styles.formLabel}`}
                    >
                      CA Referral(If any)
                    </label>
                    <input
                      type="text"
                      name="ca_referral"
                      value={formData.ca_referral}
                      onChange={handleChange}
                      className={styles.formInput}
                      autoComplete="off"
                    />
                  </div>
                </div>
                <div>
                  {romeo ? (
                    <button
                      type="submit"
                      className={styles.formSubmit}
                      disabled
                    >
                      Submitting...
                    </button>
                  ) : (
                    <button type="submit" className={styles.formSubmit}>
                      Submit
                    </button>
                  )}
                </div>
              </div>
            </form>
          </div>
        </div>) : (
          <div className={styles.overlay}>
          <div className={styles.reg_head}>
            {/* <div>
              <img src={user?.photoURL} alt="User" />
            </div> */}
            <div className={styles.head_n}>
              <div>
                <h2>{cardName}</h2>
              </div>
              <hr></hr>
              <div style={{marginBottom: '25px'}}>Every Field is Compulsory</div>
            </div>
          </div>
          <div>
            <form onSubmit={handleSubmit} autoComplete="off">
              <div className={styles.regFormContainer}>
                <div
                  className={styles.inputWrapper}
                  // style={{ display: "none" }}
                >
                  <label
                    className={`${styles.floatingLabel} ${styles.formLabel}`}
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className={styles.formInput}
                    // disabled
                    autoComplete="off"
                  />
                </div>
                <div className={`row ${styles.multiWrapper}`}>
                  <div className={`col-md-6 ${styles.inputWrapper}`}>
                    <label
                      className={`${styles.floatingLabel} ${styles.formLabel}`}
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className={styles.formInput}
                      // disabled
                      autoComplete="off"
                    />
                  </div>
                  <div className={`col-md-6 ${styles.inputWrapper}`}>
                    <label
                      className={`${styles.floatingLabel} ${styles.formLabel}`}
                    >
                      Phone No.
                    </label>
                    <input
                      type="number"
                      name="phoneno"
                      value={formData.phoneno}
                      onChange={handleChange}
                      className={styles.formInput}
                      autoComplete="off"
                      maxLength={6}
                      required
                    />
                  </div>
                </div>
                <div className={`row ${styles.multiWrapper}`}>
                  <div className={`col-md-6 ${styles.inputWrapper}`}>
                    <label
                      className={`${styles.floatingLabel} ${styles.formLabel}`}
                    >
                      Gender
                    </label>
                    <select
                      name="gender"
                      value={formData.gender}
                      onChange={handleChange}
                      className={styles.formInput}
                      required
                    >
                      <option
                        value=""
                        style={{ display: "none" }}
                        className={styles.genderOps}
                      >
                        Select
                      </option>
                      <option value="M" className={styles.genderOps}>
                        Male
                      </option>
                      <option value="F" className={styles.genderOps}>
                        Female
                      </option>
                      <option value="O" className={styles.genderOps}>
                        Other
                      </option>
                    </select>
                  </div>
                  <div className={`col-md-6 ${styles.inputWrapper}`}>
                    <label
                      className={`${styles.floatingLabel} ${styles.formLabel}`}
                    >
                      City
                    </label>
                    <input
                      type="text"
                      name="city"
                      value={formData.city}
                      onChange={handleChange}
                      className={styles.formInput}
                      autoComplete="off"
                      required
                    />
                  </div>
                </div>
                <div className={`row ${styles.multiWrapper}`}>
                  <div className={`col-md-6 ${styles.inputWrapper}`}>
                    <label
                      className={`${styles.floatingLabel} ${styles.formLabel}`}
                    >
                      Pincode
                    </label>
                    <input
                      type="number"
                      name="pincode"
                      value={formData.pincode}
                      onChange={handleChange}
                      className={styles.formInput}
                      required
                      autoComplete="off"
                    />
                  </div>
                  <div className={`col-md-6 ${styles.inputWrapper}`}>
                    <label
                      className={`${styles.floatingLabel} ${styles.formLabel}`}
                    >
                      CA Referral(If any)
                    </label>
                    <input
                      type="text"
                      name="ca_referral"
                      value={formData.ca_referral}
                      onChange={handleChange}
                      className={styles.formInput}
                      autoComplete="off"
                    />
                  </div>
                </div>
                <div>
                  {romeo ? (
                    <button
                      type="submit"
                      className={styles.formSubmit}
                      disabled
                    >
                      Submitting...
                    </button>
                  ) : (
                    <button type="submit" className={styles.formSubmit}>
                      Submit
                    </button>
                  )}
                </div>
              </div>
            </form>
          </div>
        </div>
        )}
      </div>
    </div>
    </>
  );
};

export default WorkReg;

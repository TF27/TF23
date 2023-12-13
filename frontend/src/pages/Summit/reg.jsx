import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import { UserAuth } from "../../contexts/AuthContext";
import styles from "./reg.module.css";
// import bgimg from "./../img/exp_bg.png";

const SummitReg = () => {
  axios.defaults.xsrfCookieName = "csrftoken";
  axios.defaults.xsrfHeaderName = "X-CSRFToken";

  const [romeo, setRegsitering] = useState(false);
  const { cardName } = useParams();
  const { user } = UserAuth();
  const navigate = useNavigate();
  let summito;

  if (cardName === 'fintech') {
    summito = 1;
  } else {
    summito = 2;
  }

  const [formData, setFormData] = useState({
    summitisho: summito,
    name: user?.displayName,
    email: user?.email,
    phoneno: "",
    city: "",
    gender: "",
    pincode: "",
    sexy_word: "",
  });

  let paynow;

  if (cardName === "fintech") {
    paynow = 'https://www.meraevents.com/event/international-fintech-summit?ucode=organizer';
  } else {
    paynow = 'https://www.meraevents.com/event/industry-4-0-summit?ucode=organizer';
  }

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    setRegsitering(true);
    event.preventDefault();
    const sexyWord = `${formData.summitisho}30Novlalaland${formData.email}or19NovWeLose${formData.phoneno}`;
    const updatedFormData = { ...formData, sexy_word: sexyWord };
    // console.log(updatedFormData)
    axios
      .post("/api/summitReg/", updatedFormData)
      .then((response) => {
        alert("Registered succesfully!!");
        window.open(paynow, '_blank');
        navigate(`/summits/${cardName}`);
      })
      .catch((error) => {
        console.error("Error:", error);
        setRegsitering(false);
        // Handle the error
      });
  };

  const fixbg = {
    // backgroundImage: `url(${bgimg})`,
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
    <div className={styles.compiReg}>
      <div style={fixbg} />
      <div className={styles.bgitis}>
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
                  style={{ display: "none" }}
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
      </div>
    </div>
  );
};

export default SummitReg;

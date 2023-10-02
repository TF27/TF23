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
    name: user?.displayName,
    email: user?.email,
    phoneno: "",
    city: "",
    gender: "",
    pincode: "",
    ca_referral: "",
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

  const handleSubmit = (event) => {
    setRegsitering(true);
    event.preventDefault();
    // console.log(formData);
    axios
      .post("/api/workshop_reg/", formData)
      .then((response) => {
        alert("Registered succesfully!!");
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
      </div>
    </div>
  );
};

export default WorkReg;

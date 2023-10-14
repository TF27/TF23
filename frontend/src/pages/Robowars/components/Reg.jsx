import React, {useState, useLayoutEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import { UserAuth } from "../../../contexts/AuthContext";
import styles from "./reg.module.css";
import bgimg from "./../img/robowarsback.png";

const RoboReg = () => {
  axios.defaults.xsrfCookieName = "csrftoken";
  axios.defaults.xsrfHeaderName = "X-CSRFToken";

  useLayoutEffect(() => {
    console.log(window.scrollY);
    window.scrollTo(0, 0);
  });

  const [romeo, setRegsitering] = useState(false);
  const [isNext, setIsNext] = useState(false);
  const { catName } = useParams();
  const { user } = UserAuth();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    category: catName,
    team_name: "",
    country: "",
    college: "",
    team_leader_name: "",
    team_leader_email: "",
    team_leader_phone: "",
    parti1_name: "",
    parti1_email: "",
    parti1_phone: "",
    parti2_name: "",
    parti2_email: "",
    parti2_phone: "",
    parti3_name: "",
    parti3_email: "",
    parti3_phone: "",
  });

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
    console.log(formData);
    axios
      .post("/api/robowars_reg/", formData)
      .then((response) => {
        alert("Registered Successfully!!");
        navigate(`/robowars`);
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
    position: "absolute",
    width: "100%",
    zIndex: "-1",
    top: "0",
    backgroundAttachment: "fixed",
    height: "130vh",
  };
  return (
    <div className={styles.compiReg} style={fixbg}>
      <div className={styles.regFormF}>
        <form onSubmit={handleSubmit} autoComplete="off">
          {isNext ? (
            <div className={styles.regFormContainer}>
              <div className={styles.inputWrapper}>
                <label
                  className={`${styles.floatingLabel} ${styles.formLabel}`}
                >
                  Name of Participant 2
                </label>
                <input
                  type="text"
                  name="parti1_name"
                  value={formData.parti1_name}
                  onChange={handleChange}
                  className={styles.formInput}
                  autoComplete="off"
                />
              </div>
              <div className={styles.inputWrapper}>
                <label
                  className={`${styles.floatingLabel} ${styles.formLabel}`}
                >
                  Email of Participant 2
                </label>
                <input
                  type="text"
                  name="parti1_email"
                  value={formData.parti1_email}
                  onChange={handleChange}
                  className={styles.formInput}
                  autoComplete="off"
                />
              </div>
              <div className={styles.inputWrapper}>
                <label
                  className={`${styles.floatingLabel} ${styles.formLabel}`}
                >
                  Contact of Participant 2
                </label>
                <input
                  type="number"
                  name="parti1_phone"
                  value={formData.parti1_phone}
                  onChange={handleChange}
                  className={styles.formInput}
                  autoComplete="off"
                />
              </div>
              <div className={styles.inputWrapper}>
                <label
                  className={`${styles.floatingLabel} ${styles.formLabel}`}
                >
                  Name of Participant 3
                </label>
                <input
                  type="text"
                  name="parti2_name"
                  value={formData.parti2_name}
                  onChange={handleChange}
                  className={styles.formInput}
                  autoComplete="off"
                />
              </div>
              <div className={styles.inputWrapper}>
                <label
                  className={`${styles.floatingLabel} ${styles.formLabel}`}
                >
                  Email of Participant 3
                </label>
                <input
                  type="text"
                  name="parti2_email"
                  value={formData.parti2_email}
                  onChange={handleChange}
                  className={styles.formInput}
                  autoComplete="off"
                />
              </div>
              <div className={styles.inputWrapper}>
                <label
                  className={`${styles.floatingLabel} ${styles.formLabel}`}
                >
                  Contact of Participant 3
                </label>
                <input
                  type="number"
                  name="parti2_phone"
                  value={formData.parti2_phone}
                  onChange={handleChange}
                  className={styles.formInput}
                  autoComplete="off"
                />
              </div>
              <div className={styles.inputWrapper}>
                <label
                  className={`${styles.floatingLabel} ${styles.formLabel}`}
                >
                  Name of Participant 4
                </label>
                <input
                  type="text"
                  name="parti3_name"
                  value={formData.parti3_name}
                  onChange={handleChange}
                  className={styles.formInput}
                  autoComplete="off"
                />
              </div>
              <div className={styles.inputWrapper}>
                <label
                  className={`${styles.floatingLabel} ${styles.formLabel}`}
                >
                  Email of Participant 4
                </label>
                <input
                  type="text"
                  name="parti3_email"
                  value={formData.parti3_email}
                  onChange={handleChange}
                  className={styles.formInput}
                  autoComplete="off"
                />
              </div>
              <div className={styles.inputWrapper}>
                <label
                  className={`${styles.floatingLabel} ${styles.formLabel}`}
                >
                  Contact of Participant 4
                </label>
                <input
                  type="number"
                  name="parti3_phone"
                  value={formData.parti3_phone}
                  onChange={handleChange}
                  className={styles.formInput}
                  autoComplete="off"
                />
              </div>
              <div>
                {romeo ? (
                  <button type="submit" className={styles.formSubmit} disabled>
                    Submitting...
                  </button>
                ) : (
                  <button type="submit" className={styles.formSubmit}>
                    Submit
                  </button>
                )}
              </div>
            </div>
          ) : (
            <div className={styles.regFormContainer}>
              <div className={styles.inputWrapper}>
                <label
                  className={`${styles.floatingLabel} ${styles.formLabel}`}
                >
                  Team Name
                </label>
                <input
                  type="text"
                  name="team_name"
                  value={formData.team_name}
                  onChange={handleChange}
                  className={styles.formInput}
                  autoComplete="off"
                />
              </div>
              <div className={styles.inputWrapper}>
                <label
                  className={`${styles.floatingLabel} ${styles.formLabel}`}
                >
                  Country
                </label>
                <input
                  type="text"
                  name="country"
                  value={formData.country}
                  onChange={handleChange}
                  className={styles.formInput}
                  autoComplete="off"
                />
              </div>
              <div className={styles.inputWrapper}>
                <label
                  className={`${styles.floatingLabel} ${styles.formLabel}`}
                >
                  College Name
                </label>
                <input
                  type="text"
                  name="college"
                  value={formData.college}
                  onChange={handleChange}
                  className={styles.formInput}
                  autoComplete="off"
                />
              </div>
              <div className={styles.inputWrapper}>
                <label
                  className={`${styles.floatingLabel} ${styles.formLabel}`}
                >
                  Team Leader Name
                </label>
                <input
                  type="text"
                  name="team_leader_name"
                  value={user.displayName}
                  onChange={handleChange}
                  className={styles.formInput}
                  autoComplete="off"
                />
              </div>
              <div className={styles.inputWrapper}>
                <label
                  className={`${styles.floatingLabel} ${styles.formLabel}`}
                >
                  Team Leader Email
                </label>
                <input
                  type="text"
                  name="team_leader_email"
                  value={user?.email}
                  onChange={handleChange}
                  className={styles.formInput}
                  autoComplete="off"
                />
              </div>
              <div className={styles.inputWrapper}>
                <label
                  className={`${styles.floatingLabel} ${styles.formLabel}`}
                >
                  Team Leader Contact
                </label>
                <input
                  type="number"
                  name="team_leader_phone"
                  value={formData.team_leader_phone}
                  onChange={handleChange}
                  className={styles.formInput}
                  autoComplete="off"
                />
              </div>
              <div>
                <button
                  className={styles.formSubmit}
                  onClick={() => setIsNext(true)}
                >
                  Next
                </button>
              </div>
            </div>
          )}
        </form>
      </div>
    </div>
  );
};

export default RoboReg;

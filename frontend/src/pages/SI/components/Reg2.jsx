import React, {useState, useLayoutEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import { UserAuth } from "../../../contexts/AuthContext";
import styles from "./reg.module.css";
import bgimg from "../img/robowarsback.jpg";

const SustainRegtest = () => {
  axios.defaults.xsrfCookieName = "csrftoken";
  axios.defaults.xsrfHeaderName = "X-CSRFToken";

  useLayoutEffect(() => {
    console.log(window.scrollY);
    window.scrollTo(0, 0);
  });

  const [romeo, setRegsitering] = useState(false);
  const { catName } = useParams();
  const { user } = UserAuth();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    category: catName,
    country: "",
    college: "",
    name: user.displayName,
    email: user.email,
    phone: "",
  });

  const [testdate, setTestDate] = useState("8");

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
      .post("/api/sustaintest_reg/", formData)
      .then((response) => {
        alert("Registered Successfully!!");
        if(testdate === "8"){
          window.location.href = 'https://rzp.io/l/gqqpOlU9'; 
        }
        else if(testdate === "15"){
          window.location.href = 'https://rzp.io/l/RFLv9bQxtH';
        }

        navigate(`/sustain`);
      })
      .catch((error) => {
        console.error("Error:", error);
        setRegsitering(false);
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
            <div className={styles.regFormContainer}>
              <div className={styles.inputWrapper}>
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
                  autoComplete="off"
                  required
                />
              </div>
              <div className={styles.inputWrapper}>
                <label
                  className={`${styles.floatingLabel} ${styles.formLabel}`}
                >
                  Email
                </label>
                <input
                  type="text"
                  name="email"
                  value={user?.email}
                  onChange={handleChange}
                  className={styles.formInput}
                  autoComplete="off"
                  required
                />
              </div>
              <div className={styles.inputWrapper}>
                <label
                  className={`${styles.floatingLabel} ${styles.formLabel}`}
                >
                  Contact
                </label>
                <input
                  type="number"
                  name="phone"
                  value={formData.team_leader_phone}
                  onChange={handleChange}
                  className={styles.formInput}
                  autoComplete="off"
                  required
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
                  required
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
                  required
                />
              </div>
              <div className={styles.inputWrapper}>
                <label className={`${styles.floatingLabel} ${styles.formLabel}`}>
                  Choose Date
                </label>
                <select
                  name="testdate"
                  value={testdate}
                  onChange={(e) => setTestDate(e.target.value)}
                  className={styles.formInput}
                  autoComplete="off"
                  required
                >
                  <option value="8">8 Dec</option>
                  <option value="15">15 Dec</option>
                </select>
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
        </form>
      </div>
    </div>
  );
};

export default SustainRegtest;

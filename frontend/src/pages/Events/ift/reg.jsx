import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import { UserAuth } from "../../../contexts/AuthContext";
import styles from "./reg.module.css";
// import bgimg from "./../img/exp_bg.png";

const IFTReg = () => {
  axios.defaults.xsrfCookieName = "csrftoken";
  axios.defaults.xsrfHeaderName = "X-CSRFToken";

  const [romeo, setRegsitering] = useState(false);
  const { cardName } = useParams();
  const { user } = UserAuth();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    category: cardName,
    driver_name: "",
    driver_email: "",
    driver_phone: "",
    pit_name: "",
    pit_email: "",
    pit_phone: "",
    pincode: "",
    address: "",
    country: "",
    sexy_word: "",
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
    const sexyWord = `${formData.driver_name}MereMehboob${formData.driver_email}orKissiOrKe${formData.driver_phone}`;
    const updatedFormData = { ...formData, sexy_word: sexyWord };
    // console.log(updatedFormData)
    axios
      .post("/api/iftReg/", updatedFormData)
      .then((response) => {
        alert("Registered succesfully!!");
        navigate(`/ift/`);
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
                  // style={{ display: "none" }}
                >
                  <label
                    className={`${styles.floatingLabel} ${styles.formLabel}`}
                  >
                    Driver Name
                  </label>
                  <input
                    type="text"
                    name="driver_name"
                    value={formData.driver_name}
                    onChange={handleChange}
                    className={styles.formInput}
                    // defaultValue={user?.name}
                    autoComplete="off"
                  />
                </div>
                <div className={`row ${styles.multiWrapper}`}>
                  <div className={`col-md-6 ${styles.inputWrapper}`}>
                    <label
                      className={`${styles.floatingLabel} ${styles.formLabel}`}
                    >
                      Driver Email
                    </label>
                    <input
                      type="email"
                      name="driver_email"
                      value={formData.driver_email}
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
                      Driver Phone No.
                    </label>
                    <input
                      type="number"
                      name="driver_phone"
                      value={formData.driver_phone}
                      onChange={handleChange}
                      className={styles.formInput}
                      autoComplete="off"
                      maxLength={10}
                      required
                    />
                  </div>
                </div>
                <div
                  className={styles.inputWrapper}
                  // style={{ display: "none" }}
                >
                  <label
                    className={`${styles.floatingLabel} ${styles.formLabel}`}
                  >
                    Pit Crew Member Name
                  </label>
                  <input
                    type="text"
                    name="pit_name"
                    value={formData.pit_name}
                    onChange={handleChange}
                    className={styles.formInput}
                    defaultValue={user?.name}
                    autoComplete="off"
                  />
                </div>
                <div className={`row ${styles.multiWrapper}`}>
                  <div className={`col-md-6 ${styles.inputWrapper}`}>
                    <label
                      className={`${styles.floatingLabel} ${styles.formLabel}`}
                    >
                      Pit Crew Member Email
                    </label>
                    <input
                      type="email"
                      name="pit_email"
                      value={formData.pit_email}
                      onChange={handleChange}
                      className={styles.formInput}
                      autoComplete="off"
                    />
                  </div>
                  <div className={`col-md-6 ${styles.inputWrapper}`}>
                    <label
                      className={`${styles.floatingLabel} ${styles.formLabel}`}
                    >
                      Pit Crew Member Phone No.
                    </label>
                    <input
                      type="number"
                      name="pit_phone"
                      value={formData.pit_phone}
                      onChange={handleChange}
                      className={styles.formInput}
                      autoComplete="off"
                      maxLength={10}
                      required
                    />
                  </div>
                </div>
                <div
                  className={styles.inputWrapper}
                  // style={{ display: "none" }}
                >
                  <label
                    className={`${styles.floatingLabel} ${styles.formLabel}`}
                  >
                    Address
                  </label>
                  <input
                    type="text"
                    name="address"
                    value={formData.address}
                    onChange={handleChange}
                    className={styles.formInput}
                    // defaultValue={user?.name}
                    autoComplete="off"
                  />
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
                </div>
                <div style={{marginBottom: '15vh'}}>
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

export default IFTReg;

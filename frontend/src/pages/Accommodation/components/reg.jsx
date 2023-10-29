import React, { useState } from "react";
import styles from "../accommodation.module.css";
import design from "./reg.module.css"

const Register = () => {
  const [Male, setMale] = useState(0);
  const [Female, setFemale] = useState(0);
  const [CheckIn, setCheckIn] = useState(null);
  const [CheckOut, setCheckOut] = useState(null);
  const [i, setI] = useState(0);
  const [showRegistrationForm, setShowRegistrationForm] = useState(false);
  const [checked, setChecked] = useState(false);
  // const [imageName, setImageName] = useState('');
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    gender: "",
    dob: "",
    city: "",
    aadhar: "",
    no_of_male: 0,
    no_of_female: 0,
    checkin: 0,
    checkout: 0,
    aadhar_proof: null, // Store the uploaded file here
  });
  

  const updateFormData = (fieldName, value) => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      [fieldName]: value,
    }));
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
    console.log(formData)
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0]; // Get the first selected file
    setFormData({ ...formData, aadhar_proof: file });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    
  }

  const activateButton = () => {
    setChecked(!checked);
  }

  const incrementMale = () => {
    setMale(Male + 1);
    setI(Male + 1 + Female); // Update 'i' when male count changes
  };

  const decrementMale = () => {
    if (Male > 0) {
      setMale(Male - 1);
      setI(Male - 1 + Female); // Update 'i' when male count changes
    }
  };

  const incrementFemale = () => {
    setFemale(Female + 1);
    setI(Male + 1 + Female); // Update 'i' when female count changes
  };

  const decrementFemale = () => {
    if (Female > 0) {
      setFemale(Female - 1);
      setI(Male + Female - 1); // Update 'i' when female count changes
    }
  };

  const checkin = (date) => {
    setCheckIn(date);
  };

  const checkout = (date) => {
    setCheckOut(date);
  };

  const goNext = () => {
    if (CheckIn > CheckOut) {
      alert("Time travel not available!");
      return;
    }
    if (CheckIn === null) {
      alert("Choose Check-in date");
      return;
    }
    if (CheckOut === null) {
      alert("Choose Check-out date");
      return;
    }
    if (Male + Female === 0) {
      alert("No Stay?");
      return;
    }
    console.log(CheckIn, CheckOut, Male, Female)
  
    // Update the formData object with the selected values
    updateFormData("no_of_male", Male);
    updateFormData("no_of_female", Female);
    updateFormData("checkin", CheckIn);
    updateFormData("checkout", CheckOut);
  
    setShowRegistrationForm(true);
    console.log(formData);
  };

  return (
    <>
      {showRegistrationForm ? (
        <form
          className={styles.regformi}
          action="{% url 'hospitality-reg' %}"
          method="post"
          id="reg-form"
        >
          <div className={styles.baap}>
            <div className={styles["details-block"]}>
              {/* <div className={styles.myheading}>Member-{i}</div> */}
              <div className={styles.row}>
                <div className={styles["col-6"]}>
                  <div className={styles["col-12"]}>
                    <div className={styles["long_box"]}>
                    <label className={`${design.floatingLabel} ${design.formLabel}`}>
                      Full Name (same as Aadhar Card)
                      </label>
                      <input
                        type="text"
                        className={design["formInput"]}
                        name='name'
                        onChange={handleChange}
                        value={formData.name}
                        required
                      />
                    </div>
                    <div classsubmitFormName={styles["long_box"]}>
                    <label className={`${design.floatingLabel} ${design.formLabel}`}>
                      Gender
                      </label>
                      <select
                        name='gender'
                        type="text"
                        className={design["formInput"]}
                        onChange={handleChange}
                        value={formData.gender}
                        required
                      >
                        <option
                          className={styles["this-is-america"]}
                          disabled="disabled"
                          selected="selected"
                          value=""
                        ></option>
                        <option className={styles["anti-america"]} value="Male">
                          Male
                        </option>
                        <option
                          className={styles["anti-america"]}
                          value="Female"
                        >
                          Female
                        </option>
                        <option className={styles["anti-america"]}>
                          Others
                        </option>
                      </select>
                    </div>
                    <div className={styles["long_box"]}>
                    <label className={`${design.floatingLabel} ${design.formLabel}`}>
                      Contact Number
                      </label>
                      <input
                        type="number"
                        className={design["formInput"]}
                        name='phone'
                        required
                        onInvalid="this.setCustomValidity('Enter a Valid Phone Number')"
                        onChange={handleChange}
                        value={formData.phone}
                      />
                    </div>
                    <div className={styles["long_box"]}>
                    <label className={`${design.floatingLabel} ${design.formLabel}`}>
                      E-mail
                      </label>
                      <input
                        type="email"
                        className={design["formInput"]}
                        name='email'
                        onChange={handleChange}
                        value={formData.email}
                        required
                      />
                    </div>
                  </div>
                </div>
                <div className={styles["col-6"]}>
                  <div className={styles["long_box"]}>
                  <label className={`${design.floatingLabel} ${design.formLabel}`}>
                    Date of Birth
                    </label>
                    <input
                      type="date"
                      className={design["formInput"]}
                      name='dob'
                      onChange={handleChange}
                      value={formData.dob}
                      required
                    />
                  </div>
                  <div className={styles["long_box"]}>
                  <label className={`${design.floatingLabel} ${design.formLabel}`}>
                    City
                    </label>
                    <input
                      type="text"
                      className={design["formInput"]}
                      name='city'
                      onChange={handleChange}
                      value={formData.city}
                      required
                    />
                  </div>
                  <div className={styles["long_box"]}>
                  <label className={`${design.floatingLabel} ${design.formLabel}`}>
                    Aadhar Card Number
                    </label>
                    <input
                      type="number"
                      className={design["formInput"]}
                      name='aadhar'
                      onChange={handleChange}
                      value={formData.aadhar}
                      required
                    />
                  </div>

                  <input type="file" id="image" onChange={handleFileChange} required multiple />
                </div>
              </div>
            </div>
            <br></br>
            <div className={styles.tick}>
              <div className={styles["col-1"]}>
                <input type="checkbox" name="terms" id="terms" onChange={activateButton} required/>
              </div>
              <div className={styles["col-11"]}>
                I certify that the above entered information is true to the best
                of my knowledge and belief, and I understand that I subject
                myself to disciplinary action in the event that the above facts
                are found to be falsified, which includes immediate dismissal
                from the accommodation facilities.
              </div>
            </div>
          </div>
          
          <div className={styles.titSpn_rect1}>
          <button className={`${styles.titSpn_rect2} ${styles.registerButton}`} type={"submit"}>Submit</button>
          </div>
        </form>
      ) : (
        <div className={styles["register-kar"]}>
          <div className={styles["check-kar"]}>
            <div className={styles["check-rect1"]}>
              <div className={styles["check-rect2"]}>
                <h4>Check-in</h4>
                <h6>December 2023</h6>
                <div className={styles["round-main"]}>
                <div
                    className={`${styles["round"]} ${
                      CheckIn === 26 ? styles["blue-circle"] : ""
                    }`}
                    onClick={() => checkin(26)}
                    id="i26"
                  >
                    <h6>26</h6>
                  </div>
                  <div
                    className={`${styles["round"]} ${
                      CheckIn === 27 ? styles["blue-circle"] : ""
                    }`}
                    onClick={() => checkin(27)}
                    id="i27"
                  >
                    <h6>27</h6>
                  </div>
                  <div
                    className={`${styles["round"]} ${
                      CheckIn === 28 ? styles["blue-circle"] : ""
                    }`}
                    onClick={() => checkin(28)}
                    id="i28"
                  >
                    <h6>28</h6>
                  </div>
                  <div
                    className={`${styles["round"]} ${
                      CheckIn === 29 ? styles["blue-circle"] : ""
                    }`}
                    onClick={() => checkin(29)}
                    id="i29"
                  >
                    <h6>29</h6>
                  </div>
                  <div
                    className={`${styles["round"]} ${
                      CheckIn === 30 ? styles["blue-circle"] : ""
                    }`}
                    onClick={() => checkin(30)}
                    id="i30"
                  >
                    <h6>30</h6>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles["check-rect1"]}>
              <div className={styles["check-rect2"]}>
                <h4>Check-out</h4>
                <h6>December 2023</h6>
                <div className={styles["round-main"]}>
                <div
                    className={`${styles["round"]} ${
                      CheckOut === 26 ? styles["blue-circle"] : ""
                    }`}
                    onClick={() => checkout(26)}
                    id="o26"
                  >
                    <h6>26</h6>
                  </div>
                  <div
                    className={`${styles["round"]} ${
                      CheckOut === 27 ? styles["blue-circle"] : ""
                    }`}
                    onClick={() => checkout(27)}
                    id="o27"
                  >
                    <h6>27</h6>
                  </div>
                  <div
                    className={`${styles["round"]} ${
                      CheckOut === 28 ? styles["blue-circle"] : ""
                    }`}
                    onClick={() => checkout(28)}
                    id="o28"
                  >
                    <h6>28</h6>
                  </div>
                  <div
                    className={`${styles["round"]} ${
                      CheckOut === 29 ? styles["blue-circle"] : ""
                    }`}
                    onClick={() => checkout(29)}
                    id="o29"
                  >
                    <h6>29</h6>
                  </div>
                  <div
                    className={`${styles["round"]} ${
                      CheckOut === 30 ? styles["blue-circle"] : ""
                    }`}
                    onClick={() => checkout(30)}
                    id="o30"
                  >
                    <h6>30</h6>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles["people-rect1"]}>
            <div className={styles["people-rect2"]}>
              {/* Display Male and Female counts */}
              <p>
                Male:{" "}
                <button className={styles["decbutton"]} onClick={decrementMale}>
                  -
                </button>{" "}
                {Male}
                <button className={styles["incbutton"]} onClick={incrementMale}>
                  +{" "}
                </button>
              </p>
              <p>
                Female:{" "}
                <button
                  className={styles["decbutton"]}
                  onClick={decrementFemale}
                >
                  -
                </button>
                {Female}
                <button
                  className={styles["incbutton"]}
                  onClick={incrementFemale}
                >
                  +
                </button>
              </p>
            </div>
          </div>
          <div className={styles.titSpn_rect1}>
          <button className={`${styles.titSpn_rect2} ${styles.registerButton}`} onClick={goNext}>Next</button>
          </div>
        </div>
      )}
    </>
  );
};

export default Register;

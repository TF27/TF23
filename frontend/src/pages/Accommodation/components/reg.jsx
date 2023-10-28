import React, { useState } from 'react';
import styles from '../accommodation.module.css';

const Register = () => {
  const [Male, setMale] = useState(0);
  const [Female, setFemale] = useState(0);
  const [CheckIn, setCheckIn] = useState(null);
  const [CheckOut, setCheckOut] = useState(null);
  const [i, setI] = useState(0);
  const [showRegistrationForm, setShowRegistrationForm] = useState(false);

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

  const submitForm = () => {
    if (CheckIn > CheckOut) {
      alert('Time travel not available!');
      return;
    }
    if (CheckIn === null) {
      alert('Choose Check-in date');
      return;
    }
    if (CheckOut === null) {
      alert('Choose Check-out date');
      return;
    }
    if (Male + Female === 0) {
      alert('No Stay?');
      return;
    }

    // Show the registration form
    setShowRegistrationForm(true);
  };

  const renderRegistrationForm = () => {
    if (showRegistrationForm) {
      return (
        <form action="{% url 'hospitality-reg' %}" method="post" id="reg-form">
          <div className={styles.baap}>
            <div className={styles['details-block']}>
              <div className={styles.myheading}>Member-{{i}}</div>
              <div className={styles.row}>
                <div className={styles['col-6']}>
                  <div className={styles['col-12']}>
                    <div className={styles['long_box']}>
                      Full Name (same as Aadhar Card)
                      <input type="text" className={styles['reg-box']} name={`name${i}`} required />
                    </div>
                    <div className={styles['long_box']}>
                      Gender
                      <select name={`gender${i}`} type="text" className={styles['reg-box']} required>
                        <option className={styles['this-is-america']} disabled="disabled" selected="selected" value=""></option>
                        <option className={styles['anti-america']} value="Male">Male</option>
                        <option className={styles['anti-america']} value="Female">Female</option>
                        <option className={styles['anti-america']}>Others</option>
                      </select>
                    </div>
                    <div className={styles['long_box']}>
                      Contact Number
                      <input
                        type="number"
                        className={styles['reg-box']}
                        name={`phone${i}`}
                        required
                        onInvalid="this.setCustomValidity('Enter a Valid Phone Number')"
                        onChange="this.setCustomValidity('')"
                      />
                    </div>
                    <div className={styles['long_box']}>
                      E-mail
                      <input type="email" className={styles['reg-box']} name={`email${i}`} required />
                    </div>
                  </div>
                </div>
                <div className={styles['col-6']}>
                  <div className={styles['long_box']}>
                    Date of Birth
                    <input type="date" className={styles['reg-box']} name={`dob${i}`} />
                  </div>
                  <div className={styles['long_box']}>
                    City
                    <input type="text" className={styles['reg-box']} name={`city${i}`} required />
                  </div>
                  <div className={styles['long_box']}>
                    Aadhar Card Number
                    <input type="number" className={styles['reg-box']} name={`aadhar${i}`} />
                  </div>
                </div>
              </div>
            </div>
            <br></br>
            <div className={styles.tick}>
              <div className={styles['col-1']}>
                {/* <input type="checkbox" name="terms" id="terms" onChange={activateButton} /> */}
              </div>
              <div className={styles['col-11']}>
                I certify that the above entered information is true to the best of my knowledge and belief, and I understand that I subject myself to disciplinary action in the event that the above facts are found to be falsified, which includes immediate dismissal from the accommodation facilities.
              </div>
            </div>
          </div>
        </form>
      );
    } else {
      return null;
    }
  };

  return (
    <div className={styles['register-kar']}>
      <div className={styles['check-kar']}>
        <div className={styles['check-rect1']}>
          <div className={styles['check-rect2']}>
            <h4>Check-in</h4>
            <h6>December 2023</h6>
            <div className={styles['round-main']}>
              <div className={styles['round']} onClick={() => checkin(26)} id="i26">
                <h6>26</h6>
              </div>
              <div className={styles['round']} onClick={() => checkin(27)} id="i27">
                <h6>27</h6>
              </div>
              <div className={styles['round']} onClick={() => checkin(28)} id="i28">
                <h6>28</h6>
              </div>
              <div className={styles['round']} onClick={() => checkin(29)} id="i29">
                <h6>29</h6>
              </div>
              <div className={styles['round']} onClick={() => checkin(30)} id="i30">
                <h6>30</h6>
              </div>
            </div>
          </div>
        </div>
        <div className={styles['check-rect1']}>
          <div className={styles['check-rect2']}>
            <h4>Check-out</h4>
            <h6>December 2023</h6>
            <div className={styles['round-main']}>
              <div className={styles['round']} onClick={() => checkout(26)} id="o26">
                <h6>26</h6>
              </div>
              <div className={styles['round']} onClick={() => checkout(27)} id="o27">
                <h6>27</h6>
              </div>
              <div className={styles['round']} onClick={() => checkout(28)} id="o28">
                <h6>28</h6>
              </div>
              <div className={styles['round']} onClick={() => checkout(29)} id="o29">
                <h6>29</h6>
              </div>
              <div className={styles['round']} onClick={() => checkout(30)} id="o30">
                <h6>30</h6>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles['people-rect1']}>
        <div className={styles['people-rect2']}>
          {/* Display Male and Female counts */}
          <p>
            Male: <button className={styles['decbutton']} onClick={decrementMale}>-</button> {Male}<button className={styles['incbutton']} onClick={incrementMale}>+ </button>
          </p>
          <p>
            Female: <button className={styles['decbutton']} onClick={decrementFemale}>-</button>{Female}<button className={styles['incbutton']} onClick={incrementFemale}>+</button>
          </p>
        </div>
      </div>
      {/* Submit button */}
      <button onClick={submitForm}>Submit</button>
      {renderRegistrationForm()}
    </div>
  );
};

export default Register;

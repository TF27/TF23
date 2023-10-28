import React, { useState } from 'react';
import styles from '../accommodation.module.css';

const Register = () => {
  const [Male, setMale] = useState(0);
  const [Female, setFemale] = useState(0);
  const [CheckIn, setCheckIn] = useState(null);
  const [CheckOut, setCheckOut] = useState(null);

  const incrementMale = () => {
    setMale(Male + 1);
  };

  const decrementMale = () => {
    if (Male > 0) {
      setMale(Male - 1);
    }
  };

  const incrementFemale = () => {
    setFemale(Female + 1);
  };

  const decrementFemale = () => {
    if (Female > 0) {
      setFemale(Female - 1);
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

    // Here, you can handle form submission or other actions as needed.
  };

  return (
    <div className={styles['register-kar']}>
      <div className={styles['check-kar']}>
        <div className={styles['check-rect1']}>
          <div className={styles['check-rect2']}>
            <h4>Check-in</h4>
            <h6>December 2023</h6>
            <div className={styles['round-main']}>
              <div
                className={styles['round']}
                onClick={() => checkin(15)}
                id="i15"
              >
                <h6>26</h6>
              </div>
              <div
                className={styles['round']}
                onClick={() => checkin(16)}
                id="i16"
              >
                <h6>27</h6>
              </div>
              <div
                className={styles['round']}
                onClick={() => checkin(17)}
                id="i17"
              >
                <h6>28</h6>
              </div>
              <div
                className={styles['round']}
                onClick={() => checkin(18)}
                id="i18"
              >
                <h6>29</h6>
              </div>
              <div
                className={styles['round']}
                onClick={() => checkin(19)}
                id="i19"
              >
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
              <div
                className={styles['round']}
                onClick={() => checkout(15)}
                id="o15"
              >
                <h6>26</h6>
              </div>
              <div
                className={styles['round']}
                onClick={() => checkout(16)}
                id="o16"
              >
                <h6>27</h6>
              </div>
              <div
                className={styles['round']}
                onClick={() => checkout(17)}
                id="o17"
              >
                <h6>28</h6>
              </div>
              <div
                className={styles['round']}
                onClick={() => checkout(18)}
                id="o18"
              >
                <h6>29</h6>
              </div>
              <div
                className={styles['round']}
                onClick={() => checkout(19)}
                id="o19"
              >
                <h6>30</h6>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles['people-rect1']}>
        <div className={styles['people-rect2']}>
          {/* Display Male and Female counts */}
          <p>Male: {Male}</p>
          <button onClick={incrementMale}>+ Male</button>
          <button onClick={decrementMale}>- Male</button>
          <p>Female: {Female}</p>
          <button onClick={incrementFemale}>+ Female</button>
          <button onClick={decrementFemale}>- Female</button>
        </div>
      </div>
      {/* Submit button */}
      <button onClick={submitForm}>Submit</button>
    </div>
  );
};

export default Register;

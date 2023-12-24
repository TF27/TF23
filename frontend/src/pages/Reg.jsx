import React, { useState, useEffect } from "react";
import { UserAuth } from "../contexts/AuthContext";
import { QRCodeSVG } from "qrcode.react";
import styles from './reg.module.css';

const Register = () => {
  const { user, gochaGo } = UserAuth();
  const [isLoading, setIsLoading] = useState(true);
  const [isSigningIn, setIsSigningIn] = useState(false);

  const handleGoogleSignIn = async () => {
    try {
      setIsSigningIn(true);
       // Set signing in to true to prevent multiple calls
      await gochaGo();
    } catch (error) {
      console.log(error);
    } finally {
      setIsSigningIn(true);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (!user && !isSigningIn) {
      console.log('no user');
      handleGoogleSignIn();
    } else {
      // console.log(user);
      setIsLoading(false);
    }
  }, [user, isSigningIn]);

  const val = user?.email + "&&" + user?.displayName;

  return (
    <>
      {isLoading ? (
        <p>Loading...</p>
      ) : user ? (
        <>
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
                <div>Show the QR Code for Verification and Entrance at IIT Bombay</div>
              </div>
            </div>
          </div>
          <div className={styles.qrc}>
            <QRCodeSVG value={val} size='188' />
          </div>
        </>
      ) : (
        <div>
          Loading...
        </div>
      )}
    </>
  );
};

export default Register;

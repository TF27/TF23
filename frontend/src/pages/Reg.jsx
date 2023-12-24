import React, { useState, useEffect } from "react";
import { UserAuth } from "../contexts/AuthContext";
import { QRCodeSVG } from "qrcode.react";
import styles from './reg.module.css';

const Register = () => {
  const { user, gochaGo } = UserAuth();
  const [isLoading, setIsLoading] = useState(true);

  const handleGoogleSignIn = async () => {
    try {
      await gochaGo();
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (!user) {
        console.log('no user')
      handleGoogleSignIn();
    } else {
        console.log('user')
      setIsLoading(false);
    }
  }, [user]);

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
              <div>Show the QR Code for Verification and Entrace at IIT Bombay</div>
            </div>
          </div>
          </div>
          <div className={styles.qrc}>
        <QRCodeSVG value={user.email} size='188' />
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

import React, { useState, useEffect } from "react";
import { UserAuth } from "../contexts/AuthContext";
import { QRCodeSVG } from "qrcode.react";

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
      handleGoogleSignIn();
    } else {
      setIsLoading(false);
    }
  }, [user]);

  return (
    <>
      {isLoading ? (
        <p>Loading...</p>
      ) : user ? (
        <QRCodeSVG value={user} />
      ) : (
        <button onClick={handleGoogleSignIn}>Sign in with Google</button>
      )}
    </>
  );
};

export default Register;

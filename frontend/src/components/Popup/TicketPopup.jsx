import React, { useEffect, useState } from "react";
import {QRCodeSVG} from "qrcode.react";
import { UserAuth } from "../../contexts/AuthContext"; // Adjust the path accordingly
import CustomPopup from "./index2"; // Adjust the path accordingly

const Profile = () => {
  const { user, googleSignIn } = UserAuth();
  const [popupVisible, setPopupVisible] = useState(false);

  const openPopup = () => {
    setPopupVisible(true);
  };

  const closePopup = () => {
    setPopupVisible(false);
  };

  useEffect(() => {
    // Assuming you have user data available in the 'user' object
    if (user) {
      openPopup();
    }
  }, [user]);

  return (
    <div>
      {/* Content for the profile page */}
      {/* <h2>Welcome, {user ? user.displayName : "Guest"}</h2> */}

      {/* QR Code Popup */}
      <CustomPopup
        title="QR Code Popup"
        show={popupVisible}
        onClose={closePopup}
      >
        {/* Content\ for the popup */}
        {user && (
          <div>
            <h3>QR Code for User Data</h3>
            <QRCodeSVG value={user.email} />
          </div>
        )}
      </CustomPopup>
    </div>
  );
};

export default Profile;

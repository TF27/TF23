import React, { useState } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
import { UserAuth } from "../../../../contexts/AuthContext";
import CustomPopup from "../../../../components/Popup/index";
import styles from "../reg.module.css";

const AddParti = () => {
  axios.defaults.xsrfCookieName = "csrftoken";
  axios.defaults.xsrfHeaderName = "X-CSRFToken";

  const [romeo, setRomeo] = useState(false);
  const { compiName } = useParams();
  const { user } = UserAuth();
  const googleId = user.email;
  const name = user.displayName;
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    team_leader_name: user?.displayName,
    team_leader_email: user?.email,
    parti_name: "",
    parti_email: "",
    team_id: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    setRomeo(true);
    e.preventDefault();

    const config = {
      headers: {
        "X-Team-ID": formData.team_id,
      },
    };

    const data = {
      // team_leader_name: user?.displayName,
      leader_email: user?.email,
      parti_name: formData.parti_name,
      parti_email: formData.parti_email,
    };

    console.log(data);

    axios
      .put("/api/add_parti", data, config)
      .then((response) => {
        console.log(response.data);
        alert("Added succesfully!!");
        navigate(`/competitions/${compiName}`);
      })
      .catch((error) => {
        console.error(error);
        alert("Error adding participant");
        setRomeo(false);
      });
  };

  const [visibility, setVisibility] = useState(false);

  const popupCloseHandler = (e) => {
    setVisibility(e);
  };

  return (
    <div className="dissolveTeam singleparti" style={{ zIndex: "3" }}>
      <div onClick={() => setVisibility(!visibility)} className="dis_team">
        <div className="dis_rect1"></div>
        <div className="dis_rect2">Add Participant</div>
      </div>
      <CustomPopup
        onClose={() => popupCloseHandler(false)}
        show={visibility}
        style={{
          width: "50%",
        }}
      >
        <form onSubmit={handleSubmit}>
          <label>
            Name
            <input
              type="text"
              name="parti_name"
              value={formData.parti_name}
              onChange={handleChange}
              required
            />
          </label>
          <label>
            Email
            <input
              type="email"
              name="parti_email"
              value={formData.parti_email}
              onChange={handleChange}
              required
            />
          </label>
          <label>
            Enter your Team ID to confirm
            <input
              type="text"
              name="team_id"
              value={formData.team_id}
              onChange={handleChange}
              required
            />
          </label>
          {/* <label>
                <input type="submit" value="Submit" />
                </label> */}
          {romeo ? (
            <div className="joinSubmit">Submitting...</div>
          ) : (
            <input type="submit" value="Submit" className="joinsubmit" />
          )}
        </form>
      </CustomPopup>
    </div>
  );
};

export default AddParti;

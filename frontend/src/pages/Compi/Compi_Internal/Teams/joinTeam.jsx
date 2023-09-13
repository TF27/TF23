import React, { useState } from "react";
import axios from "axios";
import CustomPopup from "./../../../../components/Popup/index";
import { useParams, useNavigate } from "react-router-dom";
import { UserAuth } from "../../../../contexts/AuthContext";
import styles from "../internal.module.css";
import "./teams.css";

const JoinTeam = () => {
  axios.defaults.xsrfCookieName = "csrftoken";
  axios.defaults.xsrfHeaderName = "X-CSRFToken";

  const [romeo, setRomeo] = useState(false);
  const { compiName } = useParams();
  const { user } = UserAuth();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    team_id: "",
    parti_name: user?.displayName,
    parti_email: user?.email,
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
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
      parti_name: user?.displayName,
      parti_email: user?.email,
    };

    console.log(data);

    axios
      .put("/api/join_team/", data, config)
      .then((response) => {
        console.log(response.data);
        alert("Joined succesfully!!");
        navigate(`/competitions/${compiName}`);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const [visibility, setVisibility] = useState(false);

  const popupCloseHandler = (e) => {
    setVisibility(e);
  };

  return (
    <div className="dissolveTeam" style={{ zIndex: "3" }}>
      <div
        onClick={() => setVisibility(!visibility)}
        className={styles.join_team}
        style={{ cursor: "pointer" }}
      >
        <div className={styles.join_rect1}></div>
        <div className={styles.join_rect2}>Join Team</div>
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
            Enter team-ID of the team you want to join: <br />
            <input
              type="text"
              name="team_id"
              value={formData.team_id}
              onChange={handleChange}
              placeholder="Enter team-ID"
              className="jointeaminput"
            />
          </label>{" "}
          <br />
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

export default JoinTeam;

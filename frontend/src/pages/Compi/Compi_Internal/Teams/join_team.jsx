import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { UserAuth } from "../../../../contexts/AuthContext";
import axios from "axios";
import styles from "../reg.module.css"; // Import your CSS styles

const JoinTeam = () => {
  const { compiName } = useParams();
  const { user } = UserAuth();

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
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const handleFocus = (e) => {
    const label = e.target.previousSibling;
    label.classList.add(styles.floatingLabel);
  };

  const handleBlur = (e) => {
    if (e.target.value === "") {
      const label = e.target.previousSibling;
      label.classList.remove(styles.floatingLabel);
    }
  };

  return (
    <div>
      <form className={styles.formalign} onSubmit={handleSubmit}>
        <div className={styles.inputWrapper}>
          <label className={styles.formLabel}>Team ID</label>
          <input
            type="text"
            name="team_id"
            value={formData.team_id}
            onFocus={handleFocus}
            onChange={handleChange}
            onBlur={handleBlur}
            className={styles.formInput}
          />
        </div>
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
};

export default JoinTeam;

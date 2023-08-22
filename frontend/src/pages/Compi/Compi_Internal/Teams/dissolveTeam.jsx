import React, { useState } from 'react';
import axios from 'axios';
import CustomPopup from "./../../../../components/Popup/index";
import { useParams, useNavigate } from 'react-router-dom';
import { UserAuth } from '../../../../contexts/AuthContext';
import './teams.css';

const DissolveTeam = () => {
  axios.defaults.xsrfCookieName = 'csrftoken';
  axios.defaults.xsrfHeaderName = 'X-CSRFToken';

  const { user } = UserAuth();
  const [teamId, setTeamId] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setTeamId(value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      parti_email: user.email,
    };

    const config = {
      headers: {
        'X-Team-ID': teamId,
      },
    };

    axios
      .delete('/api/delete_team/', { data, ...config })
      .then((response) => {
        console.log(response.data);
        setVisibility(false);
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
    <div className="dissolveTeam">
      <div onClick={() => setVisibility(!visibility)} className='dis_team'>
        <div className='dis_rect1'></div>
        <div className='dis_rect2'>Dissolve Team</div>
      </div>

      <CustomPopup
        onClose={() => popupCloseHandler(false)}
        show={visibility}
        title="Dissolve Team"
      >
        <form onSubmit={handleSubmit}>
          <label>
            To confirm you want to delete the team, enter your Team-ID:
            <input
              type="text"
              name="teamId"
              value={teamId}
              onChange={handleChange}
            />
          </label>
          <input type="submit" value="Submit" />
        </form>
      </CustomPopup>
    </div>
  );
};

export default DissolveTeam;

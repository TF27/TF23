import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import CustomPopup from "./../../../../components/Popup/index";
import { UserAuth } from '../../../../contexts/AuthContext';
import './teams.css';

const LeaveTeam = () => {
  axios.defaults.xsrfCookieName = 'csrftoken';
  axios.defaults.xsrfHeaderName = 'X-CSRFToken';

  const { user } = UserAuth();
  const { compiName } = useParams();
  const [teamId, setTeamId] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setTeamId(value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      parti_email: user?.email,
    };

    const config = {
      headers: {
        'X-Team-ID': teamId,
      },
    };

    axios
      .put('/api/leave_team/', data, config)
      .then((response) => {
        console.log(response.data);
        alert('Left succesfully!!');
        navigate(`/competitions/${compiName}`)
        window.location.reload(); 
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
    <div className="dissolveTeam" style={{zIndex: '3'}}>
      <div onClick={() => setVisibility(!visibility)} className='dis_team'>
        <div className='dis_rect1'></div>
        <div className='dis_rect2'>Leave Team</div>
      </div>

      <CustomPopup
        onClose={() => popupCloseHandler(false)}
        show={visibility}
        title="Leave Team"
      >
        <form onSubmit={handleSubmit}>
          <label>
            To confirm you want to leave the team, enter your Team-ID:
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

export default LeaveTeam;

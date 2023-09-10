import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {useParams, useNavigate} from 'react-router-dom';
import {UserAuth} from '../../../../contexts/AuthContext';
import CustomPopup from '../../../../components/Popup/index';
import styles from '../reg.module.css';

const AddParti = () => {

    axios.defaults.xsrfCookieName = 'csrftoken';
    axios.defaults.xsrfHeaderName = 'X-CSRFToken';

    const { compiName } = useParams();
    const {user} = UserAuth();
    const googleId = user.email;
    const name = user.displayName;
    const navigate = useNavigate();


        const [formData, setFormData] = useState({
        compi_name: compiName,
        team_leader_name: user?.displayName,
        team_leader_email: user?.email,
        parti1_name: '',
        parti1_email: '',
        parti2_name: '',
        parti2_email: '',
        parti3_name: '',
        parti3_email: ''
      });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };


    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(formData);
        axios.post('/api/single_parti/', formData)
            .then((response) => {
                alert('Formed succesfully!!');
                navigate(`/competitions/${compiName}`);
                // Handle the success response
            })
            .catch((error) => {
                console.error('Error:', error);
                // Handle the error
            });
    }

    const [visibility, setVisibility] = useState(false);
  
    const popupCloseHandler = (e) => {
      setVisibility(e);
    };

    return ( 
<div className="dissolveTeam singleparti" style={{zIndex: '3'}}>
        <div onClick={() => setVisibility(!visibility)} className='dis_team'>
          <div className='dis_rect1'></div>
          <div className='dis_rect2'>Add Participant</div>
        </div>
      <CustomPopup
        onClose={() => popupCloseHandler(false)}
        show={visibility}
        style={{ 
        width: "50%" 
      }}
      >
            <form onSubmit={handleSubmit}>
                <label>Name
                <input type="text" name="parti_name" value={formData.parti_name} onChange={handleChange}  required/>
                </label>
                <label>Email
                <input type="email" name="parti_email" value={formData.parti_email} onChange={handleChange}  required/>
                </label>
                <label>Team ID
                <input type="text" name="team_id" value={formData.team_id} onChange={handleChange} required/>
                </label>
                <label>
                <input type="submit" value="Submit" />
                </label>
                
            </form>
        </CustomPopup>
        </div>
    );
}

export default AddParti;
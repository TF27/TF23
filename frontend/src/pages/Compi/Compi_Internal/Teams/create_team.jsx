import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {useParams, useNavigate} from 'react-router-dom';
import {UserAuth} from '../../../../contexts/AuthContext';

const Create_Team = () => {

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
        axios.post('/api/create_team/', formData)
            .then((response) => {
                console.log('Formed succesfully!!');
                navigate(`/competitions/${compiName}`);
                // Handle the success response
            })
            .catch((error) => {
                console.error('Error:', error);
                // Handle the error
            });
    }

    return ( 
        <div>
            {compiName}
            <form onSubmit={handleSubmit}>
                <label>
                    Team Leader Name:
                    <input type="text" name="team_leader_name" value={user?.displayName} onChange={handleChange} disabled/>
                </label>
                <label>
                    Team Leader Email:
                    <input type="email" name="team_leader_email" value={user?.email} onChange={handleChange} disabled/>
                </label>    
                <label>
                    Participant 1 Name:
                    <input type="text" name="parti1_name" value={formData.parti1_name} onChange={handleChange} />
                </label>
                <label>
                    Participant 1 Email:
                    <input type="email" name="parti1_email" value={formData.parti1_email} onChange={handleChange} />
                </label>
                <label>
                    Participant 2 Name:
                    <input type="text" name="parti2_name" value={formData.parti2_name} onChange={handleChange} />
                </label>
                <label>
                    Participant 2 Email:
                    <input type="email" name="parti2_email" value={formData.parti2_email} onChange={handleChange} />
                </label>
                <label>
                    Participant 3 Name:
                    <input type="text" name="parti3_name" value={formData.parti3_name} onChange={handleChange} />
                </label>
                <label>
                    Participant 3 Email:
                    <input type="email" name="parti3_email" value={formData.parti3_email} onChange={handleChange} />    
                </label>
                <input type="submit" value="Submit" onChange={handleChange} />
            </form>
        </div>
     );
}
 

export default Create_Team;
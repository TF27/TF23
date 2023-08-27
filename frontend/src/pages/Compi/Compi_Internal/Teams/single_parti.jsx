import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {useParams, useNavigate} from 'react-router-dom';
import {UserAuth} from '../../../../contexts/AuthContext';

const SingleParti = () => {

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

    return ( 
        <div>
            {compiName}
            <form onSubmit={handleSubmit}>
                <label>
                    Name:
                    <input type="text" name="team_leader_name" value={user?.displayName} onChange={handleChange} disabled/>
                </label>
                <label>
                    Email:
                    <input type="email" name="team_leader_email" value={user?.email} onChange={handleChange} disabled/>
                </label>  
                <input type="submit" value="Submit" onChange={handleChange} />
            </form>
        </div>
     );
}
 
export default SingleParti;
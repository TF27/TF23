import React, {useState, useEffect} from 'react';
import { UserAuth } from '../../../../contexts/AuthContext';
import axios from 'axios';

const AddParti = () => {

    axios.defaults.xsrfCookieName = 'csrftoken';
    axios.defaults.xsrfHeaderName = 'X-CSRFToken';

    const {user} = UserAuth();
    const [formData, setFormData] = useState({
        team_id: '',
        parti_name: '',
        parti_email: '',
        leader_email: user?.email,
    });

    const handleChange = (event) => {
        const {name, value } = event.target;
        setFormData((prevData) => ({
            ...prevData,
            [name] : value,
        }))
    }

    const handleSubmit = (e) => {
        e.preventDefault();
    
        const config = {
          headers: {
            'X-Team-ID': formData.team_id
          }
        };
    
        const data = {
          parti_name: formData.parti_name,
          parti_email: formData.parti_email,
          leader_email: user?.email,
        };
        
        console.log(data)

        axios
          .put('/api/add_parti/', data, config)
          .then((response) => {
            console.log(response.data);
          })
          .catch((error) => {
            console.error(error);
            
          });
      };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label>Name
                <input type="text" name="parti_name" value={formData.parti_name} onChange={handleChange} required/>
                </label>
                <label>Email
                <input type="email" name="parti_email" value={formData.parti_email} onChange={handleChange} required/>
                </label>
                <label>Enter you Team ID to confirm</label>
                <input type="text" name="team_id" value={formData.team_id} onChange={handleChange} required/>
                <input type="submit" value="Submit" />
            </form>
        </div>
    );
}

export default AddParti;
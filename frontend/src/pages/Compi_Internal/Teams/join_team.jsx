import React, {useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';
import { UserAuth } from '../../../contexts/AuthContext';
import axios from 'axios';

const JoinTeam = () => {

    const { compiName } = useParams();
    const {user} = UserAuth();

    const [formData, setFormData] = useState({
        team_id: '',
        parti_name: user?.displayName,
        parti_email: user?.email,
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
          parti_name: user?.displayName,
          parti_email: user?.email,
        };
        
        console.log(data)
        

        axios
          .put('/api/join_team/', data, config)
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
                <label>Team ID
                <input type="text" name="team_id" value={formData.team_id} onChange={handleChange} />
                </label>
                <input type="submit" value="Submit" />
            </form>
        </div>
     );
}
 
export default JoinTeam;
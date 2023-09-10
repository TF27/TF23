import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';
import { UserAuth } from '../../../../contexts/AuthContext';
import styles from '../reg.module.css';
import bgimg from '../../static/img/exp_bg.png';

const Create_Team = () => {

    axios.defaults.xsrfCookieName = 'csrftoken';
    axios.defaults.xsrfHeaderName = 'X-CSRFToken';

    const { compiName } = useParams();
    const { user } = UserAuth();
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
        axios.post('/api/create_team/', formData)
            .then((response) => {
                alert('Formed succesfully!!');
                navigate(`/competitions/${compiName}`);
                // Handle the success response
                console.log(response)
            })
            .catch((error) => {
                console.error('Error:', error);
                if (error.response && error.response.data && error.response.data.error === 'User not registered') {
                    // User is not registered, show an alert or take appropriate action
                    alert('One of the user is not registered. Please register before creating a team.');
                } else {
                    // Handle other errors
                }
            });
    }
    

    const handleFocus = (e) => {
        const label = e.target.previousSibling;
        label.classList.add(styles.floatingLabel);
    };

    const handleBlur = (e) => {
        if (e.target.value === '') {
            const label = e.target.previousSibling;
            label.classList.remove(styles.floatingLabel);
        }
    };
    const top = {
        backgroundImage: `url(${bgimg})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '100vh',
        position: 'absolute',
        width: '100%',
        zIndex: '-1',
        top: '0',
        backgroundAttachment: 'fixed',
    }

    return (
        <div style={top}>
            <div className={styles.bgitis}>
                <div className={styles.overlay}>
            {/* {compiName} */}
            <form className={styles.godhelp} onSubmit={handleSubmit}>
                <div className={styles.regFormContainer}>
                    <div className={`row ${styles.multiWrapper}`}>
                    <div className={`col-md-6 ${styles.inputWrapper}`}>
                        <label className={`${styles.floatingLabel} ${styles.formLabel}`}>Team Leader Name:</label>
                        <input 
                            type="text" 
                            name="team_leader_name" 
                            value={user?.displayName} 
                            onFocus={handleFocus}
                            onChange={handleChange}                                         
                            onBlur={handleBlur}
                            className={styles.formInput}  
                            disabled required
                        />
                    </div>
                    <div className={`col-md-6 ${styles.inputWrapper}`}>
                        <label className={`${styles.floatingLabel} ${styles.formLabel}`}>Team Leader Email:</label>
                        <input 
                            type="email"
                            name="team_leader_email" 
                            value={user?.email} 
                            onFocus={handleFocus}
                            onChange={handleChange}   
                            onBlur={handleBlur}
                            className={styles.formInput} 
                            disabled required
                        />
                    </div>
                    </div>

                    <div className={`row ${styles.multiWrapper}`}>
                    <div className={`col-md-6 ${styles.inputWrapper}`}>
                        <label className={`${styles.floatingLabel1} ${styles.formLabel}`}>Participant 1 Name:</label>
                        <input 
                            type="text"  
                            name="parti1_name" 
                            value={formData.parti1_name} 
                            onChange={handleChange} 
                            onFocus={handleFocus}
                            onBlur={handleBlur}
                            className={styles.formInput}
                        />
                    </div>
                    <div className={`col-md-6 ${styles.inputWrapper}`}>
                        <label className={`${styles.floatingLabel1} ${styles.formLabel}`}>Participant 1 Email:</label>
                        <input 
                            type="email" 
                            name="parti1_email" 
                            value={formData.parti1_email} 
                            onChange={handleChange} 
                            onFocus={handleFocus}
                            onBlur={handleBlur}
                            className={styles.formInput}
                        />
                    </div>
                    </div>
                    <div className={`row ${styles.multiWrapper}`}>
                    <div className={`col-md-6 ${styles.inputWrapper}`}>
                        <label className={`${styles.floatingLabel1} ${styles.formLabel}`}>Participant 2 Name:</label>
                        <input 
                            type="text"  
                            name="parti2_name" 
                            value={formData.parti2_name} 
                            onChange={handleChange} 
                            onFocus={handleFocus}
                            onBlur={handleBlur}
                            className={styles.formInput}
                        />
                    </div>
                    <div className={`col-md-6 ${styles.inputWrapper}`}>
                        <label className={`${styles.floatingLabel1} ${styles.formLabel}`}>Participant 2 Email:</label>
                        <input 
                            type="email" 
                            name="parti2_email" 
                            value={formData.parti2_email} 
                            onChange={handleChange} 
                            onFocus={handleFocus}
                            onBlur={handleBlur}
                            className={styles.formInput}
                        />
                    </div>
                    </div>

                <div className={`row ${styles.multiWrapper}`}>
                <div className={`col-md-6 ${styles.inputWrapper}`}>
                    <label className={`${styles.floatingLabel1} ${styles.formLabel}`}>
                    Participant 3 Name:
                    </label>
                    <input 
                        type="text" 
                        name="parti3_name" 
                        value={formData.parti3_name} 
                        onChange={handleChange} 
                        onFocus={handleFocus}
                        onBlur={handleBlur}
                        className={styles.formInput}
                    />   
                </div>
                <div className={`col-md-6 ${styles.inputWrapper}`}>
                    <label className={`${styles.floatingLabel1} ${styles.formLabel}`}>
                    Participant 3 Email:
                    </label>
                    <input 
                        type="email" 
                        name="parti3_email" 
                        value={formData.parti3_email} 
                        onChange={handleChange} 
                        onFocus={handleFocus}
                        onBlur={handleBlur}
                        className={styles.formInput}
                    />
                </div>
                </div>
                <input 
                    type="submit" 
                    value="Submit" 
                    onChange={handleChange}
                    className={styles.formSubmit} 
                />
                
                
                </div>
            </form >
                    
            </div>   
            </div>    
        </div >  
    );
}


export default Create_Team;
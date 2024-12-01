import React, { useState } from 'react';
import {useLocation, useNavigate} from 'react-router-dom';
import axios from 'axios';
import styles from './notify.module.css';

const Notify = () => {

    axios.defaults.xsrfCookieName = 'csrftoken';
    axios.defaults.xsrfHeaderName = 'X-CSRFToken';

    const location = useLocation().pathname;
    const locations = location.split('/').filter(segment => segment !== '');
    const parent = locations[0] // gets parent route from array

    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        username: '',
        email: '',
        phoneNum: '',
        loc: parent,
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

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

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post("/api/notify/", formData);
            window.alert("Success: Your data has been submitted!"); // Handle the API response as needed
            navigate('/workshops')
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <div className={styles.notify}>
            <div>
                <h1 style={{ paddingTop:'100px',marginBottom:'10px'}} >NOTIFY ME</h1>
            </div>
            <div>
                <form onSubmit={handleSubmit} autocomplete="off">
                    {/* Custom HTML with floating label effect */}
                    <div className={styles.notiContainer}>
                    <div className={styles.notiInputWrapper}>
                        <label className={styles.notiLabel}>Username</label>
                        <input
                            type="text"
                            id="username"
                            name="username"
                            value={formData.username}
                            onChange={handleChange}
                            onFocus={handleFocus}
                            onBlur={handleBlur}
                            className={styles.notiInput}
                            autocomplete="off"
                        />
                    </div>
                    <div className={styles.notiInputWrapper}>
                        <label className={styles.notiLabel}>Email</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            onFocus={handleFocus}
                            onBlur={handleBlur}
                            className={styles.notiInput}
                             autocomplete="off"
                        />
                    </div>
                    <div className={styles.notiInputWrapper}>
                        <label className={styles.notiLabel}>Phone (Preferably Whatsapp)</label>
                        <input
                            type="tel"
                            id="phoneNum"
                            name="phoneNum"
                            value={formData.phoneNum}
                            onChange={handleChange}
                            onFocus={handleFocus}
                            onBlur={handleBlur}
                            className={styles.notiInput}
                            autocomplete="off"
                        />
                    </div>
                    </div>
                    <div>
                        <div className={styles.buttondiv}>
                            <button   button type="submit" className={styles.button }>Submit</button>
                        </div>
                    </div>
                    
                </form>
            </div>
        </div>
    );
}

export default Notify;

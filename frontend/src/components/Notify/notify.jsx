import React, { useState } from 'react';
import axios from 'axios';
import styles from './notify.module.css';

const Notify = () => {
    const [formData, setFormData] = useState({
        username: '',
        email: '',
        phoneNum: ''
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
            console.log(response.data); // Handle the API response as needed
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <div className={styles.notify}>
            <div>
                <h1>NOTIFY ME</h1>
            </div>
            <div>
                <form onSubmit={handleSubmit}>
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

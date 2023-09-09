import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios'
import { UserAuth } from '../../../contexts/AuthContext';
import styles from './reg.module.css';

import bgimg from './../static/img/exp_bg.png';

const Reg = () => {

    axios.defaults.xsrfCookieName = 'csrftoken';
    axios.defaults.xsrfHeaderName = 'X-CSRFToken';

    const { compiName } = useParams();
    const { user } = UserAuth();
    const googleId = user.uid;
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        compi: compiName,
        name: user?.displayName,
        email: user?.email,
        google_id: user?.uid,
        phoneno: '',
        city: '',
        country: '',
        gender: '',
        zonals: '',
        pincode: '',
        address: '',
        instiname: '',
        instiadress: '',
        instipincode: '',
        yearofstudy: '',
        // ca_refral: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
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

    function checkInputValues() {
        const inputs = document.querySelectorAll('input');
      
        inputs.forEach((input) => {
            handleFocus({ target: input }); // Call focus event on each input
            handleBlur({ target: input }); // Call blur event on each input
        });
    }
    setInterval(checkInputValues, 100);


    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(formData);
        axios.post('/api/compi_reg/', formData)
            .then((response) => {
                console.log('Added Successfully!!');
                navigate(`/competitions/${compiName}`);
            })
            .catch((error) => {
                console.error('Error:', error);
                // Handle the error
            });
    }

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
        <div style={top} className={styles.compiReg}>
            <div className={styles.bgitis}>
                <div className={styles.overlay}>
                    <div className={styles.reg_head}>
                        <div>
                            <img src={user?.photoURL} alt='User' />
                        </div>
                        <div className={styles.head_n}>
                            <div><h2>{user?.displayName}</h2></div>
                            <hr></hr>
                            <div>Every Field is Compulsory</div>
                        </div>
                    </div>
                    <div>
                        <form onSubmit={handleSubmit} autoComplete="off">
                            <div className={styles.regFormContainer}>
                                <div className={styles.inputWrapper} style={{ display: 'none' }}>
                                    <label className={`${styles.floatingLabel} ${styles.formLabel}`}>Name</label>
                                    <input
                                        type="text"
                                        name="name"
                                        value={user.displayName}
                                        onChange={handleChange}
                                        className={styles.formInput}
                                        disabled
                                        autoComplete="off"
                                        
                                    />
                                </div>
                                <div className={`row ${styles.multiWrapper}`}>
                                    <div className={`col-md-6 ${styles.inputWrapper}`}>
                                        <label className={`${styles.floatingLabel} ${styles.formLabel}`}>Email</label>
                                        <input
                                            type="email"
                                            name="email"
                                            value={user.email}
                                            onChange={handleChange}
                                            className={styles.formInput}
                                            disabled
                                            autoComplete="off"
                                            
                                        />
                                    </div>
                                    <div className={`col-md-6 ${styles.inputWrapper}`}>
                                        <label className={styles.formLabel}>Phone No.</label>
                                        <input
                                            type="number"
                                            name="phoneno"
                                            value={formData.phoneno}
                                            onChange={handleChange}
                                            className={styles.formInput}
                                            autoComplete="off"
                                            
                                            required
                                        />
                                    </div>
                                </div>
                                <div className={`row ${styles.multiWrapper}`}>
                                <div className={`col-md-6 ${styles.inputWrapper}`}>
                                    <label className={`${styles.floatingLabel} ${styles.formLabel}`}>Gender</label>
                                    <select
                                        name="gender"
                                        value={formData.gender}
                                        onChange={handleChange}
                                        className={styles.formInput}
                                        required
                                    >
                                        <option value="" style={{ display: 'none' }} className={styles.genderOps}>Select</option>
                                        <option value="M" className={styles.genderOps}>Male</option>
                                        <option value="F" className={styles.genderOps}>Female</option>
                                        <option value="O" className={styles.genderOps}>Other</option>
                                    </select>
                                </div>
                                    <div className={`col-md-6 ${styles.inputWrapper}`}>
                                        <label className={styles.formLabel}>City</label>
                                        <input
                                            type="text"
                                            name="city"
                                            value={formData.city}
                                            onChange={handleChange}
                                            className={styles.formInput}
                                            autoComplete="off"
                                            required
                                        />
                                    </div>
                                </div>
                                    <div className={`row ${styles.multiWrapper}`}>
                                    <div className={`col-md-6 ${styles.inputWrapper}`}>
                                    <label className={styles.formLabel}>Pincode</label>
                                    <input
                                        type="number"
                                        name="pincode"
                                        value={formData.pincode}
                                        onChange={handleChange}
                                        className={styles.formInput}
                                        required
                                        autoComplete="off"
                                    />
                                </div>
                                    <div className={`col-md-6 ${styles.inputWrapper}`}>
                                        <label className={styles.formLabel}>Country</label>
                                        <input
                                            type="text"
                                            name="country"
                                            value={formData.country}
                                            onChange={handleChange}
                                            className={styles.formInput}
                                            autoComplete="off"
                                            required
                                        />
                                    </div>
                                </div>
                                {compiName === "meshmerize" || compiName === "cozmoclench" || compiName === "codecode" || compiName ==="techfest olympiad" || compiName ==="mechanzo league"? (
                                    <div className={styles.inputWrapper}>
                                        <label className={`${styles.floatingLabel} ${styles.formLabel}`}>Nearby Zonal</label>
                                        <select
                                            name="zonals"
                                            value={formData.zonals}
                                            onChange={handleChange}
                                            className={styles.formInput}
                                            required
                                        >
                                            <option value="" style={{ display: 'none' }} className={styles.genderOps}>Nearby Zonals</option>
                                            <option value="1" className={styles.genderOps}>Mumbai</option>
                                            <option value="2" className={styles.genderOps}>Bhopal</option>
                                            <option value="3" className={styles.genderOps}>Lucknow</option>
                                            <option value="4" className={styles.genderOps}>Jaipur</option>
                                            <option value="5" className={styles.genderOps}>Bangalore</option>
                                        </select>
                                    </div>) : <div></div>}
                                
                                
                                <div className={styles.inputWrapper}>
                                    <label className={styles.formLabel} >Address</label>
                                    <input
                                        type="text"
                                        name="address"
                                        value={formData.address}
                                        onChange={handleChange}
                                        className={styles.formInput}
                                        autoComplete="off"
                                        required
                                    />
                                </div>
                                <div className={styles.inputWrapper}>
                                    <label className={styles.formLabel} >Institute Name</label>
                                    <input
                                        type="text"
                                        name="instiname"
                                        value={formData.instiname}
                                        onChange={handleChange}
                                        className={styles.formInput}
                                        required
                                        autoComplete="off"
                                    />
                                </div>
                                <div className={styles.inputWrapper}>
                                    <label className={styles.formLabel} >Institute Address</label>
                                    <input
                                        type="text"
                                        name="instiadress"
                                        value={formData.instiadress}
                                        onChange={handleChange}
                                        className={styles.formInput}
                                        autoComplete="off"
                                        required
                                    />
                                </div>
                                <div className={styles.inputWrapper}>
                                    <label className={styles.formLabel} >Institute Pincode</label>
                                    <input
                                        type="number"
                                        name="instipincode"
                                        value={formData.instipincode}
                                        required
                                        onChange={handleChange}
                                        className={styles.formInput}
                                        autoComplete="off"
                                        
                                    />
                                </div>
                                <div className={styles.inputWrapper}>
                                    <label className={`${styles.floatingLabel} ${styles.formLabel}`}>Year of Study </label>
                                    <select
                                        name="yearofstudy"
                                        value={formData.yearofstudy}
                                        onChange={handleChange}
                                        className={styles.formInput}
                                        required
                                    >
                                        <option value="" style={{ display: 'none' }} className={styles.genderOps}>Select year of Study</option>
                                        <option value="1" className={styles.genderOps}>1st Year</option>
                                        <option value="2" className={styles.genderOps}>2nd Year</option>
                                        <option value="3" className={styles.genderOps}>3rd Year</option>
                                        <option value="4" className={styles.genderOps}>4th Year</option>
                                        <option value="5" className={styles.genderOps}>5th Year</option>
                                        <option value="16" className={styles.genderOps}>6th Standard</option>
                                        <option value="17" className={styles.genderOps}>7th Standard</option>
                                        <option value="18" className={styles.genderOps}>8th Standard</option>
                                        <option value="19" className={styles.genderOps}>9th Standard</option>
                                        <option value="20" className={styles.genderOps}>10th Standard</option>
                                        <option value="21" className={styles.genderOps}>11th Standard</option>
                                        <option value="22" className={styles.genderOps}>12th Standard</option>
                                    </select>
                                </div>
                                <div>
                                <button type="submit" className={styles.formSubmit}>Submit</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Reg;
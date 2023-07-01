import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios'
import { UserAuth } from '../../contexts/AuthContext';
import { useNavigate } from 'react-router-dom';

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
        pincode: '',
        address: '',
        instiname: '',
        instiadress: '',
        instipincode: '',
        yearofstudy: '',
        ca_refral: '',
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
        axios.post('/api/compi_reg/', formData)
            .then((response) => {
                console.log('Added Successfully!!');
                // navigate(`/competitions/${compiName}`);
                // Handle the success response
            })
            .catch((error) => {
                console.error('Error:', error);
                // Handle the error
            });
    }

    return (
        <div>
            Register Here
            <h1>{compiName}, {user.displayName}</h1>
            <form onSubmit={handleSubmit}>
                <label>Name
                    <input type="text" name="name" value={user.displayName} onChange={handleChange} disabled /></label>
                <br />
                <label>Email
                    <input type="email" name="email" value={user.email} onChange={handleChange} disabled /></label>
                <br />
                <label>Phone No.</label>
                <input type="text" name="phoneno" value={formData.phoneno} onChange={handleChange} />
                <br />
                <label>City</label>
                <input type="text" name="city" value={formData.city} onChange={handleChange} />
                <br />
                <label>Country</label>
                <input type="text" name="country" value={formData.country} onChange={handleChange} />
                <br />
                <label>
                    Gender:
                    <select name="gender" value={formData.gender} onChange={handleChange}>
                        <option value="">Select</option>
                        <option value="M">Male</option>
                        <option value="F">Female</option>
                        <option value="O">Other</option>
                    </select>
                </label>
                <br />
                <label>Pincode</label>
                <input type="text" name="pincode" value={formData.pincode} onChange={handleChange} />
                <br />
                <label>Address</label>
                <input type="text" name="address" value={formData.address} onChange={handleChange} />
                <br />
                <label>Institute Name</label>
                <input type="text" name="instiname" value={formData.instiname} onChange={handleChange} />
                <br />
                <label>Institute Address</label>
                <input type="text" name="instiadress" value={formData.instiadress} onChange={handleChange} />
                <br />
                <label>Institute Pincode</label>
                <input type="text" name="instipincode" value={formData.instipincode} onChange={handleChange} />
                <br />
                <label>Year of Study </label>
                <select name="yearofstudy" value={formData.yearofstudy} onChange={handleChange}>
                    <option value="">Select</option>
                    <option value="1">1st Year</option>
                    <option value="2">2nd Year</option>
                    <option value="3">3rd Year</option>
                    <option value="4">4th Year</option>
                    <option value="5">5th Year</option>
                    <option value="16">6th Standard</option>
                    <option value="17">7th Standard</option>
                    <option value="18">8th Standard</option>
                    <option value="19">9th Standard</option>
                    <option value="20">10th Standard</option>
                    <option value="21">11th Standard</option>
                    <option value="22">12th Standard</option>
                </select>
                <br />
                <label>CA Referral</label>
                <input type="text" name="ca_refral" value={formData.ca_refral} onChange={handleChange} />
                <br />
                <button type="submit">Submit</button>
            </form>
        </div>
    );
}

export default Reg;
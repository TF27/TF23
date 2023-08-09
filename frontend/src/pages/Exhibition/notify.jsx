import React, { useState } from 'react';
import axios from 'axios';
import notifyMeImage from './NotifyMe.png'; // Import the image file
import topHighlightsImage from './TopHigh.png';

const NotifyForm = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    phoneNum: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
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
    <form onSubmit={handleSubmit} style={styles.container}>
      <div style={styles.notifyContainer}>
        <img src={notifyMeImage} alt="Notify Me" style={styles.image} />
      </div>
      <div style={styles.inputContainer}>
        <div style={styles.inputGroup}>
          <label style={styles.label}></label>
          <input
            type="text"
            name="username"
            placeholder="Name"
            value={formData.username}
            onChange={handleChange}
            style={styles.input}
          />
        </div>
        <div style={styles.inputGroup}>
          <label style={styles.label}></label>
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            style={styles.input}
          />
        </div>
        <div style={styles.inputGroup}>
          <label style={styles.label}></label>
          <input
            type="number"
            name="phoneNum"
            placeholder="Phone (Preferably Whatsapp)"
            value={formData.phoneNum}
            onChange={handleChange}
            style={styles.input}
          />
        </div>
      </div>
      <button type="submit" style={styles.button}>Register</button>
      <div style={styles.TopHighContainer}>
        <img src={topHighlightsImage} alt="Top Highlights" style={styles.image} />
      </div>
    </form>
  );
};

const styles = {
   image: {
        width: '500px', // Adjust the size as needed
        height: 'auto', // Maintain aspect ratio
      },
      
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
    fontFamily: 'FORUM',
  },
  TopHighContainer: {
    display: 'flex',
    flexDirection: 'column', // Adjust this to change positioning
    alignItems: 'bottom',
    justifyContent: 'center',
    marginBottom: '0px',
    marginTop:'70px',
    fontFamily: 'FORUM',
  },
  notifyContainer: {
    display: 'flex',
    flexDirection: 'column', // Adjust this to change positioning
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: '30px',
  },
  notifyText: {
    fontSize: '50px',
    fontWeight: 'bold',
    fontFamily: 'FORUM',
    color:'#DAA520',
    textShadow: '0px 0px 10px rgba(218, 165, 32, 0.8)',
  },
  inputContainer: {
    display: 'flex',
    flexDirection: 'row',  // Keep the horizontal layout for inputs
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputGroup: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    margin: '5px',
  },
  label: {
    marginBottom: '5px',
  },
  input: {
    width: '300px',
    padding: '10px',
    borderRadius: '0px',
    border: '1.5px solid #DAA520',
    background: 'black',
    fontSize: '16px',
    color: 'white',
    fontFamily: 'FORUM',
  },
  button: {
    width: '100px',
    padding: '10px',
    margin: '5px',
    borderRadius: '0px',
    border: '2px solid #DAA520',
    background: 'black',
    color: 'white',
    fontSize: '16px',
    cursor: 'pointer',
    fontFamily: 'FORUM',
  },
};

export default NotifyForm;

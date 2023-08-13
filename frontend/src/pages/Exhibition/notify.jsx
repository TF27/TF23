import React, { useState } from 'react';
import axios from 'axios';
import notifyMeImage from './NotifyMe.png'; // Import the image file
import topHighlightsImage from './TopHigh.png';
// import Border from '../../components/DoubleBorder/doubleborder';

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
            pattern="[0-9]*" // Allow only numeric input
            inputMode="numeric"
          />
        </div>
      </div>
      <button type='submit'><Border Text='Register' width='8vw' height='3vw' fontsize='1.5vw' Color='#DAA520' fontColor='#A7E9FF' family='Forum'/></button>
      <div style={styles.TopHighContainer}>
        <img src={topHighlightsImage} alt="Top Highlights" style={styles.image} />
      </div>
    </form>
  );
};
const Border = ({Text, height, width, fontsize, Color, family, fontColor}) => {

    const reactangle1 = {
        background:'black',
        height: height,
        width: width,
        border: '2px solid #AB8D60',
        borderColor: Color,
        position: 'absolute',
        transform: 'translate(-50%, 0%)',
        
    }
    const reactangle2 = {
        background:'black',
        height: height,
        width: width,
        border: '2px solid #AB8D60',
        borderColor: Color,
        marginLeft: '5px',
        marginTop: '5px',
        position: 'absolute',
        fontSize: fontsize,
        fontFamily: family,
        color: fontColor,
        transform: 'translate(-50%, 0%)',
    }
    const reactangle3 = {
        height: height,
        width: width,
        border: '2px solid #AB8D60',
        borderColor: Color,
        position: 'absolute',
        transform: 'translate(-50%, 0%)',
        zIndex: 2, // Increase the zIndex value to 2
    }

    return ( 
        <div className="double_border">
            <div class="rectangle1" style={reactangle1}></div>
            <div class="rectangle1" style={reactangle3}></div>
            <div class="rectangle2" style={reactangle2}>{Text}</div>
        </div>
     );
}

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
    color:'#AB8D60',
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
    border: '1.5px solid #AB8D60',
    background: 'black',
    fontSize: '16px',
    color: 'white',
    fontFamily: 'FORUM',
    overflow: 'hidden',
    /* Hide the increment and decrement buttons */
    
},
};

export default NotifyForm;

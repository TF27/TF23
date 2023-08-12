import React from 'react';
import WorldMap from './map';
import NotifyForm from './notify';
import backgroundImage from './back.png'; // Import the background image

const Exhibition = () => {
  const styles = {
    container: {
      backgroundImage: `url(${backgroundImage})`, // Set the background image
      backgroundSize: 'cover', // Cover the entire container
      backgroundRepeat: 'repeat-on',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: '',
      height: '180vh',
      width:'100vw',
      fontFamily: 'FORUM',
      position:'relative',
      top:'100px'
    },
  };

  return (
    <div style={styles.container}>
      <NotifyForm />
      <WorldMap />
    </div>
  );
};

export default Exhibition;

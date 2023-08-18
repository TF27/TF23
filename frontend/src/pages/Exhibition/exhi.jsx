import React from 'react';
import backgroundImage from './assets/back.png'; // Import the background image
import Notify from "../../components/Notify/notify";
import OurReach from "./ourreach";
import WorldMap from "./map";
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
      <Notify />
      <WorldMap />
    </div>
  );
};

export default Exhibition;


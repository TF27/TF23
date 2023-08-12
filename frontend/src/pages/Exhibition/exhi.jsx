<<<<<<< HEAD
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
=======
import WorldMap from "./map";
import Notify from "../../components/Notify/notify";
import OurReach from "./ourreach";

const Exhibition =()=>{
    
    return(
        <div className="Exhibitions">
            <Notify/>
            <WorldMap/>
            <OurReach />
        </div>
    )
}
export default Exhibition;
>>>>>>> b76224a0030c07ef3d7f1ac690aad38799866b6d

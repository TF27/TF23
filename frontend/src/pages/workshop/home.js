import React from 'react';
import ImageOne from './components/ImageOne';
import ImageTwo from './components/ImageTwo';


function Workshop() {
  return (
    <div style={{height:'120vh', position: 'absolute', zIndex: '-1'}}  >
      {/* <ImageOne /> */}
      {/* <div></div> */}
      <ImageTwo/>
    </div> 
  );
}

export default Workshop;
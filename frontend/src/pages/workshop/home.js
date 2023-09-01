import React from 'react';
import ImageOne from './components/ImageOne';
import ImageTwo from './components/ImageTwo';


function Workshop() {
  return (
    <div style={{height:'120vh',scrollBehavior:'smooth'}}  >
      <ImageOne />
      <ImageTwo/>
    </div> 
  );
}

export default Workshop;
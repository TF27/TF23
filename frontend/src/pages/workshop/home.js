import React from 'react';
import ImageOne from './components/ImageOne';
import ImageTwo from './components/ImageTwo';


function Workshop() {
  return (
    <div style={{height:'120vh'}}  >
      <ImageOne />
      {/* <div></div>Team discount and Early bird offer extended till 10th December! */}
      <ImageTwo/>
    </div> 
  );
}

export default Workshop;
import React from 'react'
import bg from './assets/back.jpg'
import pdfFile from './assets/Lookback_.pdf';

const Lookback = () => {
    const bgHaiJi = {
        backgroundImage: `url(${bg})`, // Background image
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center center",
        width: "100vw",
        height:"100vh",
        position: "absolute",
        top: "0",
        zIndex: "-1",
        backgroundAttachment: "fixed",
      };
      
      

  return (
    <div className='yoyo' style={bgHaiJi}>
      <h1>.                                                  . </h1>
      
      <embed src={pdfFile} type="application/pdf" width="70%" height="600px" margin-top="500px"/>
    </div>
  )
}

export default Lookback

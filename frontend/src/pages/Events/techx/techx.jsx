import React, { useState } from 'react';
import {QRCodeSVG} from 'qrcode.react';

const QrCodeForm = () => {

  return (
    <div style={{marginTop: '30vh', padding: '30px', background: 'aqua,'}}>
      <QRCodeSVG value="cuzallis11@gmail.com" size='256'/>
    </div>
  );
};

export default QrCodeForm;
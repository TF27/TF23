// contact.jsx

import React from 'react';
import './contact.css'; // Import the contact.css file for styling

function ContactCard({ image, headText, emailText, phoneNumberText }) {

  return (
    <div className="plate">
        <img src={image} alt="Person" className="contact-image" />
        <h2 className="contact-head">{headText}</h2>
        <p className="contact-email">{emailText}</p>
        <p className="contact-phone">{phoneNumberText}</p>
      </div>
  );
}

export default ContactCard;

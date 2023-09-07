// contact.jsx

import React from 'react';
import './contact.css'; // Import the contact.css file for styling

function ContactCard({ image, headText, emailText, phoneNumberText }) {

  return (
    <div className="plate">
        <img src={image} alt="Person" className="contact-image" />
        <h2 className="contact-head">{headText}</h2>
        <a href={`mailto:${emailText}`}><p className="contact-email">{emailText}</p></a>
        <a href={`tel:${phoneNumberText}`}><p className="contact-phone">{phoneNumberText}</p></a>
      </div>
  );
}

export default ContactCard;

import React from 'react';
import Border from '../DoubleBorder/doubleborder';

const WhatsappShareButton = () => {
  const handleShare = () => {
    const message = "This is a templated message"; // Set your templated message here
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `whatsapp://send?text=${encodedMessage}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div>
      <h3>Whatsapp sharing</h3>
      <button onClick={handleShare} className="mobileShow">
        Share
      </button>
    </div>
  );
};

export default WhatsappShareButton;

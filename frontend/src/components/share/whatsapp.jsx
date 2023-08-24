import React from 'react';

const WhatsappShareButton = () => {
  const handleShare = () => {
    const message = "This is a templated message"; // Set your templated message here
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `whatsapp://send?text=${encodedMessage}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className='whatsappShare'>
      <div onClick={handleShare}>Share</div>
    </div>
  );
};

export default WhatsappShareButton;

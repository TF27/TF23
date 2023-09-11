import React from 'react';
import styles from './share.module.css';

const WhatsappShareButton = () => {
  // const handleShare = () => {
  //   const message = "This is a templated message"; // Set your templated message here
  //   const encodedMessage = encodeURIComponent(message);
  //   const whatsappUrl = `whatsapp://send?text=${encodedMessage}`;
  //   window.open(whatsappUrl, '_blank');
  // };

  const handleShare = () => {
    alert('Feature Coming Soon')
  }

  return (
    <div className='whatsappShare'>
      <div onClick={handleShare} className={styles.sharebtn}>Share</div>
    </div>
  );
};

export default WhatsappShareButton;

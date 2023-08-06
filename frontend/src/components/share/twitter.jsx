import React from 'react';

const TwitterShareButton = () => {
  const handleShare = () => {
    const message = "Check out this awesome content!"; // Set your message here
    const encodedMessage = encodeURIComponent(message);
    const url = "https://example.com"; // Replace this with the URL you want to share
    const encodedUrl = encodeURIComponent(url);
    const twitterUrl = `https://twitter.com/intent/tweet?text=${encodedMessage}&url=${encodedUrl}`;
    window.open(twitterUrl, '_blank');
  };

  return (
    <div>
      <h3>Twitter sharing</h3>
      <button onClick={handleShare} className="mobileShow">
        Share to Twitter
      </button>
    </div>
  );
};

export default TwitterShareButton;

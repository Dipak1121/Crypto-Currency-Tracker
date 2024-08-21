export const handleShare = () => {
    const shareData = {
      title: 'Track Crypto in Real Time',
      text: 'Track crypto through a public API in real time. Visit the dashboard to do so!',
      url: window.location.href,  // The current page URL
    };

    if (navigator.share) {
      navigator.share(shareData)
        .then(() => console.log('Successful share'))
        .catch((error) => console.log('Error sharing', error));
    } else {
      // Fallback for desktop browsers
      alert('Web Share API is not supported in your browser.');
    }
  };

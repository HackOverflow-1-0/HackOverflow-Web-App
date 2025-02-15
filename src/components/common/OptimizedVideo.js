import React from 'react';

const OptimizedVideo = ({ src, poster, className }) => {
  return (
    <video
      className={className}
      autoPlay
      muted
      loop
      playsInline
      poster={poster}
      preload="auto"
    >
      <source src={src} type="video/mp4" />
    </video>
  );
};

export default OptimizedVideo; 
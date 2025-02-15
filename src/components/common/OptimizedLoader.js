import React from 'react';

const OptimizedLoader = () => {
  return (
    <div className="loader-container">
      {/* Use CSS-based loader instead of gif/images when possible */}
      <div className="spinner"></div>
    </div>
  );
};

export default OptimizedLoader;

// Add this CSS to your styles 
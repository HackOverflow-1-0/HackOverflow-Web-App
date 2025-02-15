import React, { Suspense, lazy } from 'react';

const OptimizedGif = ({ src, alt, className }) => {
  // Only load gif when it's in viewport
  const LazyGif = lazy(() => import('./LazyGif'));

  return (
    <Suspense fallback={<div className="loading-placeholder">Loading...</div>}>
      <LazyGif src={src} alt={alt} className={className} />
    </Suspense>
  );
};

export default OptimizedGif; 
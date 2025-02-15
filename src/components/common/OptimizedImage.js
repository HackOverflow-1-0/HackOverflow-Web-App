import React from 'react';
import { getImageDimensions } from '../../utils/imageOptimization';

const OptimizedImage = ({ 
  src, 
  alt, 
  className, 
  priority = false,
  sizes = "(max-width: 640px) 100vw, (max-width: 768px) 768px, 1024px"
}) => {
  const dimensions = getImageDimensions('lg');

  return (
    <img
      src={src}
      alt={alt}
      className={className}
      loading={priority ? "eager" : "lazy"}
      width={dimensions.width}
      height={dimensions.height}
      decoding="async"
      sizes={sizes}
      onError={(e) => {
        e.target.onerror = null;
        e.target.src = 'fallback-image-path.webp'; // Add a fallback image
      }}
    />
  );
};

export default OptimizedImage; 
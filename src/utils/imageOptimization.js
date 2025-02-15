// Utility function for image optimization
export const getImageDimensions = (screenSize) => {
  switch(screenSize) {
    case 'sm':
      return { width: 640, height: 360 };  // For mobile
    case 'md':
      return { width: 768, height: 432 };  // For tablets
    case 'lg':
      return { width: 1024, height: 576 }; // For laptops
    case 'xl':
      return { width: 1920, height: 1080 }; // For large screens
    default:
      return { width: 1024, height: 576 };
  }
};

export const generateSrcSet = (imagePath) => {
  // Replace with your actual image dimensions
  return `
    ${imagePath}-sm.webp 640w,
    ${imagePath}-md.webp 768w,
    ${imagePath}-lg.webp 1024w,
    ${imagePath}-xl.webp 1920w
  `;
}; 
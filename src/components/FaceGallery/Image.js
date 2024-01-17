import React from "react";
import "./Image.css";

export const Image = ({
  className,
  image,
  alt,
  objectCover,
  as: Component = "div",
  ...rest
}) => {
  return (
    <Component className={className} {...rest}>
      <img
        src={image}
        alt={alt}
        className={`ImageGallery w-full h-full rounded-lg ${objectCover}`}
      />
    </Component>
  );
};

import React from "react";

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
      <img src={image} alt={alt} className={`w-full h-full rounded-lg ${objectCover}`} />
    </Component>
  );
};

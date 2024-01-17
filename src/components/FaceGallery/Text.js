import React from "react";

export const Text = ({
  className,
  children,
  as: Component = "div",
  ...rest
}) => {
  return (
    <Component className={className} {...rest}>
      {children}
    </Component>
  );
};

import React from "react";

const Button = ({ className, children, ...rest }) => {
  return (
    <button {...rest} className={className}>
      {children}
    </button>
  );
};

export default Button;

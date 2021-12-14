import React from "react";
import "./button.css";

export const Button = ({
  children,
  type,
  handleClick,
  buttonStyle,
  buttonSize,
}) => {
  return (
    <button
      className={`btn ${buttonStyle} ${buttonSize}`}
      type={type}
      onClick={handleClick}
    >
      {children}
    </button>
  );
};

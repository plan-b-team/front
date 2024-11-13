import React from "react";

const Button = ({
  type = "button",
  children,
  state = "default",
  onClick,
  width,
  height,
  fontSize,
}) => {
  const className = [
    "Button",
    state === "default" ? "Button__default" : "",
  ].join(" ");

  const style = {
    width,
    height,
    fontSize,
  };

  return (
    <button
      type={type}
      className={className}
      onClick={onClick}
      style={style}
      disabled={state === "disabled"}
    >
      {children}
    </button>
  );
};

export default Button;

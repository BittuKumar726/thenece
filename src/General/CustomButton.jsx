import React from "react";

const CustomButton = (props) => {
  const { children, disabled = false, ...rest } = props;
  return (
    <button
      style={{
        fontSize: "20px",
        cursor: "pointer",
      }}
      disabled={disabled} // Apply the disabled attribute
      {...rest}
    >
      {children}
    </button>
  );
};

export default CustomButton;

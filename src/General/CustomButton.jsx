import React from "react";

const CustomButton = (props) => {
  const { children, width = "100px", height = "50px", ...rest } = props;
  return (
    <button
      style={{
        fontSize: "20px",
        cursor: "pointer",
      }}
      {...rest}
    >
      {children}
    </button>
  );
};

export default CustomButton;

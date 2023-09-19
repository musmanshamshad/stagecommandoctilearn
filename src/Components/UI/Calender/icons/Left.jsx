import React from "react";

const Left = ({ ...props }) => {
  return (
    <svg
      {...props}
      width="7"
      height="10"
      viewBox="0 0 7 10"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M6 1L2 5L6 9" stroke="#ADB4C5" strokeWidth="2" />
    </svg>
  );
};

export default Left;

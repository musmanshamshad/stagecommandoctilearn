import React from "react";

const DownIcon = ({ iconColor }) => {
  return (
    <svg
      width="12"
      height="6"
      viewBox="0 0 8 6"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path opacity="1" d="M1 1L4.5 4L8 1" stroke={iconColor} strokeWidth="2" />
    </svg>
  );
};

export default DownIcon;

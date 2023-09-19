import React from "react";

const DashboardIconSvg = ({ focused, ...props }) => {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 14 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        opacity={focused ? "1" : "0.2"}
        x="0.105286"
        y="0.105469"
        width="4"
        height="4"
        rx="1.4"
        fill="#FBFBFF"
      />
      <rect
        opacity={focused ? "1" : "0.2"}
        x="0.105286"
        y="6.10547"
        width="4"
        height="4"
        rx="1.4"
        fill="#FBFBFF"
      />
      <rect
        opacity={focused ? "1" : "0.2"}
        x="6.10529"
        y="0.105469"
        width="4"
        height="4"
        rx="1.4"
        fill="#FBFBFF"
      />
      <rect
        opacity={focused ? "1" : "0.2"}
        x="6.10529"
        y="6.10547"
        width="7"
        height="7"
        rx="1.4"
        fill="#FBFBFF"
      />
    </svg>
  );
};

export default DashboardIconSvg;
DashboardIconSvg.defaultProps = {
  focused: false,
};

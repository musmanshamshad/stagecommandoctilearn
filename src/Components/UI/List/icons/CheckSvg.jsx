import React from "react";

const CheckSvg = ({ checkColor }) => {
  return (
    <svg
      width="8"
      height="8"
      viewBox="0 0 6 6"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{ marginTop: "-20px" }}
    >
      <g clipPath="url(#clip0_534_9495)">
        <path
          d="M5.47814 1.9812L2.7016 4.75754C2.496 4.96318 2.16247 4.96318 1.95667 4.75754L0.523403 3.32417C0.31772 3.11852 0.31772 2.78496 0.523403 2.57927C0.729126 2.37355 1.06263 2.37355 1.26826 2.5792L2.32925 3.6402L4.73317 1.23626C4.93889 1.03054 5.27242 1.0307 5.47806 1.23626C5.68371 1.44195 5.68371 1.7754 5.47814 1.9812Z"
          fill={checkColor}
        />
      </g>
      <defs>
        <clipPath id="clip0_534_9495">
          <rect
            width="5.26316"
            height="5.26316"
            fill={checkColor}
            transform="translate(0.369141 0.367188)"
          />
        </clipPath>
      </defs>
    </svg>
  );
};

export default CheckSvg;

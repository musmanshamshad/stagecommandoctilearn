import PropTypes from "prop-types";
import React from "react";

const UncheckedIcon = () => {
  return (
    <svg
      width="19"
      height="19"
      viewBox="0 0 19 19"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle opacity="0.1" cx="9.5" cy="9.5" r="9.5" fill="#E015A2" />
    </svg>
  );
};

const CheckedIcon = () => {
  return (
    <svg
      width="19"
      height="19"
      viewBox="0 0 19 19"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle opacity="0.1" cx="9.5" cy="9.5" r="9.5" fill="#E015A2" />
      <circle cx="9.5" cy="9.5" r="6.5" fill="#E015A2" />
      <g clip-path="url(#clip0_470_9735)">
        <path
          d="M11.8535 8.53389L9.21584 11.1714C9.02051 11.3668 8.70366 11.3668 8.50815 11.1714L7.14655 9.80972C6.95115 9.61435 6.95115 9.29747 7.14655 9.10207C7.34199 8.90663 7.65881 8.90663 7.85416 9.10199L8.8621 10.1099L11.1458 7.82621C11.3413 7.63077 11.6581 7.63092 11.8535 7.82621C12.0488 8.02161 12.0488 8.33838 11.8535 8.53389Z"
          fill="white"
        />
      </g>
      <defs>
        <clipPath id="clip0_470_9735">
          <rect width="5" height="5" fill="white" transform="translate(7 7)" />
        </clipPath>
      </defs>
    </svg>
  );
};

const CheckboxIcon = ({ variant }) => {
  switch (variant) {
    case "checked": {
      return (
        <>
          <CheckedIcon />
        </>
      );
    }

    case "unchecked": {
      return (
        <>
          <UncheckedIcon />
        </>
      );
    }

    default: {
      return null;
    }
  }
};

CheckboxIcon.propTypes = {
  variant: PropTypes.any.isRequired,
};

export default CheckboxIcon;

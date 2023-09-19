import React from "react";
import {
  buildStyles,
  CircularProgressbarWithChildren,
} from "react-circular-progressbar";
import CheckSvg from "./icons/CheckSvg";
import PropTypes from "prop-types";
import palette from "./../../../config/palette.js";
import Checked from "../Accordian/PrimaryAccordion/icons/Checked";

const secondStyle = {
  width: "17px",
  height: "auto",
};

const IconBar = ({
  value,
  strokeWidth,
  background,
  pathColor,
  backgroundColor,
  checkColor,
  variant,
}) => {
  if (variant === "default") {
    return <Checked />;
  } else {
    return (
      <div style={secondStyle}>
        <CircularProgressbarWithChildren
          value={value}
          strokeWidth={strokeWidth}
          background={background}
          styles={buildStyles({
            textColor: "black",
            pathColor: pathColor,
            backgroundColor: backgroundColor,
          })}
        >
          <CheckSvg checkColor={checkColor} />
        </CircularProgressbarWithChildren>
      </div>
    );
  }
};

export default IconBar;
IconBar.propTypes = {
  value: PropTypes.number,
  strokeWidth: PropTypes.number,
  background: PropTypes.bool,
  pathColor: PropTypes.string,
  backgroundColor: PropTypes.string,
  checkColor: PropTypes.string,
};
IconBar.defaultProps = {
  value: 100,
  strokeWidth: 10,
  background: true,
  pathColor: palette.colors.primaryModified,
  backgroundColor: "#a5abbb",
  checkColor: "#ffff",
  variant: "default",
};

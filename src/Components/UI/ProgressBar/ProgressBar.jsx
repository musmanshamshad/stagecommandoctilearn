import React from "react";
import { ProgressBarBehind } from "./ProgressBar.style";
import PropTypes from "prop-types";

const ProgressBar = ({
  progressbg,
  percentprogress,
  width,
  height,
  ...props
}) => {
  return (
    <ProgressBarBehind
      {...props}
      percentprogress={percentprogress}
      height={height}
      width={width}
      progressbg={progressbg}
    >
      &nbsp;
    </ProgressBarBehind>
  );
};

export default ProgressBar;

ProgressBar.propTypes = {
  width: PropTypes.string,
  height: PropTypes.string,
  percentprogress: PropTypes.string,
  progressbg: PropTypes.string,
};

ProgressBar.defaultProps = {
  width: "100%",
  height: "5px",
  percentprogress: "80%",
  progressbg: "linear-gradient(136.67deg, #FF409A 8.34%, #C438EF 95.26%)",
};

import React from "react";
import Tooltip from "@mui/material/Tooltip";
import PropTypes from "prop-types";

const ToolTips = ({ children, title, arrow, backgroundColor, color, placement }) => {
  return (
    <Tooltip
      title={title}
      placement={placement}
      componentsProps={{
        tooltip: {
          sx: {
            padding: "10px",
            backgroundColor: { backgroundColor },
            color: { color },
          },
        },
        arrow: {
          sx: {
            color: "#624BA2",
          },
        },
      }}
      arrow={arrow}
    >
      {children}
    </Tooltip>
  );
};

export default ToolTips;
ToolTips.propTypes = {
  arrow: PropTypes.bool,
  title: PropTypes.string,
  backgroundColor: PropTypes.string,
  color: PropTypes.string,
};

ToolTips.defaultProps = {
  title: "add",
  arrow: true,
  backgroundColor: "#624BA2",
  color: "#ffff",
  placement: "bottom"
};

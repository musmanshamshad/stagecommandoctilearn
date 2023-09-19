import React from "react";
import { Wrapper } from "./ColorPicker.style";
import PropTypes from "prop-types";

const ColorPicker = ({ color, getHighlight }) => {
  const clickHighlightHandler = (e) => {
    e.preventDefault();
    getHighlight(color);
  };
  return (
    <Wrapper onClick={clickHighlightHandler} bg={color}>
      &nbsp;
    </Wrapper>
  );
};

export default ColorPicker;

ColorPicker.propTypes = {
  color: PropTypes.string,
};
ColorPicker.defaultProps = {
  color: "rgba(247, 134, 96, 0.7)",
};

import * as React from "react";
import PropTypes from "prop-types";
import { ContainedBtn, OutlinedBtn, TextBtn } from "./ButtonComp.style";

const ButtonComp = ({
  children,
  styleOverrides,
  variant,
  background,
  color,
  fullWidth,
  ...props
}) => {
  const main = background;
  const light = color;
  switch (variant) {
    case "outlined": {
      return (
        <OutlinedBtn
          {...props}
          style={{ ...styleOverrides }}
          variant="contained"
          main={main}
          light={light}
          fullWidth = {fullWidth}
        >
          {children}
        </OutlinedBtn>
      );
    }

    case "contained": {
      return (
        <ContainedBtn
          {...props}
          style={{ ...styleOverrides }}
          variant="contained"
          main={main}
          light={light}
          fullWidth = {fullWidth}
        >
          {children}
        </ContainedBtn>
      );
    }

    case "text": {
      return (
        <TextBtn
          {...props}
          style={{ ...styleOverrides }}
          variant="contained"
          main={main}
          light={light}
          fullWidth = {fullWidth}
        >
          {children}
        </TextBtn>
      );
    }
    default: {
      return (
        <ContainedBtn
          {...props}
          style={{ ...styleOverrides }}
          variant="contained"
          main={main}
          light={light}
          fullWidth = {fullWidth}
        >
          {children}
        </ContainedBtn>
      );
    }
  }
};

ButtonComp.propTypes = {
  variant: PropTypes.oneOf(["outlined", "contained", "text"]),
  background: PropTypes.string,
  color: PropTypes.string,
  fullWidth: PropTypes.bool
};

ButtonComp.defaultProps = {
  variant: "contained",
  // must be 6 digit hex
  background: "#E015A2",
  color: "white",
  fullWidth: false
};
export default ButtonComp;

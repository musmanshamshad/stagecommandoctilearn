import * as React from "react";
import { Heading6 } from "./TypographyCompo.style";
import Typography from "@mui/material/Typography";
import PropTypes from "prop-types";

const TypographyCompo = ({ variant, children, ...props }) => {
  switch (variant) {
    case "h6": {
      return (
        <Heading6 variant={variant} {...props}>
          {children}
        </Heading6>
      );
    }
    case "h5": {
      return (
        <Heading6 variant={variant} {...props}>
          {children}
        </Heading6>
      );
    }
    case "h4": {
      return (
        <Heading6 variant={variant} {...props}>
          {children}
        </Heading6>
      );
    }
    case "h3": {
      return (
        <Heading6 variant={variant} {...props}>
          {children}
        </Heading6>
      );
    }
    case "h2": {
      return (
        <Heading6 variant={variant} {...props}>
          {children}
        </Heading6>
      );
    }
    case "h1": {
      return (
        <Heading6 variant={variant} {...props}>
          {children}
        </Heading6>
      );
    }

    default: {
      return (
        <Typography variant={variant} {...props}>
          {children}
        </Typography>
      );
    }
  }
};

export default TypographyCompo;
TypographyCompo.propTypes = {
  variant: PropTypes.string,
};

TypographyCompo.defaultProps = {
  variant: "body1",
};

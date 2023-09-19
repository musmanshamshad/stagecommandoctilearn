import React from "react";
import Typography from "./../Typography/TypographyCompo";
import { styled } from "@mui/system";

const Error = styled(Typography)(({ theme }) => ({
  color: theme.palette.error.light,
}));

const ErrorMessage = ({ children, ...otherProps }) => {
  return <Error {...otherProps}>{children}</Error>;
};

export default ErrorMessage;

ErrorMessage.defaultProps = {
  children: <div>no message given</div>,
};

import React from "react";
import { SnackbarProvider } from "notistack";
import { styled } from "@mui/material/styles";
import palette from "./../../config/palette";

const StyledSnackBar = styled(SnackbarProvider)(({ theme }) => ({
  "&.SnackbarItem-variantSuccess": {
    backgroundColor: palette.colors.secondaryModified,
  },
  "&.SnackbarItem-variantWarning": {
    backgroundColor: theme.palette.warning.main,
  },
  "&.SnackbarItem-variantInfo": {
    backgroundColor: theme.palette.info.main,
  },
  "&.SnackbarItem-variantError": {
    backgroundColor: theme.palette.error.main,
  },
}));

const Snackbar = ({ children, ...props }) => {
  return (
    <StyledSnackBar
      autoHideDuration={1500}
      preventDuplicate={true}
      maxSnack={3}
      {...props}
    >
      {children}
    </StyledSnackBar>
  );
};

export default Snackbar;

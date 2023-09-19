import React from "react";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";
import PropTypes from "prop-types";
import { ButtonWrapper, SnackButton } from "./PromptSnackbar.style";

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const PromptSnackbar = ({
  state,
  setState,
  triggerYes,
  severity,
  children,
}) => {
  const { vertical, horizontal, open } = state;

  const handleClose = () => {
    setState({ ...state, open: false });
  };

  return (
    <>
      <Snackbar
        anchorOrigin={{ vertical, horizontal }}
        open={open}
        onClose={handleClose}
        key={vertical + horizontal}
      >
        <Alert onClose={handleClose} severity={severity}>
          {children}
          <ButtonWrapper>
            <SnackButton
              variant="contained"
              size="small"
              onClick={(e) => {
                handleClose(e);
                triggerYes();
              }}
            >
              Yes
            </SnackButton>
            <SnackButton variant="contained" size="small" onClick={handleClose}>
              No
            </SnackButton>
          </ButtonWrapper>
        </Alert>
      </Snackbar>
    </>
  );
};

export default PromptSnackbar;

PromptSnackbar.propTypes = {
  severity: PropTypes.string,
};
PromptSnackbar.defaultProps = {
  severity: "error",
};

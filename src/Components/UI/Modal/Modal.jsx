import * as React from "react";
import CloseIcon from "@mui/icons-material/Close";
import { Content, StyledModal, CrossButton } from "./Modal.style";
import PropTypes from "prop-types";

const Model = ({
  modelPadding,
  modelWidth,
  title,
  open,
  setOpen,
  children,
  modalStyleOverrides,
  ...props
}) => {
  const handleClose = () => setOpen(false);

  return (
    <StyledModal
      {...props}
      open={open}
      onClose={handleClose}
      aria-labelledby="StyledModal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Content
        style={{ ...modalStyleOverrides }}
        modelPadding={modelPadding}
        modelWidth={modelWidth}
      >
        <CrossButton onClick={() => setOpen(false)}>
          <CloseIcon fontSize="small" color="disabled" />
        </CrossButton>
        {children}
      </Content>
    </StyledModal>
  );
};

export default Model;

Model.propTypes = {
  title: PropTypes.string,
  modelWidth: PropTypes.string,
  modelPadding: PropTypes.string,
};
Model.defaultProps = {
  title: "No title given in modal",
  modelWidth: "400px",
  modelPadding: "10px",
};

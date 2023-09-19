import { styled } from "@mui/system";
import { IconButton } from "@mui/material";
import CardComp from "./../Card/Card";
import Modal from "@mui/material/Modal";

export const Content = styled(CardComp)(
  ({ theme, modelWidth, modelPadding }) => ({
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: modelWidth,
    [theme.breakpoints.down('sm')]: {
      width: "295px", 
    },
    background: "#FCFCFE",
    padding: modelPadding,
    minHeight: "150px",
  })
);

export const StyledModal = styled((props) => {
  return <Modal {...props} />;
})(({ theme }) => ({
  ".css-1jjmlwa-MuiModal-root": {
    background: "red",
  },
}));

export const CrossButton = styled(IconButton)(({ theme }) => ({
  position: "absolute",
  top: 5,
  right: 5,
  cursor: "pointer",
}));

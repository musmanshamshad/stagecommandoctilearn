import { styled } from "@mui/system";
import IconButton from "@mui/material/IconButton";

export const Toolbar = styled("div")(({ theme }) => ({
  //   background: "rgba(224, 21, 162, 0.4)",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  paddingTop: "8px",
}));
export const Button = styled(IconButton)(({ theme, active }) => ({
  height: "40px",
  width: "35px",
  border: "none",
  outline: "none",
  background: "transparent",
  color: active ? "fff" : "#ADB4C5",
  fontWeight: active ? 600 : 400,
  fontSize: "16px",
  cursor: "pointer",
  display: "inline-flex",
  justifyContent: "center",
  alignItems: "center",
  borderRadius: "8px",
}));
export const Bold = styled(Button)(({ theme }) => ({
  fontWeight: 600,
}));

export const Italic = styled(Button)(({ theme }) => ({
  fontStyle: "italic",
}));

export const Underline = styled(Button)(({ theme }) => ({
  textDecoration: "underline",
}));

export const Container = styled("div")(({ theme, width, fullWidth }) => ({
  border: "1px solid #F0F0FB",
  position: "relative",
  background: "#F8F8FC",
  width: fullWidth ? "100%" : width,
  borderRadius: "15px",
  padding: "5px",
}));

export const Divider = styled("div")(({ theme }) => ({
  height: "1px",
  background: "#DDDBE0",
}));

export const ContentContainer = styled("div")(({ theme }) => {
  return {
    color: "#565656",
    height: "160px",
    padding: "10px",
    "& > div": {
      height: "100%",
      overflowY: "auto",
    },
  };
});

export const IconsContainer = styled("div")(({ theme }) => ({
  height: "100%",
  display: "flex",
  alignItems: "center",
  flexWrap: "wrap",
  maxWidth: "90%",
}));

export const RightContainer = styled("div")(({ theme }) => ({
  height: "100%",
  alignSelf: "flex-start",
}));

export const SendButton = styled(Button)(({ theme }) => ({
  borderRadius: "8px",
  height: "38px",
  width: "38px",
  background: "rgba(224, 21, 162, 0.07)",
}));

export const Select = styled("select")(({ theme }) => ({
  border: "none",
  background: "none",
  outline: "none",
  color: "#ADB4C5",
}));

export const Option = styled("option")(({ theme }) => ({}));

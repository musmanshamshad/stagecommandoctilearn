import { styled } from "@mui/material";
import palette from "./../../../config/palette.js";
import Paper from "./../Paper/Paper";
import TypographyCompo from "./../Typography/TypographyCompo";

export const InnerWrapper = styled("div")(({ theme }) => ({
  height: theme.spacing(39),
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  cursor: "pointer",
}));

export const ImgDiv = styled("div")(({ theme }) => ({
  background: palette.colors.selectedColor,
  padding: "22px 24px 22px 24px",
  borderRadius: "50%",
  margin: theme.spacing(3),
}));

export const Label = styled("span")(({ theme }) => ({
  fontSize: "13px",
  fontWeight: "500",
}));
export const Wrapper = styled(Paper)(({ theme }) => ({
  height: "90%",
}));
export const ColoredHeading = styled(TypographyCompo)(({ theme }) => {
  return {
    background: `-webkit-linear-gradient( 45deg,${theme.palette.secondary.light}, ${theme.palette.primary.main})`,
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
  };
});

export const SubHeading = styled(TypographyCompo)(({ theme }) => ({
  fontStyle: "italic",
  color: "#ADB4C5",
  opacity: 0.9,
  fontSize: "14px",
  fontWeight: 400,
}));
export const SimpleListWrapper = styled("div")(({ theme }) => ({
  marginRight: "1rem",
}));

import { styled } from "@mui/material";
import TypographyCompo from "./../Typography/TypographyCompo";
import pallete from "./../../../config/palette";

export const TypographyStarted = styled(TypographyCompo)(({ theme }) => ({
  background: "#e1e9ff",
  color: "#6991ff",
  padding: theme.spacing(0.5, 2, 0.5, 2),
  borderRadius: "0px 10px 10px 0px",
  marginRight: theme.spacing(3),
}));
export const TypographyStats = styled(TypographyCompo)(({ theme }) => ({
  background: "#d3cfd7",
  color: "#251038",
  padding: theme.spacing(0.5, 2, 0.5, 2),
  borderRadius: "0px 10px 10px 0px",
  marginRight: theme.spacing(3),
}));
export const TypographyCompleted = styled(TypographyCompo)(({ theme }) => ({
  background: "#f9d0ec",
  color: "#e015a2",
  padding: theme.spacing(0.5, 2, 0.5, 2),
  borderRadius: "0px 10px 10px 0px",
  marginRight: theme.spacing(3),
}));
export const DivText = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  color: pallete.unselected,
  paddingLeft:"10px"
}));
export const DivHeading = styled("div")(({ theme }) => ({
  paddingTop: theme.spacing(4),
  paddingLeft: theme.spacing(3),
  paddingDown: theme.spacing(1),
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  height: "13.625rem",
}));
export const IconTextWrapper = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  color: "#251038",
}));
export const ImageWrapper = styled("div")(({ theme }) => ({
  display: "flex",
  justifyContent: "space-between",
}));
export const TopicTitle = styled(TypographyCompo)(({ theme }) => ({
  fontWeight: "900",
}));
export const ImageDic = styled("div")(({ theme }) => ({
  height: "18.3rem",
  display: "flex",
  alignItems: "flex-end",
  justifyContent: "flex-end",
}));

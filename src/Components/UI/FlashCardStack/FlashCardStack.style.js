import { styled } from "@mui/material";

export const DivWrapper = styled("div")(({ theme }) => ({
  width: "100%",
  cursor: "pointer",
  height: theme.spacing(42),
}));

export const FirstDiv = styled("div")(({ theme, paddingTop }) => ({
  width: "100%",
  height: theme.spacing(40),
  background: "#fff",
  borderRadius: theme.spacing(2),
  zIndex: 3,
  position: "relative",
  paddingTop: paddingTop,
}));

export const SecondDiv = styled("div")(({ theme }) => ({
  width: "95%",
  height: theme.spacing(40),
  background: "#ebedf1",
  borderRadius: theme.spacing(2),
  zIndex: 2,
  top: "-310px",
  position: "relative",
  marginLeft: "2.5%",
}));

export const ThirdDiv = styled("div")(({ theme }) => ({
  width: "90%",
  height: theme.spacing(40),
  background: "rgba(173, 180, 197, 0.26)",
  borderRadius: theme.spacing(2),
  zIndex: 1,
  top: "-620px",
  position: "relative",
  marginLeft: "5%",
}));

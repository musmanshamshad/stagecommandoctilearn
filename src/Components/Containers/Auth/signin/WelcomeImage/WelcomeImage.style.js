import Box from "../../../../UI/Box/Box.jsx";
import { styled } from "@mui/material/styles";
import Typography from "../../../../UI/Typography/TypographyCompo";

export const LeftContainer = styled(Box)(({ theme }) => ({
  background: theme.palette.primary.main,
  color: "#fff",
  display: "flex",
  flexDirection: "column",
  alignItems: "space-around",
  justifyContent: "space-around",
  height: "100vh",
}));

export const LeftContainerContent = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
}));

export const ImgContainer = styled(Box)(({ theme }) => ({
  width: theme.spacing(7.625),
  marginLeft: theme.spacing(3),
}));

export const HeadingTypography = styled(Typography)(({ theme }) => ({
  textAlign: "center",
  paddingBottom: theme.spacing(2)
}));
export const TypographyText = styled(Typography)(({ theme }) => ({
  textAlign: "center",
  lineHeight: "34.13px",
  opacity: "0.6",
  color: "#FCFCFE",
  letterSpacing: "1px",
  margin: theme.spacing(0, 10, 0, 10),
}));

export const LoginImage = styled("img")((theme) => ({
  display: "block",
  width: "80%",
  height: "auto",
  marginLeft: "auto",
  marginRight: "auto",
}));

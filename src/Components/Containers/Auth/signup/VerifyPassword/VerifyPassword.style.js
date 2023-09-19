import { styled } from "@mui/material/styles";

export const Wrapper = styled("div")(({ theme }) => ({
  height: "95vh",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  width: "21.875rem",
  [theme.breakpoints.up("sm")]: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-around",
  },
}));
export const LogoImage = styled("img")(({ theme }) => ({
  width: "40%",
  height: "auto",
  display: "block",
  marginLeft: "auto",
  marginRight: "auto",
}));
export const LinkResetImage = styled("img")(({ theme }) => ({
  diplay: "block",
  marginLeft: "auto",
  marginRight: "auto",
}));
export const SignupAccoutn = styled("p")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
}));
export const VerifyTextWrapper = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  // justifyContent: "center",
  alignItems: "center",
}));

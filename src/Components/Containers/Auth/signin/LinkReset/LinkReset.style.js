import { styled } from "@mui/material/styles";

export const Wrapper = styled("div")(({ theme }) => ({
  height: "95vh",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  padding: theme.spacing(0, 2, 0, 2),
  [theme.breakpoints.up("sm")]: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-around",
  },
}));
export const LogoImage = styled("img")(({ theme }) => ({
  diplay: "block",
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

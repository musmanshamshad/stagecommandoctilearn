import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";
import {Link} from "react-router-dom"
export const Wrapper = styled("div")(({ theme }) => ({
  height: "98vh",
  display: "flex",
  flexDirection: "column",

  padding: theme.spacing(0, 2, 0, 2),
  [theme.breakpoints.up("sm")]: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-around",
    width: "53%",
  },
}));

export const ErrorMsg = styled("p")(({ theme }) => ({
  color: theme.palette.error.main,
}));

export const LogoImage = styled("img")(({ theme }) => ({
  width: "30%",
  height: "auto",
  display: "block",
  marginLeft: "auto",
  marginRight: "auto",
}));
export const SignupAccoutn = styled("p")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

export const ColorButton = styled(Button)(
  ({ theme, backgroundcolor, color }) => ({
    color: color,
    width: "100%",
    backgroundColor: backgroundcolor,
    borderRadius: "0.625rem",
    textTransform: "capitalize",
    marginBottom: "1.225rem",
    "&:hover": {
      backgroundColor: backgroundcolor,
    },
  })
);
export const ForgotButton = styled(Button)(({ theme }) => ({
  color: "black",
  width: "auto",
  opacity: "0.6",
  textTransform: "capitalize",
  float: "right",
}));

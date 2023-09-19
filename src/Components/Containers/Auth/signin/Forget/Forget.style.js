import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";

export const Wrapper = styled("div")(({ theme }) => ({
  height: "100vh",
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
  width: "30%",
  height: "auto",
  display: "block",
  marginLeft: "auto",
  marginRight: "auto",
}));
export const SignupAccoutn = styled("p")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  marginBottom: "2.125rem",
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

import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";
export const Wrapper = styled("div")(({ theme }) => ({
  height: "98vh",
  display: "flex",
  flexDirection: "column",
  padding: theme.spacing(0, 2, 0, 2),
  width: "21.875rem",
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
    marginTop: "3rem",
    borderRadius: "0.625rem",
    textTransform: "capitalize",
    marginBottom: "1.225rem",
    "&:hover": {
      backgroundColor: backgroundcolor,
    },
  })
);

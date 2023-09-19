import { styled } from "@mui/material/styles";

export const LoadingWrapper = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  gap: "3rem",
  justifyContent: "center",
}));

export const Wrapper = styled("div")(({ theme }) => ({
  height: "98vh",
  display: "flex",
  flexDirection: "column",
  // overflow: "auto",
  padding: theme.spacing(0, 2, 0, 2),
  [theme.breakpoints.up("sm")]: {
    width: "25.875rem",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-around",
  },

  [theme.breakpoints.down("sm")]: {
    width: "18.875rem",
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
  justifyContent: "center",
}));

export const StepperWrapper = styled("div")(({ theme }) => ({
  display: "flex",
  justifyContent: "flex-end",
  alignItems: "center",
}));

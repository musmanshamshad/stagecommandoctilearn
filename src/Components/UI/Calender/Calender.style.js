import { styled } from "@mui/system";
import { Typography } from "@mui/material";
import Button from "../Button/ButtonComp";

export const Wrapper = styled("div")(({ theme }) => ({
  position: "relative",
  width: "313px",
  height: "425px",
  background: theme.palette.primary.main,
  borderRadius: "15px",
  color: "white",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  padding: "44px 58px 29px 61px",
  justifyContent: "space-between",
}));

export const ConfigSelectorContainer = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  position: "relative",
}));

export const Title = styled(Typography)(({ theme }) => ({
  fontWeight: 600,
  fontSize: "16px",
  color: "#fcfce",
  textTransform: "capitalize",
}));

export const ConfigSelector = styled("div")(({ theme }) => ({}));

export const MonthSelector = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  width: "100%",
  marginBottom: "22px",
}));

export const Month = styled(ConfigSelector)(({ theme }) => ({
  marginRight: "4px",
}));

export const Year = styled(ConfigSelector)(({ theme }) => ({
  marginRight: "6px",
}));

export const Week = styled("div")(({ theme }) => ({
  display: "flex",
  width: "100%",
  justifyContent: "space-between",
  alignItems: "center",
}));

export const Days = styled(Week)(({ theme }) => ({}));

export const Day = styled("span")(({ theme }) => ({
  textTransform: "uppercase",
  color: "#fff",
  fontSize: "11px",
  fontWeight: 600,
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  width: "100%",
}));

export const StyledButton = styled(Button)(({ theme }) => ({}));

export const YearsSelect = styled("ul")(({ theme }) => ({
  position: "absolute",
  top: "20px",
  left: 0,
  right: 0,
  background: theme.palette.primary.main,
  zIndex: 2000,
  listStyle: "none",
  height: "1000%",
  transition: "all 0.2s",
  overflow: "auto",
  "&::-webkit-scrollbar": {
    width: "10px",
  },

  /* Track */
  "&::-webkit-scrollbar-track": {
    boxShadow: `inset 0 0 5px ${theme.palette.secondary.light}`,
    borderRadius: "10px",
  },

  /* Handle */
  "&::-webkit-scrollbar-thumb": {
    background: theme.palette.secondary.dark,
    borderRadius: "10px",
  },

  /* Handle on hover */
  "&::-webkit-scrollbar-thumb:hover": {
    background: theme.palette.secondary.main,
  },
}));

export const YearOption = styled("li")(({ theme }) => ({
  padding: "0.4rem 1rem",
  transition: "all 0.2s",
  "&:hover": {
    background: theme.palette.primary.light,
  },
}));

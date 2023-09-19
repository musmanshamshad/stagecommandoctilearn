import { styled } from "@mui/system";
import PaperComp from "../Paper/Paper";

export const Wrapper = styled("label")(({ theme, width }) => ({
  display: "flex",
  flexDirection: "column",
  width,
  gap: theme.spacing(1),
}));

export const StyledPaper = styled(PaperComp)(({ theme, error }) => ({
  borderRadius: "10px",
  border: `${error ? "2px" : "1px"} solid ${
    error ? theme.palette.error.main : "#f0f0fb"
  }`,
  background: "#f8f8fc",
  height: theme.spacing(6.25),
  display: "flex",
  alignItems: "center",
  fontWeight: 400,
  fontSize: "14px",
}));

export const Input = styled("input")(({ theme, value, error }) => {
  return {
    paddingLeft: theme.spacing(2.5),
    background: "transparent",
    border: "none",
    outline: "none",
    height: "70%",
    width: "100%",
    color: "#81d0d4",
    fontFamily: "inherit",
    "&:focus": {
      borderLeft: `${
        !error
          ? `${value?.length > 0 ? "2px" : "1px"} solid ${
              theme.palette.secondary.main
            }`
          : "none"
      }`,
      color: theme.palette.secondary.main,
    },
  };
});

export const HelperText = styled("p")(({ theme, error }) => ({
  fontSize: "12px",
  lineHeight: "10px",
  // height: "10px",
  color: error ? theme.palette.error.main : "inherit",
  fontWeight: 400,
}));

export const LabelText = styled("span")(({ theme }) => ({
  fontSize: "16px",
  color: "#4A5568",
}));

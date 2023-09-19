import { styled } from "@mui/system";
import palette from "../../../config/palette";
import TextField from "@mui/material/TextField";

export const SearchField = styled(TextField)(({ theme }) => ({
  borderRadius: "35px",
  backgroundColor: palette.colors.lightColor,
  width: "24.75rem",
  [theme.breakpoints.down("lg")]: {
  width: "14.75rem",
  },

  "& label.Mui-focused": {
    color: "white",
  },
  "& .MuiInput-underline:after": {
    borderBottomColor: "white",
  },
  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      borderColor: "white",
    },
    "&:hover fieldset": {
      borderColor: "white",
    },
    "&.Mui-focused fieldset": {
      borderColor: "white",
    },
  },
}));

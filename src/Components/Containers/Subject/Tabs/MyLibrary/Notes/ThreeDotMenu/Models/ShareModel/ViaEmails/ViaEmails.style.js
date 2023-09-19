import { styled } from "@mui/system";
import TextField from "@mui/material/TextField";
import TypographyCompo from "./../../../../../../../../../UI/Typography/TypographyCompo";

export const SearchField = styled(TextField)(({ theme }) => ({
  borderRadius: "35px",
  "& label.Mui-focused": {
    color: "white",
  },
  "& .MuiInput-underline:after": {
    borderBottomColor: "white",
  },
  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      borderRadius: "10px",
    },
    "&:hover fieldset": {
    },
    "&.Mui-focused fieldset": {
    
    },
  },
}));

export const ButtonWrappeer = styled("div")(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
}));
export const Typography = styled(TypographyCompo)(({ theme }) => ({
  marginTop: "10px",
}));

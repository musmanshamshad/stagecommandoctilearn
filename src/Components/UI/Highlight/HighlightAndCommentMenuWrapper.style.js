import { styled } from "@mui/system";

export const Input = styled("textarea")(({ theme }) => ({
  backgroundColor: "transparent",
  color: "white",
  width: "98%",
  height:"100%",
  border:"unset",
  resize:"none",
  color:"white",
  "::placeholder": {
    color: "white",
  },
  ":focus-visible":{
    outline:"unset"
  }
}));

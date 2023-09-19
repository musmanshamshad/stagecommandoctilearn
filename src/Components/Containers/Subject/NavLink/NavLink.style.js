import { styled } from "@mui/system";
import Tab from "@mui/material/Tab";
import Box from "../../Components/UI/Box/Box.jsx";

export const Wrapper = styled(Box)(({ theme }) => ({
  width: "100%",
  typography: "body1",
  margin: 0,
}));

export const AntTab = styled(Tab)(({ theme }) => ({
  textTransform: "capitalize",
  color: "#ADB4C5",
  "&.Mui-selected": {
    color: "#624BA2",
  },
}));

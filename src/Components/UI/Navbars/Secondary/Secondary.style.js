import { styled } from "@mui/system";
import Box from "../../Box/Box.jsx";
import Tab from "@mui/material/Tab";
import BoxComp from "./../../Box/Box";

export const Wrapper = styled(Box)(({ theme }) => ({
  width: "100%",
  typography: "body1",
  margin: 0,
}));

export const AntTab = styled(Tab)(({ theme, selectedtabcolor }) => ({
  textTransform: "capitalize",
  color: "#ADB4C5",
  "&.Mui-selected": {
    color: selectedtabcolor,
  },
}));

export const BoxWrapper = styled(BoxComp)(({ theme, selectedtabcolor }) => ({
  background: "white",
  boxShadow: "0px 9px 40px 4px rgba(173,180,197,0.45)",
  webkitBoxShadow: "0px 9px 40px 4px rgba(173,180,197,0.45)",
  mozBoxShadow: "0px 9px 40px 4px rgba(173,180,197,0.45)",
}));

import { styled } from "@mui/system";
import palette from "./../../../../config/palette";
import Box from "./../../Box/Box";
import Tab from "@mui/material/Tab";

export const Wrapper = styled(Box)(({ theme }) => ({
  width: "100%",
  typography: "body1",
  margin: 0,
}));

export const AntTab = styled(Tab)(({ theme }) => ({
  textTransform: "capitalize",
  color: palette.colors.unselected,

  "&.Mui-selected": {
    color: palette.colors.primaryModified,
    background: "#ECE8F2",
  },
}));
export const BoxWrapper = styled(Box)(({ theme }) => ({
  background: "#faf9fb",
  borderBottom: 1,
  borderColor: "divider",
}));

import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import { styled } from "@mui/system";

export const StyledTabs = styled(Tabs)(({ theme }) => ({
  minHeight: "22px",
  width: "100%",
  borderBottom: "1px solid rgba(173, 180, 197, 0.2)",
}));
export const StyledTab = styled(Tab)(({ theme }) => ({
  minHeight: "22px",
  fontSize: "12px",
}));


import { styled } from "@mui/system";
import Tab from "@mui/material/Tab";
import Box from "../../Components/UI/Box/Box.jsx";
import palette from "../../config/palette";

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
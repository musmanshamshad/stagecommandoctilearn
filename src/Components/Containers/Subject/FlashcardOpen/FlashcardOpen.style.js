import { Box } from "@mui/material";
import { styled } from "@mui/system";

export const FlashcardOpenBox = styled(Box)(({ theme }) => ({
    marginTop:"-8rem",
    [theme.breakpoints.down("sm")]: {
        marginTop:"0rem !important",
    }
}));
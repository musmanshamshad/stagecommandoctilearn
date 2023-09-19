import { styled } from "@mui/system";
import { Button } from "@mui/material";

export const ButtonWrapper = styled('div')(({ theme }) => ({
    display: "flex",
    justifyContent: "space-between",
    marginTop: theme.spacing(1.25)
}));

export const SnackButton = styled(Button)(({ theme }) => ({
    background: "white",
    color: "black",
    "&:hover": {
        backgroundColor: '#e9e9e9',
    }


}));
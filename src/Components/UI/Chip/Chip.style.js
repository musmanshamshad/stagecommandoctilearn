import { styled } from '@mui/material/styles';
import ChipComp from "@mui/material/Chip";

export const StyledChip = styled(ChipComp)(({ theme }) => ({
  background: "rgba(129, 208, 212, 0.16)",
  color: "#81D0D4",
  display: "flex",
  justifyContent: "space-around",
  alignItems: "center",
  "& svg": {
    marginRight: "0.4rem",
  },
  "&:hover": {
    backgroundColor: "rgba(129, 208, 212, 0.16)",
  },
}));
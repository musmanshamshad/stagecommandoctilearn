import { Button } from "@mui/material";
import { styled } from "@mui/material/styles";
import Box from "../../../../../UI/Box/Box";
import Typography from "../../../../../UI/Typography/TypographyCompo";
import hexToRgb from "../../../../../../helpers/hexToRgb";

export const Heading = styled(Typography)(({ theme }) => ({
  fontWeight: 600,
  color: "#251038",
  fontSize: "16px",
  textTransform: "capitalize",
}));
export const SubHeading = styled(Typography)(({ theme, type }) => ({
  fontSize: "14px",
  color: "251038",
}));

export const ChapterHeading = styled(SubHeading)(({ theme }) => ({
  fontWeight: 600,
}));
export const SnackHeading = styled(SubHeading)(({ theme }) => ({
  fontWeight: 400,
}));

export const NextBtn = styled(Button)(({ theme, bg }) => ({
  width: "38px",
  minWidth: "1px",
  height: "38px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  backgroundColor: bg,
  borderRadius: "10px",
  border: "none",
  outline: "none",
  cursor: "pointer",
  "&:hover": {
    background: `rgba(${hexToRgb(bg)}, 0.4)`,
  },
}));

export const Title = styled(Box)(({ theme }) => ({
  fontSize: "18px",
  fontWeight: 600,
}));
export const LastActivityBox = styled(Box)(({ theme }) => ({
  fontWeight: 400,
  fontSize: "14px",
  color: "#ADB4C5",
  letterSpacing: "0.01em",
  marginRight: theme.spacing(6.83),
}));

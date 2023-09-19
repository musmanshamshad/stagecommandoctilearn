import IconButton from "@mui/material/IconButton";
import { styled } from "@mui/material";
import Button from "@mui/material/Button";
import palette from "./../../../../../../../../config/palette";
import TypographyCompo from "./../../../../../../../UI/Typography/TypographyCompo";

export const DeleteWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(6, 7, 2, 7),
  [theme.breakpoints.down('sm')]: {
    padding: theme.spacing(1), 
  },
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
}));
export const DeleteIconButton = styled(IconButton)(({ theme }) => ({
  background: "#f9e5f5",
  padding: theme.spacing(2.5),
}));
export const CancelDeleteWrapper = styled("div")(({ theme }) => ({
  display: "flex",
}));
export const Typorgraphy = styled(TypographyCompo)(({ theme, background }) => ({
  textAlign: "center",
  marginTop: theme.spacing(2),
  marginBottom: theme.spacing(2),
}));
export const ButtonTypo = styled(Button)(({ theme, color1 }) => ({
  borderRadius: "15px",
  color: color1,
  marginRight: theme.spacing(3),
  textTransform: "capitalize",
}));
export const ProgressBarTyporgraphy = styled(TypographyCompo)(({ theme }) => ({
  color: palette.colors.secondaryModified,
  marginTop: "-8px",
}));

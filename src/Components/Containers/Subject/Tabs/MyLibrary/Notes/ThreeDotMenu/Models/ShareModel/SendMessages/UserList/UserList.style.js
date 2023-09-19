import { styled } from "@mui/system";
import palette from "./../../../../../../../../../../../config/palette";
import Checkbox from "@mui/material/Checkbox";
import TypographyCompo from './../../../../../../../../../../UI/Typography/TypographyCompo';


export const Main = styled("div")(({ theme }) => ({
  height: "17rem",
  overflow: "auto",

}));
export const Wrapper = styled("div")(({ theme }) => ({
  display: "flex",
  justifyContent: "space-between",
   alignItems: "center",
  margin: theme.spacing(0.8, 0, 0.8, 0),
  
}));
export const InnverDiv = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  // width:"14rem"
}));
export const TypograraphyName = styled(TypographyCompo)(({ theme }) => ({
  margin: theme.spacing(0, 2, 0, 2),
}));
export const CircleCheckBox = styled(Checkbox)(({ theme }) => ({
  color: palette.colors.primaryModified,
  borderRadius: "50px",
  margin: theme.spacing(0, 0, 0, 2),
  '&.Mui-checked': {
    color: palette.colors.primaryModified,
  },
}));
export const TypographyProfession = styled(TypographyCompo)(({ theme }) => ({
  color: palette.colors.unselected
}));


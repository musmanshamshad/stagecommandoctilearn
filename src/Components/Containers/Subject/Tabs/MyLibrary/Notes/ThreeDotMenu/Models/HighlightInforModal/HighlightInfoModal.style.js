import { styled } from "@mui/material";
import TypographyCompo from '../../../../../../../../UI/Typography/TypographyCompo';

export const Wrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(6, 7, 2, 7),
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
}));

export const Typorgraphy = styled(TypographyCompo)(({ theme}) => ({
  textAlign: "center",
  marginTop: theme.spacing(2),
  marginBottom: theme.spacing(2),
}));

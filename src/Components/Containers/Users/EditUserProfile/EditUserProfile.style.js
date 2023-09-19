import { styled } from "@mui/system";
import Grid from "./../../../UI/Grid/Grid";
import TypographyCompo from "./../../../UI/Typography/TypographyCompo";

export const RightCol = styled(Grid)(({ theme }) => ({
  height: "100vh",
  background: "#fcfcfe",
}));

export const Title = styled(TypographyCompo)(({ theme }) => ({
  color: "#251038",
  fontSize: "16px",
  fontWeight: 600,
}));

export const LeftColContent = styled("div")(({ theme }) => ({
  padding: "2rem",
}));
export const ButtonWrapper = styled("div")(({ theme }) => ({
  textAlign:'center'
}));
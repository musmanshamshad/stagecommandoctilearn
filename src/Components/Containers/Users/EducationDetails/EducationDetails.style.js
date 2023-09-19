import { styled } from "@mui/system";
import TypographyComp from "./../../../UI/Typography/TypographyCompo";
import StackComp from "./../../../UI/Stack/Stack";

export const Title = styled(TypographyComp)(({ theme }) => ({
  fontWeight: 400,
  fontSize: "11px",
  color: "#ADB4C5",
}));
export const Value = styled(TypographyComp)(({ theme }) => ({
  fontSize: "14px",
  fontWeight: 500,
  color: "#251038",
}));
export const TypographyInfo = styled(TypographyComp)(({ theme }) => ({
  fontWeight: "600",
  fontSize: "14px",
  color: "#ADB4C5",
}));

export const HeadingLabel = styled(TypographyComp)(({ theme }) => ({
  fontSize: "16px",
  fontWeight: 600,
}));

export const Group = styled(StackComp)(({ theme }) => ({
  padding: "1rem",
}));

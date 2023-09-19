import { styled } from "@mui/system";
import CardComp from "../../../../../UI/Card/Card";
import TypographyComp from "../../../../../UI/Typography/TypographyCompo";

export const Circle = styled("span")(({ theme }) => ({
  position: "relative",
  "&::before": {
    content: '""',
    position: "absolute",
    top: "50%",
    transform: "translateY(-50%)",
    left: 0,
    width: theme.spacing(1),
    height: theme.spacing(1),
    background: theme.palette.secondary.main,
    borderRadius: "50%",
  },
}));

export const Progress = styled("span")(({ theme }) => ({
  fontWeight: 500,
  fontSize: "14px",
  color: "#251038",
}));

export const ProgressText = styled(Progress)({ flexGrow: 1 });

export const ImageWraper = styled("div")(({ theme }) => ({
  width: "100%",
  height: theme.spacing(18),
  borderTopLeftRadius: theme.spacing(1.875),
  borderTopRightRadius: theme.spacing(1.875),
  overflow: "hidden",
}));
export const Image = styled("img")(({ theme }) => ({
  objectFit: "contain",
  transform: "translateY(-10%)",
  width: "100%",
  height: "auto",
}));
export const CardCompWrapper = styled(CardComp)(({ theme }) => ({
  padding: 0,
  cursor: "pointer",
}));
export const Typography = styled(TypographyComp)(({ theme }) => ({
  fontWeight: 700,
  fontSize: "24px",
  color: "#251038",
}));
export const StackInner = styled("span")(({ theme }) => ({
  fontSize: "14px",
  color: "#A4ACBF",
  fontWeight: "400",
}));

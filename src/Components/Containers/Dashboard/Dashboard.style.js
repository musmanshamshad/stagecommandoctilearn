import Card from "../../UI/Card/Card";
import Typography from "../../UI/Typography/TypographyCompo";
import Stack from "../../UI/Stack/Stack";
import palette from "../../../config/palette";
import { styled } from "@mui/system";
import GridComponent from "./../../UI/Grid/Grid";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import { Link } from "react-router-dom";

export const StatCardsLayout = styled(Stack)(({ theme }) => ({
  height: "100%",
  gap: "35px",
  maxWidth: "70%",
  [theme.breakpoints.down('md')]: {
    maxWidth: "100%", 
  },
}));

export const StatCardFixedHeight = styled(Card)(({ theme }) => ({
  height: "246px",
}));

export const CardLabel = styled(Typography)(({ theme }) => ({
  fontSize: "20px",
  fontWeight: 500,
  color: "#31243D",
}));
export const ChartDataTime = styled(Typography)(({ theme }) => ({
  fontSize: "20px",
  fontWeight: 500,
  color: "#31243D",
}));

export const StyledSection = styled(GridComponent)(({ theme }) => ({
  marginBottom: "50px",
}));

export const NumberOfCourses = styled(Typography)(({ theme }) => ({
  fontWeight: 700,
  color: "#624BA2",
  fontSize:"44px",
  [theme.breakpoints.down('sm')]: {
    fontSize: "30px", 
  },
}));

export const DashboardHeroText = styled(Typography)(({ theme }) => ({
  fontSize: theme.spacing(1.75),
  color: palette.colors.dashboardheroText,
  opacity: 0.3,
}));

export const HeroImg = styled("img")(({ theme }) => ({
  // position: "absolute",
  // top: "-20px",
  // left: 0,
  width: "131px",
  height: "131px",
}));
export const CardWrapper = styled(Card)(({ theme }) => ({
  position: "relative",
}));
export const HeadingTypography = styled(Typography)(({ theme }) => ({
  fontWeight: 900,
  color: "#3D2850",
  fontSize: "18px",
}));
export const Span = styled("span")(({ theme }) => ({
  position: "absolute",
  right: 0,
  top: 0,
}));
export const Div = styled("div")(({ theme }) => ({
  display: "flex",
}));
export const PercentageTypography = styled(Typography)(({ theme }) => ({
  color: "#ADB4C5",
  display: "flex",
  alignItems: "center",
  paddingLeft: "15px",
}));

export const ArrowUpward = styled(ArrowUpwardIcon)(
  ({ theme, isincreasing }) => ({
    color: isincreasing ? "#81D0D4" : theme.palette.error.main,
    transform: isincreasing ? "scale(1.0)" : "scale(1.0) rotate(180deg)",
  })
);

export const NavLink = styled(Link)(({ theme }) => ({
  textDecoration: "none",
  color: "black",
}));

import { styled } from "@mui/system";

export const Wrapper = styled("div")(({ theme, drawerwidth }) => ({
  position: "fixed",
  top: 0,
  bottom: 0,
  left: 0,
  width: drawerwidth,
  minHeight: theme.spacing(62.5),
  borderTopRightRadius: theme.spacing(5),
  borderBottomRightRadius: theme.spacing(5),
  background: "#251038",
  zIndex: 1300,
  color: "#fff",
}));
export const DashboardIconWrapper = styled("div")(({ theme }) => ({
  cursor: "pointer",
  marginBottom: theme.spacing(4.0025),
}));
export const Image = styled("img")(({ theme }) => ({
  marginBottom: theme.spacing(5.38875),
  width:'60%'
}));
export const HelpImage = styled("div")(({ theme }) => ({
  color: "white",
  opacity: "0.3",
  "&:hover": {
    opacity: 1,
  },
}));

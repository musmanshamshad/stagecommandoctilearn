import { styled } from "@mui/system";
import Stack from "../../../UI/Stack/Stack";
import Typography from "../../../UI/Typography/TypographyCompo";
import { ListItemButton } from "@mui/material";
import IconButton from "@mui/material/IconButton";

export const NavContent = styled(Stack)(({ theme }) => ({
  height: "100%",
  opacity: 0.8,
  transition: "all 0.3s",
  "&:hover": {
    opacity: 1,
  },
  width: "100%",
}));

export const Img = styled("img")(({ theme }) => ({
  width: "100%",
  height: "100%",
  borderRadius: "16px",
  objectFit: "cover",
}));

export const ImgContainer = styled("div")(({ theme }) => ({
  borderRadius: "16px",
  width: "40px",
  height: "40px",
}));

export const UserName = styled(Typography)(({ theme }) => ({
  fontSize: "14px",
  color: "#251038",
  textTransform: "capitalize",
}));
export const UserCategory = styled(Typography)(({ theme }) => ({
  color: "#ADB4C5",
  fontStyle: "italic",
  fontSize: "14px",
  marginTop: 0,
  fontWeight: 400,
  textTransform: "capitalize",
  [theme.breakpoints.down('sm')]: {
    display: "none", 
  },
}));

export const StyledNav = styled("div")(({ theme, appbarheight }) => ({
  position: "fixed",
  top: 0,
  left: 0,
  right: 0,
  backgroundColor: "#fcfcfe",
  height: appbarheight,
  zIndex: 900,
}));

export const NotBtn = styled("div")(({ theme }) => ({
  width: "100%",
  height: "28px",
  color: "#fff",
  borderRadius: "14px",
  background: theme.palette.secondary.main,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  fontSize: "12px",
  gap: "3px",
  boxShadow: "0px 5px 34px rgba(186, 19, 88, 0.42);",
  cursor: "pointer",
}));

export const ListItemButtonWrapper = styled(ListItemButton)(({ theme }) => ({
  borderRadius: theme.spacing(1.75),
  width: "48px",
  height: theme.spacing(3.5),
  display: "inline-block",
  padding: 0,
}));
export const Span = styled("span")(({ theme }) => ({
  cursor: "pointer",
}));
export const StackWrapper = styled(Stack)(({ theme }) => ({
  width: "225px",
  marginRight: "50px",
  [theme.breakpoints.down('sm')]: {
    marginRight: "0px", 
  },
}));

export const IconButtonWrapper = styled(IconButton)(({ theme }) => ({
  width: "35px",
  height: "35px",
}));

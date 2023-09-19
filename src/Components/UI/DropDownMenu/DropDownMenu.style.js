import { styled } from "@mui/system";
import { ListItemButton } from "@mui/material";


export const Wrapper = styled("div")(({ theme }) => ({
    position: "absolute",
    background: "#251038",
    right: "-18px",
    top: "40px",
    zIndex: "10000000",
    borderRadius: "16px",
    color: "#fff",
  }));
 export const List = styled("ul")(({ theme }) => ({
    listStyle: "none",
    width: "150px",
    paddingLeft: 0,
  }));
 export const Item = styled(ListItemButton)(({ theme }) => ({
    fontSize: "14px",
    height: "50px",
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-start",
    border: "none",
    outline: "none",
    background: "transparent",
    padding: "0 15px",
    width: "100%",
    color: "inherit",
    gap: "12px",
    "&:hover": {
      background: "#3b1d56",
      cursor: "pointer",
    },
  }));
 export const IconContainer = styled("span")(({ theme }) => ({}));
 export const TriangleContainer = styled("div")(({ theme }) => ({
    position: "absolute",
    right: "18px",
    top: "-10px",
  }));
  export const ListItem = styled("li")(({ theme }) => ({
    margin: theme.spacing(0)
  }));
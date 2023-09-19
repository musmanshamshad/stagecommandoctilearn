import { ListItemButton, List } from "@mui/material";
import pallette from "./../../../config/palette";
import { styled } from "@mui/system";
import Box from "@mui/material/Box";
import ListItemText from "@mui/material/ListItemText";

export const StyledListContainer = styled(List)(({ theme }) => ({
  width: "100%",
  maxWidth: "360",
 

  "& .MuiTypography-root": {
    padding: 0,
    fontSize: "13px",
    color: theme.palette.primary.main,
    fontWeight: 600,
    
  },
  "& *": {
    padding: 0,
    
  },
}));

export const StyledItem = styled(ListItemButton)(
  ({ theme, layer, padding }) => {
    return {
      backgroundColor: layer !== 1 ? "#F8F8FC" : "#FFF",
      minHeight: "55px",
      paddingLeft: padding,
      
      "&:hover": {
        backgroundColor: "rgba(98, 75, 162, 0.1)",
      },
      "&:focus": {
        backgroundColor: layer !== 1 ? `${pallette.colors.selectedColor}`: null,
        borderLeft: layer !==1 ?  `3px solid ${pallette.colors.primaryModified} ` : null,
        "& .ListItemButtonWrapper-expandIconWrapper .MuiSvgIcon-root": {
          color: layer!== 1 ? pallette.colors.yellow : null,
        },
      },
      "& .ListItemButtonWrapper-content": {
        marginLeft: theme.spacing(1),
        
      },
    };
  }
);

export const StyledListBtn = styled(ListItemButton)(({ theme, selected }) => ({
  height: "24px",
  lineHeight: "18px",
  fontVariant: "small-caps",
  color: "#251038",
  textTransform: "uppercase",

  opacity: selected ? 1 : 0.2,
  textShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
}));

export const Wrapper = styled(Box)(({ theme, height }) => ({
  height: height,
  overflowY: "auto",
  width: "100%",
  maxWidth: 360,
  
  bgcolor: "#fff",
  "&::-webkit-scrollbar": {
    width: "2px",
  },

  /* Track */
  "&::-webkit-scrollbar-track": {
    background: "rgba(98, 75, 162, 0.1)",
  },

  /* Handle */
  "&::-webkit-scrollbar-thumb": {
    background: "#624BA2",
  },

  /* Handle on hover */
  "&::-webkit-scrollbar-thumb:hover": {
    background: "#624BA2",
  },
}));
export const StyledListItem = styled(ListItemText)(({ theme }) => ({
  "& *": {
    fontSize: "13px",
    fontWeight: 700,
  },
}));

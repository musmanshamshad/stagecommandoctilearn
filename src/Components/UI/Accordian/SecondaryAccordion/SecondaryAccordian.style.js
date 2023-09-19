import { styled } from "@mui/system";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Typography from "@mui/material/Typography";
import MuiAccordion from "@mui/material/Accordion";
import MuiAccordionSummary from "@mui/material/AccordionSummary";
import MuiAccordionDetails from "@mui/material/AccordionDetails";
import pallette from "../../../../config/palette";

export const Accordian = styled(MuiAccordion)(({ theme }) => ({
  background: pallette.colors.whiteColor,
  borderRadius: theme.spacing(1.5),
  boxShadow: "0px 0px 5px 0px rgba(0,0,0,0)",

  "&:before": {
    display: "none",
  },
}));

export const AccordionSummary = styled((props) => (
  <MuiAccordionSummary
    expandIcon={<ExpandMoreIcon sx={{ color: "#ADB4C5" }} />}
    {...props}
  />
))(({ theme }) => ({
  backgroundColor: pallette.colors.whiteColor,
  flexDirection: "row-reverse",
  borderBottom: `1px solid ${pallette.colors.selectedColor}`,
  margin: "0px 20px 0px 20px",
  padding: "0px",
  // minHeight: "30px !important",
  // backgroundColor: "blue",

  "&:focus": {
    backgroundColor: pallette.colors.selectedColor,
    borderLeft: `3px solid ${pallette.colors.primaryModified} `,
    "& .MuiAccordionSummary-expandIconWrapper .MuiSvgIcon-root": {
      color: pallette.colors.primaryModified,
    },
  },
  "& .MuiAccordionSummary-content": {
    marginLeft: theme.spacing(1),
  },
}));

export const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
  backgroundColor: pallette.colors.whiteColor,
  "& *::selection": {
    background: pallette.colors.yellow,
  },
}));
export const HeaderText = styled(Typography)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
}));

export const HeaderWrapper = styled("div")(({ theme }) => ({
  width: "100%",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
}));

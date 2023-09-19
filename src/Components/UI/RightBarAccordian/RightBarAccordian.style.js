import { styled } from "@mui/material/styles";
import MuiAccordion from "@mui/material/Accordion";
import MuiAccordionSummary from "@mui/material/AccordionSummary";
import MuiAccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import pallate from "../../../config/palette";

export const Accordian = styled(MuiAccordion)(({ theme }) => ({
  background: "white",
  boxShadow: "0px 0px 5px 0px rgba(0,0,0,0)",
  "&:before": {
    display: "none ",
  },
}));

export const AccordionSummary = styled((props) => (
  <MuiAccordionSummary
    expandIcon={
      <ExpandMoreIcon sx={{ fontSize: "1.9rem", color: pallate.unselected }} />
    }
    {...props}
  />
))(({ theme }) => ({
  marginTop: "20px",
  height: "32px",
  minHeight: "32px",
  backgroundColor: "#f4f3f5",
  "& .MuiAccordionSummary-content": {
    marginLeft: theme.spacing(1),
  },
}));

export const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
  backgroundColor: "white",
  overflowX:"auto"
}));
export const HeaderText = styled(Typography)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  fontWeight: "700",
}));

export const HeaderWrapper = styled("div")(({ theme }) => ({
  width: "100%",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  textTransform: "uppercase",
}));

export const MasterWrapper = styled("div")(({ theme }) => ({
  paddingBottom: "1rem",
}));

import { styled } from "@mui/system";
import pallate from "../../../../config/palette";
import Accordion from "@mui/material/Accordion";
import MuiAccordionSummary from "@mui/material/AccordionSummary";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Box from "../../Box/Box";

export const AccordianWrapper = styled(Accordion)(({ theme }) => ({
  background: pallate.colors.whiteColor,
  borderRadius: theme.spacing(1.5),
  padding: theme.spacing(1.6),
  marginBottom: theme.spacing(2),
  boxShadow: "0px 0px 5px 0px rgba(0,0,0,0)",

  borderBottom: `1px solid ${theme.palette.divider}`,
  "&:not(:last-child)": {
    borderBottom: 0,
  },
  "&:before": {
    display: "none",
  },
}));

export const AccordionSummary = styled((props) => (
  <MuiAccordionSummary
    expandIcon={
      <ExpandMoreIcon
        sx={{ fontSize: "1.9rem", color: pallate.colors.unselected }}
      />
    }
    {...props}
  />
))(({ theme }) => ({
  flexDirection: "row-reverse",
}));

export const SummaryDiv = styled(Box)(({ theme }) => ({
  width: "100%",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
}));

export const HeaderName = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
}));

export const Subheading = styled(Box)(({ theme }) => ({
  color: pallate.colors.unselected,
}));

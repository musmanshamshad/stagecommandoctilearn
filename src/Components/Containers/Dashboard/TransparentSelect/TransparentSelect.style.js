import { styled } from "@mui/material/styles";

export const ListItem = styled("li")(({ theme }) => ({
  width: "193px",
  fontWeight: 500,
  color: "#251038",
  position: "relative",
  fontSize: "12px",
  cursor: "pointer",
  transition: "all 0.2s",
  "&:hover": {
    background: `rgba(224,21,162, 0.1)`,
    "&::before": {
      background: "#E015A2",
      content: '""',
      position: "absolute",
      top: 0,
      left: 0,
      bottom: 0,
      width: "3px",
      borderRadius: "200px",
      transition: "all 0.2s",
    },
  },
}));

export const List = styled("ul")(({ theme }) => ({
  position: "absolute",
  top: "100%",
  right: 0,
  background: "#F8F8FC",
  borderRadius: "15px",
  listStyleType: "none",
  padding: 0,
  overflow: "hidden",
  zIndex: +1000000,
}));
export const Span = styled("span")(({ theme }) => ({
  fontSize: "14px",
  fontWeight: 400,
}));

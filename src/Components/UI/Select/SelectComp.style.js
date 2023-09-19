import PaperComp from "../Paper/Paper";
import { styled } from "@mui/system";
import countries from "../../../data/countries.json";

export const formattedDefaultData = countries.map((country) => {
  return {
    value: country.value,
    label: country.label,
  };
});

export const Wrapper = styled("div")(({ theme, width }) => ({
  display: "flex",
  flexDirection: "column",
  width,
  gap: theme.spacing(1),
  position: "relative",
}));
export const StyledPaper = styled(PaperComp)(
  ({ selectopen, theme, error }) => ({
    borderRadius: "10px",
    border: `1px solid ${
      selectopen ? "#ADB4C5" : error ? theme.palette.error.main : "#f0f0fb"
    }`,
    background: "#f8f8fc",
    height: theme.spacing(6.25),
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    fontWeight: 400,
    fontSize: "14px",
  })
);

export const Select = styled("div")(({ theme, value, error }) => {
  return {
    paddingLeft: theme.spacing(2.5),
    background: "transparent",
    border: "none",
    outline: "none",
    height: "70%",
    color: "#2D3748",
    fontFamily: "inherit",
    display: "flex",
    alignItems: "center",
  };
});

export const DropDownContainer = styled(PaperComp)(({ theme }) => ({
  zIndex: 1000,
  width: "calc(100%) - 30px - 20px",
  background: "#f8f8fc",
  borderRadius: theme.spacing(1.875),
  position: "absolute",
  overflow: "hidden",
  left: 0,
  right: 0,
  top: `calc(${theme.spacing(6.25)} + 1.9rem)`,
}));

export const Inner = styled("ul")(({ theme }) => ({
  height: "100%",
  maxHeight: "calc(254px - 19px - 22px)",
  overflowY: "auto",

  "&::-webkit-scrollbar": {
    width: "30px",
    height: "1px",
  },

  /* Track */
  "&::-webkit-scrollbar-track": {
    background: "#f8f8fc",
    opacity: 0.1,
  },

  /* Handle */
  "&::-webkit-scrollbar-thumb": {
    borderLeft: `1px solid ${theme.palette.secondary.main}`,
  },

  /* Handle on hover */
  "&::-webkit-scrollbar-thumb:hover": {
    background: "#b30000",
  },
  listStyleType: "none",
  padding: 0,
}));

export const ListItem = styled("li")(({ theme }) => ({
  //   borderBottom: "1px solid #dddbe0",
  padding: "10px",
  paddingLeft: "20px",
  display: "flex",
  justifyContent: "flex-start",
  alignItems: "center",
  "&:hover": {
    cursor: "pointer",
    background: "rgba(224,21,162, 0.1)",
    borderLeft: "3px solid rgba(224,21,162, 1)",
  },
}));

export const Divider = styled("li")(({ theme }) => ({
  width: "100%",
  height: "1px",
  background: "rgba(221, 219, 224, 0.3)",
}));

export const Icon = styled("div")(({ theme, open }) => ({
  transform: `${open ? "rotateX(180deg)" : ""}`,
  transition: "all 0.2s",
  marginRight: theme.spacing(2.68),
}));

export const Placeholder = styled("span")(({ theme }) => ({
  color: "#ADB4C5",
}));

export const ErrorMessage = styled("small")(({ theme }) => ({
  marginBottom: theme.spacing(1),

  color: theme.palette.error.main,
}));

export const LabelMessage = styled("p")(({ theme }) => ({
  marginBottom: theme.spacing(1),
}));

import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#251038",
      light: "#3A274B",
      dark: "#210E32",
    },
    secondary: {
      main: "#E015A2",
      light: "#E643B4",
      dark: "##9C0E71",
    },
    background: { paper: "#F7F6FA" },
  },
  typography: {
    fontFamily: ["HelviticaNue", "AvenirNext"].join(","),
  },
});

export default theme;

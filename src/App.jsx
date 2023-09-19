import React, { useEffect } from "react";
import "./App.css";
import { BrowserRouter } from "react-router-dom";
import ApplicationRoutes from "./Components/Routes/ApplicationRoutes";
import { ThemeProvider } from "@mui/material/styles";
import theme from "./theme/theme";
import { useDispatch, useSelector } from "react-redux";
import { authActions } from "./redux/reducers/auth";
import Snackbar from "./Components/Providers/Snackbar";
import api from "./Services";
import { useUserActivityTracking } from "./globalHooks";

function App() {
  const dispatch = useDispatch();
  const { updateVisibility } = useUserActivityTracking();
  useEffect(() => {
    let token = localStorage.getItem("auth");
    if (token) {
      dispatch(authActions.loginHandler({ token, loggedIn: "true" }));
    }
  }, []);

  document.addEventListener("visibilitychange", () => {
    visibilityHandler(document.visibilityState);
  });

  window.addEventListener("beforeunload", () => {
    visibilityHandler(document.visibilityState);
  });

  const visibilityHandler = (state, ...params) => {
    const date = new Date().toISOString();
    switch (state) {
      case "visible": {
        updateVisibility(true, date);
        break;
      }
      case "hidden": {
        updateVisibility(false, date);
        break;
      }
      default: {
        console.error({
          message:
            "Invalid params (state) provided, allowed values can be 'visible' or 'hidden'",
          state,
        });
        throw Error("Error in params");
      }
    }
  };

  return (
    <Snackbar>
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <ApplicationRoutes />
        </BrowserRouter>
      </ThemeProvider>
    </Snackbar>
  );
}

export default App;

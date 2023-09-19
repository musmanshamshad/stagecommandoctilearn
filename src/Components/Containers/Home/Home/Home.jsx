import React from "react";
import Sidebar from "./../Sidebar/Sidebar";
import Nav from "./../Nav/Nav";
import { Outlet, useNavigate } from "react-router-dom";
import { AppContent, Main } from "./Home.style.js";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";

const Home = () => {
  const appbarHeight = "64px";
  const theme = useTheme();
  const [drawerWidth, setDrawerWidth] = React.useState("75px");
  const isXs = useMediaQuery(theme.breakpoints.down("sm"));

  React.useEffect(() => {
    if (isXs) {
      setDrawerWidth("0px");
    } else {
      setDrawerWidth("75px");
    }
  }, [isXs]);

  return (
    <>
      <Nav
        appbarheight={appbarHeight}
        isXs={isXs}
        drawerWidth={drawerWidth}
        setDrawerWidth={setDrawerWidth}
      />
      <Sidebar
        drawerwidth={drawerWidth}
        isXs={isXs}
        setDrawerWidth={setDrawerWidth}
      />
      <AppContent
        backgroundColor={"#F8F8FC"}
        appbarheight={appbarHeight}
        drawerwidth={drawerWidth}
      >
        <Main>
          <Outlet />
        </Main>
      </AppContent>
    </>
  );
};

export default Home;

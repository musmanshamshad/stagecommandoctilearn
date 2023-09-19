import React from "react";
import {
  Wrapper,
  DashboardIconWrapper,
  Image,
  HelpImage,
} from "./Sidebar.style";
import Stack from "../../../UI/Stack/Stack";
import logo from "../../../../assets/images/logo/octilear_MainLogo.png";
import * as DrawerComps from "./icons";
import IconButton from "./../../../UI/IconButton/IconButton";
import { useNavigate } from "react-router-dom";
import HelpRoundedIcon from "@mui/icons-material/HelpRounded";
import ClearIcon from "@mui/icons-material/Clear";
import { Box } from "@mui/material";
const Sidebar = ({ drawerwidth, setDrawerWidth, isXs }) => {
  const navigate = useNavigate();
  const [hovered, setHovered] = React.useState({
    dashboard: false,
    message: false,
    settings: false,
    doubleArrows: false,
  });
  const enterHoverHandler = (e) => {
    let temp = { ...hovered };
    temp[e.currentTarget.getAttribute("id")] = true;
    setHovered(temp);
  };
  const leaveHoverHandler = (e) => {
    let temp = { ...hovered };
    temp[e.currentTarget.getAttribute("id")] = false;
    setHovered(temp);
  };
  return (
    <Wrapper drawerwidth={drawerwidth}>
      {isXs && drawerwidth === "75px" ? (
        <Box>
          <Stack
            alignItems="center"
            justifyContent="center"
            direction="row"
            sx={{ position: "absolute", top: "20px", left: "25px" }}
          >
            <IconButton onClick={() => setDrawerWidth("0px")}>
              <ClearIcon style={{ color: "#675874" }} />
            </IconButton>
          </Stack>
        </Box>
      ) : null}
      <Stack
        space={0}
        alignItems="center"
        sx={{ pt: isXs && drawerwidth === "75px" ? "65px" : "52px" }}
      >
        <Image src={logo} alt="logo" />

        <DashboardIconWrapper
          onMouseOut={leaveHoverHandler}
          onMouseOver={enterHoverHandler}
          id="dashboard"
        >
          <IconButton onClick={(e) => navigate("/dashboard")}>
            <DrawerComps.DashboardIcon focused={hovered.dashboard} />
          </IconButton>
        </DashboardIconWrapper>
        <div
          style={{ cursor: "pointer" }}
          onMouseOut={leaveHoverHandler}
          onMouseOver={enterHoverHandler}
          id="message"
        >
          <a
            href="https://octilearn.notion.site/Help-Center-64f410809b3847dab36c8d36af98a6e3"
            style={{ textDecoration: "none" }}
            target="_blank"
          >
            <HelpImage>
              <HelpRoundedIcon fontSize="small" />
            </HelpImage>
          </a>
        </div>
      </Stack>
    </Wrapper>
  );
};

export default Sidebar;

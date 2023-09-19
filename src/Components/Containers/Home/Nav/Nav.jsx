import React from "react";
import Stack from "../../../UI/Stack/Stack";
import { useDispatch, useSelector } from "react-redux";
import { authActions } from "../../../../redux/reducers/auth.js";
import api from "./../../../../Services";
import { Link, useNavigate } from "react-router-dom";
import defaultImg from "./../../../../assets/images/user/default.png";
import LogoutIcon from "@mui/icons-material/Logout";
import {
  StyledNav,
  NavContent,
  Img,
  UserName,
  UserCategory,
  ImgContainer,
  StackWrapper,
  IconButtonWrapper,
} from "./Nav.style";
import Loader from "./../../../UI/Loader/Loader";
import { userActions } from "../../../../redux/reducers/user";
import ToolTip from "./../../../UI/Tooltip/ToolTip";
import MenuIcon from "@mui/icons-material/Menu";
import { IconButton } from "@mui/material";
const Nav = ({ appbarheight, isXs, setDrawerWidth, drawerWidth }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const logoutHandler = (e) => {
    e.preventDefault();
    dispatch(authActions.loginHandler({ loggedIn: "false" }));
    dispatch(userActions.logOutHandler());
    localStorage.removeItem("auth");
    return navigate("/auth", { replace: true });
  };

  const userData = useSelector((state) => state.user);

  const [loading, setLoading] = React.useState(false);

  const fullUserNameCallFromDB = async (token) => {
    let temp = await api.getUser(token);
    return temp;
  };
  const apiCall = async () => {
    let token = localStorage.getItem("auth");
    fullUserNameCallFromDB(token)
      .then((el) => {
        dispatch(userActions.getUserData(el.data));
        setLoading(false);
      })
      .catch((error) => {
        console.error(error);
        setLoading(false);
      });
  };
  const loadInitialData = () => {
    apiCall();
  };
  React.useEffect(() => {
    setLoading(true);
    loadInitialData();
  }, []);
  return (
    <>
      <StyledNav appbarheight={appbarheight}>
        <NavContent
          direction="row"
          justifyContent={drawerWidth === "0px" ? "space-between" : "flex-end"}
          alignItems="center"
        >
          {isXs && drawerWidth === "0px" ? (
            <IconButton onClick={() => setDrawerWidth("75px")}>
              <MenuIcon />
            </IconButton>
          ) : null}
          <StackWrapper
            direction="row"
            alignItems="center"
            justifyContent="space-between"
          >
            {loading ? (
              <Loader />
            ) : (
              <ToolTip title="User Profile">
                <Link to="/user">
                  <ImgContainer>
                    <Img
                      src={userData?.img ? userData.img : defaultImg}
                      alt="user-dp"
                    />
                  </ImgContainer>
                </Link>
              </ToolTip>
            )}
            <Stack
              direction="row"
              justifyContent="flex-end"
              alignItems="center"
            >
              <UserName variant="h6">
                {userData?.fName}
                {/* <span style={{ paddingLeft: "3px", paddingRight: "6px" }}>
                  {userData?.lName}
                </span> */}
              </UserName>

              <UserCategory
                style={{ margin: 0, paddingLeft: "10px" }}
                variant="subtitle2"
              >
                Student
              </UserCategory>
            </Stack>
            <ToolTip title="LogOut">
              <IconButtonWrapper onClick={logoutHandler}>
                <LogoutIcon />
              </IconButtonWrapper>
            </ToolTip>
          </StackWrapper>
        </NavContent>
      </StyledNav>
    </>
  );
};

export default Nav;

import React from "react";
import Logo from "../../../../../assets/images/auth/logo.png";
import _LinkResetImage from "../../../../../assets/images/auth/link_Reset.png";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
import constants from "../../../../../config/constants";

import {
  LinkResetImage,
  LogoImage,
  SignupAccoutn,
  Wrapper,
} from "./LinkReset.style";

const LinkReset = () => {
  let navigate = useNavigate();

  const backToSignInHandler = () => {
    navigate("/auth");
  };

  return (
    <Wrapper>
      <LogoImage src={Logo} alt="logo_image" />
      <LinkResetImage src={_LinkResetImage} alt="logo_image_link" />
      <SignupAccoutn>
        <span style={{ opacity: "0.6" }}>{constants.BackTo}</span>
        <Button
          variant="text"
          sx={{ color: "#624BA2", textTransform: "capitalize" }}
          onClick={backToSignInHandler}
        >
          {constants.SignIn}
        </Button>
      </SignupAccoutn>
    </Wrapper>
  );
};

export default LinkReset;

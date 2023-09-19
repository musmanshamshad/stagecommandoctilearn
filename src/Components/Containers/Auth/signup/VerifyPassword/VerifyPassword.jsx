import React, { useEffect } from "react";
// import verifyPass from "../../../../../assets/images/auth/verify_password.png";
// import Logo from "./../../../../../assets/images/auth/logo.png";
import Logo from "../../../../../assets/images/logo/OctilearnLogo.png";
// import Logo from "./../../../../../assets/images/logo/Octilearn-Transparent-logo-01.png";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
import constants from "../../../../../config/constants";
import Typography from "./../../../../UI/Typography/TypographyCompo";
import VerifyPassowrdSVG from "./VerifyPassowrdSVG";
import {
  LinkResetImage,
  LogoImage,
  SignupAccoutn,
  Wrapper,
  VerifyTextWrapper,
} from "./VerifyPassword.style";

const VerifyPassword = () => {
  let navigate = useNavigate();
  // useEffect(() => {
  //   const timer = setTimeout(() => {
  //     navigate("/");
  //   }, 5000);
  //   return () => clearTimeout(timer);
  // }, [navigate]);

  const backToSignInHandler = () => {
    navigate("/");
  };
  return (
    <Wrapper>
      <LogoImage src={Logo} alt="logo_image" />
      <VerifyTextWrapper>
        {/* <LinkResetImage src={verifyPass} alt="logo_image_link" /> */}
        <VerifyPassowrdSVG />
        <Typography variant="h6" style={{ textAlign: "center" }}>
          Your account has been created. Please
          <span
            style={{ color: "rgb(224, 21, 162)", cursor: "pointer" }}
            onClick={backToSignInHandler}
          >
            {" "}
            click here{" "}
          </span>{" "}
          to sign in
        </Typography>
      </VerifyTextWrapper>

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

export default VerifyPassword;

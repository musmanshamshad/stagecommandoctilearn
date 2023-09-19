import React from "react";
import Login_Image from "../../../../../assets/images/auth/login_image.png";
// import logo from "../../../../../assets/images/logo/octilear_MainLogo.png";
import Typography from "../../../../UI/Typography/TypographyCompo";
import {
  LeftContainer,
  HeadingTypography,
  TypographyText,
  LeftContainerContent,
  LoginImage,
  ImgContainer,
} from "./WelcomeImage.style";

const WelcomeImage = () => {
  return (
    <LeftContainer>
      <ImgContainer>
        {/* <img src={logo} width="100%" height="auto" alt="logo" /> */}
      </ImgContainer>
      <LeftContainerContent>
        <HeadingTypography variant="h4">
          Welcome to OctiLearn!
        </HeadingTypography>
        <TypographyText>
          We help each student achieve academic success through education that
          intelligently adapts to individual needs and preferences.
        </TypographyText>
        <LoginImage src={Login_Image} alt="login_image" />
      </LeftContainerContent>
      <Typography variant="caption" sx={{ opacity: "0.7", ml: "1.8rem" }}>
        Powered by OctiLearn©
      </Typography>
    </LeftContainer>
  );
};

export default WelcomeImage;

import React from "react";
import ErrorImage from "./../../../assets/images/error/error.jfif";
import { styled } from "@mui/system";

const ErrorPage = () => {
  const Image = styled("img")(({ theme }) => ({
    width: "60%",
    height: "auto",
  }));
  const Wrapper = styled("div")(({ theme }) => ({
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  }));
  return (
    <Wrapper>
      <Image src={ErrorImage} alt="page not found" />
    </Wrapper>
  );
};

export default ErrorPage;

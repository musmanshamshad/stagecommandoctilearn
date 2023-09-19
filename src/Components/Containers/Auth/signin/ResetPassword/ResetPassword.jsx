import React, { useState, useEffect } from "react";
import Logo from "../../../../../assets/images/auth/logo.png";
import Typography from "../../../../UI/Typography/TypographyCompo";
import TextField from "../../../../UI/Textfield/Textfield.jsx";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import * as yup from "yup";
import constants from "../../../../../config/constants";
import palette from "./../../../../../config/palette.js";
import api from "./../../../../../Services";
import { useSnackbar } from "notistack";
import Loader from "./../../../../UI/Loader/Loader";

import {
  ColorButton,
  LogoImage,
  SignupAccoutn,
  Wrapper,
} from "./ResetPassword.style";

const ResetPassword = () => {
  let navigate = useNavigate();
  const { enqueueSnackbar } = useSnackbar();
  const [showResetPage, setShowResetPage] = useState(true);
  const [isToken, setIsToken] = useState("");
  const [tokenId, setTokenId] = useState();
  const [passowrdReseted, setPasswordReseted] = useState(false);
  const validationSchema = yup.object({
    password: yup
      .string("Enter your password")
      .matches(
        /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/i,
        "Password must contain at least 8 characters, one uppercase, one number and one special case character"
      )
      .required("Password is required"),
    confirmPass: yup
      .string()
      .oneOf([yup.ref("password"), null], "Passwords must match")
      .required("Please Confirm Password"),
  });
  const formik = useFormik({
    initialValues: {
      password: "",
      confirmPass: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values, { resetForm }) => {
      const { password, confirmPass } = values;
      resetPasswordHandler(isToken, tokenId, password, confirmPass)
        .then((el) => {
          if (!el.error) {
            // enqueueSnackbar(el.response, {
            //   variant: "success",
            //   autoHideDuration: 4000,
            // });
          } else {
            alert(el.error);
          }
        })
        .catch((el) => console.error(el.error));
      if (passowrdReseted) {
        resetForm({ values: "" });
      }
    },
  });
  const resetPasswordHandler = async (
    isToken,
    tokenId,
    password,
    confirmPass
  ) => {
    let temp = await api.resetPassowrd(isToken, tokenId, password, confirmPass);
    if (!temp.error) {
      // enqueueSnackbar(temp.response, {
      //   variant: "success",
      //   autoHideDuration: 4000,
      // });
      setPasswordReseted(false);
      navigate("/auth");
    } else {
      enqueueSnackbar(temp.response, {
        variant: "error",
        autoHideDuration: 5000,
      });
    }
  };

  const getResetPasswordHandler = async (getToken) => {
    let temp = await api.getResetPasswordToken(getToken);
    if (!temp.error) {
      setTokenId(temp.data);
      setShowResetPage(false);
    } else {
      console.error(temp.true);
    }
  };
  useEffect(() => {
    getResetPasswordHandler(isToken);
  }, [isToken]);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    setIsToken(params.get("token"));
    // let token = params.get('token')
  }, []);
  const backToSignInHandler = () => {
    navigate("../auth");
  };
  return (
    <>
      {showResetPage ? (
        <Loader />
      ) : (
        <Wrapper>
          <LogoImage src={Logo} alt="logo_image" />
          <div>
            <Typography variant="body2">{constants.WelcomeBack}</Typography>
            <Typography variant="h5" mb={4}>
              <strong>
                <span style={{ color: palette.colors.secondaryModified }}>
                  {constants.Resetyour}{" "}
                </span>{" "}
                {constants.Password}
              </strong>
            </Typography>
            <form onSubmit={formik.handleSubmit}>
              <TextField
                label="New Password"
                placeholder="Enter new password"
                type="password"
                id="password"
                name="password"
                value={formik.values.password}
                onChange={formik.handleChange}
                error={
                  formik.touched.password && Boolean(formik.errors.password)
                }
                helperText={formik.touched.password && formik.errors.password}
              />
              <TextField
                id="confirmPass"
                name="confirmPass"
                label="Confirm Password"
                type="password"
                value={formik.values.confirmPass}
                onChange={formik.handleChange}
                error={
                  formik.touched.confirmPass &&
                  Boolean(formik.errors.confirmPass)
                }
                helperText={
                  formik.touched.confirmPass && formik.errors.confirmPass
                }
                placeholder="Confirm new Password"
              />

              <ColorButton
                variant="contained"
                type="submit"
                backgroundcolor={palette.colors.secondaryModified}
              >
                {constants.SavePassword}
              </ColorButton>
            </form>
          </div>
          <SignupAccoutn>
            <span style={{ opacity: "0.6" }}>{constants.BackTo} </span>
            <Button
              variant="text"
              sx={{ color: "#A69ACA", textTransform: "capitalize" }}
              onClick={backToSignInHandler}
            >
              {constants.SignUp}
            </Button>
          </SignupAccoutn>
        </Wrapper>
      )}
    </>
  );
};

export default ResetPassword;

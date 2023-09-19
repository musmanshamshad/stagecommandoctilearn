import React from "react";
import Logo from "../../../../../assets/images/logo/OctilearnLogo.png";
import Button from "@mui/material/Button";
import Typography from "../../../../UI/Typography/TypographyCompo";
import TextField from "../../../../UI/Textfield/Textfield.jsx";
import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import * as yup from "yup";
import constants from "../../../../../config/constants";
import palette from "./../../../../../config/palette";
import { ColorButton, LogoImage, SignupAccoutn, Wrapper } from "./Forget.style";
import api from "./../../../../../Services";
import { useSnackbar } from "notistack";

const Forget = () => {
  const { enqueueSnackbar } = useSnackbar();
  let navigate = useNavigate();
  const validationSchema = yup.object({
    email: yup
      .string()
      .email("Email format is incorrect")
      .required("Email required!"),
  });
  const formik = useFormik({
    initialValues: { email: "" },
    validationSchema: validationSchema,
    onSubmit: ({ email }) => {
      forgetPassHandler(email)
        .then((el) => {
          if (el.error && el.response === "Email address not found.") {
            enqueueSnackbar("E-mail not found! Please register a new ID", {
              variant: "error",
              autoHideDuration: 4000,
            });
            return navigate("../signup", { replace: true });
          } else if (el.error) {
            enqueueSnackbar(el.response, {
              variant: "error",
              autoHideDuration: 4000,
            });
          } else if (!el.error) {
            // enqueueSnackbar("An Email has been send to your email Address", {
            //   variant: "success",
            //   autoHideDuration: 4000,
            // });
            navigate("../link_reset", { replace: true });
          }
        })
        .catch((el) => console.error(el));
    },
  });

  const forgetPassHandler = async (email) => {
    let temp = await api.forgetPasswordSendEmail(email);
    return temp;
  };

  const backToSignInHandler = () => {
    navigate("/auth");
  };

  return (
    <form onSubmit={formik.handleSubmit}>
      <Wrapper>
        <LogoImage src={Logo} alt="logo_image" />
        <div>
          <Typography
            variant="h4"
            mb={2}
            style={{ display: "flex", justifyContent: "center" }}
          >
            <strong>
              <span style={{ color: palette.colors.secondaryModified }}>
                {constants.Forgot}{" "}
              </span>{" "}
              {constants.Password}?
            </strong>
          </Typography>
          <Typography mb={6} variant="body1">
            {constants.enterEmailMessage}
          </Typography>
          <TextField
            label="Email"
            placeholder="Enter your Email"
            type="email"
            id="email"
            name="email"
            value={formik.values.email}
            onChange={formik.handleChange}
            error={formik.touched.email && Boolean(formik.errors.email)}
            helperText={formik.touched.email && formik.errors.email}
          />
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
        </div>
        <ColorButton
          variant="contained"
          type="submit"
          backgroundcolor={palette.colors.secondaryModified}
        >
          {constants.Submit}
        </ColorButton>
      </Wrapper>
    </form>
  );
};

export default Forget;

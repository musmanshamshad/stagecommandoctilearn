import React from "react";
// import Logo from "../../../../../assets/images/auth/logo.png";
import Typography from "../../../../UI/Typography/TypographyCompo.jsx";
import TextField from "../../../../UI/Textfield/Textfield";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import * as yup from "yup";
import { useDispatch } from "react-redux";
import { userActions } from "../../../../../redux/reducers/user";
import { authActions } from "../../../../../redux/reducers/auth";
import constants from "../../../../../config/constants";
import palette from "./../../../../../config/palette.js";
import api from "./../../../../../Services";
// import Logo from "./../../../../../assets/images/logo/Octilearn-Transparent-logo-01.png";
import Logo from "./../../../../../assets/images/logo/OctilearnLogo.png";
import {
  ColorButton,
  ForgotButton,
  ErrorMsg,
  LogoImage,
  SignupAccoutn,
  Wrapper,
  RegisterLink
} from "./Login.style";

const defaultErrorState = { status: false, msg: "" };

const Login = () => {
  const [error, setError] = React.useState(defaultErrorState);
  let navigate = useNavigate();
  const dispatch = useDispatch();
  const validationSchema = yup.object({
    email: yup
      .string()
      .email("Email format is incorrect")
      .required("Email required!"),
    password: yup
      .string("Enter your password")
      .min(8, "Password should be of minimum 8 characters length")
      .required("Password is required"),
  });
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      loginHandler(values)
        .then((el) => {
          if (el.error) {
            let temp = { ...error };
            temp = {
              status: true,
              msg: el.response,
            };
            return setError(temp);
          }
          const token = el.token;
          dispatch(authActions.loginHandler({ loggedIn: "true", token }));
          localStorage.setItem("auth", token);
          setUserProfile(token)
            .then((profileData) => {
              if (!profileData.error) {
                console.log("login data", profileData.data);
                dispatch(userActions.getUserData(profileData.data));
                navigate("/dashboard");
                setError(defaultErrorState);
              }
            })
            .catch((err) => console.error(err));
        })
        .catch((err) => console.error(err));
    },
  });

  const setUserProfile = async (token) => {
    let temp = await api.getCurrentUserData(token);
    return temp;
  };

  const loginHandler = async (credentials) => {
    let temp = await api.login(credentials);
    return temp;
  };

  const forgotPasswordHandler = () => {
    navigate("forget");
  };

  const singupHandler = () => {
    navigate("signup");
  };

  return (
    <Wrapper>
      <LogoImage src={Logo} alt="logo_image" />
      <div>
        <Typography variant="body2">{constants.WelcomeBack}</Typography>
        <Typography variant="h5" mb={4}>
          <strong>
            <span style={{ color: palette.colors.secondaryModified }}>
              {constants.SignInTo}
            </span>{" "}
            {constants.YourAccount}
          </strong>
        </Typography>
        <form onSubmit={formik.handleSubmit}>
          <TextField
            label="Email"
            placeholder="Enter your Email"
            id="email"
            name="email"
            value={formik.values.email}
            onChange={formik.handleChange}
            error={formik.touched.email && Boolean(formik.errors.email)}
            helperText={formik.touched.email && formik.errors.email}
          />
          <TextField
            id="password"
            name="password"
            label="Password"
            type="password"
            value={formik.values.password}
            onChange={formik.handleChange}
            error={formik.touched.password && Boolean(formik.errors.password)}
            helperText={formik.touched.password && formik.errors.password}
            placeholder="Enter your Password"
          />
        
          <ForgotButton
            variant="text"
            onClick={forgotPasswordHandler}
            size="small"
          >
            {constants.ForgotPassword}
          </ForgotButton>

          <ColorButton
            variant="contained"
            type="submit"
            backgroundcolor={palette.colors.secondaryModified}
          >
            {constants.SignInNow}
          </ColorButton>
        </form>
        {error.status && <ErrorMsg>{error.msg}</ErrorMsg>}
      </div>
      <SignupAccoutn>
        {constants.DoNotHaveAccount}
        <Button
          variant="text"
          sx={{ color: "#A69ACA", textTransform: "capitalize" }}
          onClick={singupHandler}
        >
          {constants.SignUp}
        </Button>
      </SignupAccoutn>
    </Wrapper>
  );
};

export default Login;

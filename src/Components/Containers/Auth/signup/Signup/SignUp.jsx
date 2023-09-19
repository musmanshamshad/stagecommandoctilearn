import React from "react";
import TextField from "../../../../UI/Textfield/Textfield.jsx";
import { useFormik } from "formik";
import * as yup from "yup";
import Button from "@mui/material/Button";
import { ColorButton, PreviousButton } from "./SignUp.style.js";
import constants from "../../../../../config/constants";
import palette from "./../../../../../config/palette.js";

const SignUp = (props) => {
  const [countryNotSelected, setCountryNotSelected] = React.useState(false);
  React.useEffect(() => {
    setCountryNotSelected(false);
  }, []);
  const { email, password } = props.signupDefaultValue;
  const validationSchema = yup.object({
    email: yup
      .string()
      .email("Email format is incorrect")
      .required("first name required!"),
    password: yup
      .string("Enter your password")
      .matches(
        /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/i,
        "Password must contain at least 8 characters, one uppercase, one number and one special case character"
      )
      .required("Password is required"),
    confirmpassword: yup
      .string()
      .oneOf([yup.ref("password"), null], "Passwords must match")
      .required("Please Confirm Password"),
  });
  const formik = useFormik({
    initialValues: {
      email: email,
      password: password,
      confirmpassword: password,
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      const { email, password } = values;
      props.getInfo({ email, password });
    },
  });
  const handleBack = () => {
    props.setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  return (
    <form onSubmit={formik.handleSubmit}>
      <TextField
        label="Email"
        placeholder="Enter your email"
        type="email"
        id="email"
        name="email"
        value={formik.values.email}
        onChange={formik.handleChange}
        error={formik.touched.email && Boolean(formik.errors.email)}
        helperText={formik.touched.email && formik.errors.email}
      />
      <TextField
        label="Password"
        placeholder="Create password"
        type="password"
        id="password"
        name="password"
        value={formik.values.password}
        onChange={formik.handleChange}
        error={formik.touched.password && Boolean(formik.errors.password)}
        helperText={formik.touched.password && formik.errors.password}
      />
      <TextField
        label="Confirm Password"
        placeholder="Confirm password"
        type="password"
        id="confirmpassword"
        name="confirmpassword"
        value={formik.values.confirmpassword}
        onChange={formik.handleChange}
        error={
          formik.touched.confirmpassword &&
          Boolean(formik.errors.confirmpassword)
        }
        helperText={
          formik.touched.confirmpassword && formik.errors.confirmpassword
        }
      />

      <ColorButton
        variant="contained"
        backgroundcolor={palette.colors.secondaryModified}
        type="submit"
      >
        {constants.SignUp}
      </ColorButton>

      <PreviousButton>
        <Button
          size="small"
          onClick={handleBack}
          disabled={props.activeStep === 0}
        >
          {constants.Previous}
        </Button>
      </PreviousButton>
    </form>
  );
};

export default SignUp;

import React, { useState } from "react";
import TextField from "../../../../UI/Textfield/Textfield.jsx";
import { useFormik } from "formik";
import * as yup from "yup";
import { FiArrowRight } from "react-icons/fi";
import SelectCompo from "../../../../UI/Select/SelectComp.jsx";
import { ColorButton } from "./RegistrationDetail.style.js";
import constants from "../../../../../config/constants";
import palette from "../../../../../config/palette.js";

const RegistrationDetail = (props) => {
  const [country, setCountry] = useState({ value: "", label: "" });
  const [countryNotSelected, setCountryNotSelected] = useState(false);

  const {
    firstname,
    lastname,
    country: selectedCountryValue,
  } = props.defaultValue;

  React.useEffect(() => {
    setCountryNotSelected(false);
    setCountry({ value: selectedCountryValue });
  }, []);

  const validationSchema = yup.object({
    firstname: yup.string("Enter first name").required("first name required!"),
    lastname: yup.string("Enter second name").required("second name required!"),
  });

  const formik = useFormik({
    initialValues: {
      firstname: firstname,
      lastname: lastname,
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      if (country.value === "") {
        return setCountryNotSelected(true);
      }
      const { firstname, lastname } = values;
      const selectedCountry = { ...country };

      if (
        firstname &&
        lastname &&
        selectedCountry &&
        selectedCountry.value !== ""
      ) {
        sendDataToParent({
          firstname,
          lastname,
          selectedCountryValue: selectedCountry.value,
        });
      }
      props.setActiveStep((prevActiveStep) => prevActiveStep + 1);
      setCountryNotSelected(false);
    },
  });

  const sendDataToParent = ({ firstname, lastname, selectedCountryValue }) => {
    props.getInfo({
      firstname,
      lastname,
      selectedCountryValue: country.value,
    });
    return true;
  };

  const updateCountryHandler = ({ value, label }) => {
    if (!value || !label) {
      console.error("invalid input");
      return false;
    }
    setCountry({ value, label });
    return true;
  };

  return (
    <form onSubmit={formik.handleSubmit}>
      <TextField
        label="First Name"
        placeholder="Type here"
        id="firstname"
        name="firstname"
        value={formik.values.firstname}
        onChange={formik.handleChange}
        error={formik.touched.firstname && Boolean(formik.errors.firstname)}
        helperText={formik.touched.firstname && formik.errors.firstname}
      />
      <TextField
        label="Last Name"
        placeholder="Type here"
        id="lastname"
        name="lastname"
        value={formik.values.lastname}
        onChange={formik.handleChange}
        error={formik.touched.lastname && Boolean(formik.errors.lastname)}
        helperText={formik.touched.lastname && formik.errors.lastname}
      />
      <SelectCompo
        fullWidth={true}
        placeholder="Select country"
        getValue={({ value, label }) => {
          updateCountryHandler({ value, label });
        }}
        hasError={countryNotSelected}
        label="Country"
        initialValue={selectedCountryValue}
      ></SelectCompo>
      <ColorButton
        variant="contained"
        backgroundcolor={palette.colors.secondaryModified}
        type="submit"
        endIcon={<FiArrowRight />}
        disabled={props.activeStep === props.maxSteps - 1}
      >
        {constants.NextStep}
      </ColorButton>
    </form>
  );
};

export default RegistrationDetail;

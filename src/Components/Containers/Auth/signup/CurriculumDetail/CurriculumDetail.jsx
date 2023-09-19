import React, { useState, useEffect } from "react";
import TextField from "../../../../UI/Textfield/Textfield.jsx";
import { useFormik } from "formik";
import * as yup from "yup";
import { FiArrowRight } from "react-icons/fi";
import Button from "@mui/material/Button";
import {
  PreviousButton,
  ColorButton,
  SelectCompoWrapper,
} from "./CurriculumDetail.style.js";
import constants from "../../../../../config/constants";
import palette from "./../../../../../config/palette.js";

const CurriculumDetail = (props) => {
  const [grade, setGrade] = useState({ value: "", label: "" });
  const [gradeNotSelected, setGradeNotSelected] = useState(false);
  const { schoolName, grade: curriculumValue } = props.curriculumDefaultValue;
  useEffect(() => {
    setGradeNotSelected(false);
    setGrade({ value: curriculumValue });
  }, []);

  const validationSchema = yup.object({
    schoolName: yup.string().required("school name required!"),
  });
  const formik = useFormik({
    initialValues: {
      schoolName: schoolName,
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      if (grade.value === "") {
        return setGradeNotSelected(true);
      }
      const { schoolName } = values;
      const selectedGrade = { ...grade };
      if (schoolName && selectedGrade.value !== "") {
        sendDataToParent({
          schoolName,
          selectedGradeValue: selectedGrade.value,
        });
      }

      props.setActiveStep((prevActiveStep) => prevActiveStep + 1);
      setGradeNotSelected(false);
    },
  });
  const sendDataToParent = ({ schoolName, selectedGradeValue }) => {
    props.getInfo({
      schoolName,
      selectedGradeValue: grade.value,
    });
    return true;
  };

  const handleBack = () => {
    props.setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const updateGradeHandler = ({ value, label }) => {
    if (!value || !label) {
      console.error("invalid input");
      return false;
    }
    setGrade({ value, label });
    return true;
  };
  return (
    <form onSubmit={formik.handleSubmit}>
      <TextField
        label="School Name"
        placeholder="Type here"
        id="schoolName"
        name="schoolName"
        value={formik.values.schoolName}
        onChange={formik.handleChange}
        error={formik.touched.schoolName && Boolean(formik.errors.schoolName)}
        helperText={formik.touched.schoolName && formik.errors.schoolName}
      />
      <SelectCompoWrapper
        fullWidth={true}
        options={props.grades}
        placeholder="Select grade level"
        getValue={({ value, label }) => {
          updateGradeHandler({ value, label });
        }}
        hasError={gradeNotSelected}
        label="Grade level"
        initialValue={curriculumValue}
      ></SelectCompoWrapper>
      <ColorButton
        variant="contained"
        backgroundcolor={palette.colors.secondaryModified}
        type="submit"
        endIcon={<FiArrowRight />}
        disabled={props.activeStep === props.maxSteps - 1}
      >
        {constants.NextStep}
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

export default CurriculumDetail;

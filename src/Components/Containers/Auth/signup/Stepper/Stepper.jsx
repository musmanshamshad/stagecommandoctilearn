import React from "react";
import MobileStepper from "@mui/material/MobileStepper";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
import Logo from "../../../../../assets/images/logo/OctilearnLogo.png";
import RegistrationDetail from "./../RegistrationDetail/RegistrationDetail";
import Curriculum from "./../CurriculumDetail/CurriculumDetail";
import Signup from "./../Signup/SignUp";
import constants from "../../../../../config/constants";
import palette from "./../../../../../config/palette.js";
import Loader from "./../../../../../Components/UI/Loader/Loader";
import { useSnackbar } from "notistack";
import api from "./../../../../../Services";
import {
  LogoImage,
  SignupAccoutn,
  Wrapper,
  LoadingWrapper,
  StepperWrapper,
} from "./Stepper.style.js";

const steps = [1, 2, 3];

const Registration = () => {
  const { enqueueSnackbar } = useSnackbar();
  let navigate = useNavigate();
  const [grades, setGrades] = React.useState([]);
  const [activeStep, setActiveStep] = React.useState(0);
  const maxSteps = steps.length;
  const [info, setInfo] = React.useState({});
  const [dataProcessing, setDataProcessing] = React.useState(false);
  const [formIsCompleted, setFormIsCompleted] = React.useState(false);
  const [defaultValue, setDefaultValue] = React.useState({
    firstname: "",
    lastname: "",
    country: "",
  });
  const [curriculumDefaultValue, setCurriculumDefaultValue] = React.useState({
    schoolName: "",
    grade: "",
  });
  const [signupDefaultValue, setSignupDefaultValue] = React.useState({
    email: "",
    password: "",
  });
  const singinHandller = () => {
    navigate("/");
  };
  const updateHandler = (data) => {
    let temp = { ...info };
    temp = { ...temp, ...data };

    setInfo(temp);
  };

  const sendEmailHandler = async (details) => {
    let tempPost = await api.addNewUser(details);
    return tempPost;
  };

  const addEmailHandler = () => {
    let temp = { ...info };
    const {
      selectedCountryValue: country,
      firstname,
      selectedGradeValue: grade,
      lastname,
      schoolName,
      email,
      password,
    } = temp;
    const gradeLevelId = grades.find(
      (eachGrade) => eachGrade.value === grade
    ).id;

    const transformedData = {
      firstName: firstname,
      lastName: lastname,
      email: email,
      password,
      country,
      schoolName,
      gradeLevelId,
    };
    sendEmailHandler(transformedData)
      .then((res) => {
        if (!res.error) {
          // case if successful
          navigate("../verify-password");
        } else {
          enqueueSnackbar(
            "E-mail already registered! Please Sign-in or go to forget password to retrieve your password!",
            {
              variant: "info",
              autoHideDuration: 6000,
            }
          );
          // navigate("../");
          // case if unsuccessful
          setFormIsCompleted(false);
        }
      })
      .catch((error) => console.error(error));
    setDataProcessing(false);
  };
  const getRegistrationDetailsHandler = (e) => {
    const { firstname, lastname, selectedCountryValue } = e;
    if (!firstname || !lastname || selectedCountryValue) {
      let temp = { ...defaultValue };
      temp = {
        firstname: e.firstname,
        lastname: e.lastname,
        country: e.selectedCountryValue,
      };
      setDefaultValue(temp);
    }

    updateHandler(e);
  };

  const getCurriculumDetailsHandler = (e) => {
    const { schoolName, selectedGradeValue } = e;
    if (!schoolName || selectedGradeValue) {
      let temp = { ...curriculumDefaultValue };
      temp = {
        schoolName: e.schoolName,
        grade: e.selectedGradeValue,
      };
      setCurriculumDefaultValue(temp);
    }
    updateHandler(e);
  };
  const getSignUpDetailsHandler = (e) => {
    updateHandler(e);
    setSignupDefaultValue(e);
    setFormIsCompleted(true);
  };
  React.useEffect(() => {
    if (formIsCompleted) {
      setDataProcessing(true);
      addEmailHandler();
    }
  }, [formIsCompleted]);
  const getGradesHandler = async () => {
    let temp = await api.getGrades();
    const { rows } = temp.data;
    setGrades([
      ...rows.map((el) => ({ ...el, value: el.title, label: el.title })),
    ]);
  };

  React.useEffect(() => {
    // GET API FOR GRADES AND CURRICULUM
    getGradesHandler();
  }, []);
  return (
    <Wrapper>
      <LogoImage src={Logo} alt="logo_image" />
      <div>
        {dataProcessing ? (
          <LoadingWrapper>
            <Typography variant="h5">Please wait!</Typography>
            <Loader />
          </LoadingWrapper>
        ) : (
          <>
            <Typography variant="body2">{constants.WelcomeBack}</Typography>
            <Typography variant="h5" mb={1}>
              <strong>
                <span style={{ color: palette.colors.secondaryModified }}>
                  {constants.SignUpto}{" "}
                </span>{" "}
                {constants.YourAccount}
              </strong>
            </Typography>
            <StepperWrapper>
              <Typography variant="body1" sx={{ opacity: "0.8" }}>
                Step
              </Typography>
              <MobileStepper
                variant="text"
                steps={maxSteps}
                position="static"
                activeStep={activeStep}
              ></MobileStepper>
            </StepperWrapper>

            <>
              {activeStep === 0 ? (
                <RegistrationDetail
                  defaultValue={defaultValue}
                  getInfo={getRegistrationDetailsHandler}
                  activeStep={activeStep}
                  maxSteps={maxSteps}
                  setActiveStep={setActiveStep}
                />
              ) : null}
              {activeStep === 1 ? (
                <Curriculum
                  curriculumDefaultValue={curriculumDefaultValue}
                  getInfo={getCurriculumDetailsHandler}
                  activeStep={activeStep}
                  maxSteps={maxSteps}
                  setActiveStep={setActiveStep}
                  grades={grades}
                />
              ) : null}
              {activeStep === 2 ? (
                <Signup
                  signupDefaultValue={signupDefaultValue}
                  getInfo={getSignUpDetailsHandler}
                  activeStep={activeStep}
                  maxSteps={maxSteps}
                  setActiveStep={setActiveStep}
                />
              ) : null}
            </>
          </>
        )}
      </div>
      <SignupAccoutn>
        <span> {constants.AlreadyHaveAccount}</span>
        <Button
          variant="text"
          sx={{ color: "#A69ACA", textTransform: "capitalize" }}
          onClick={singinHandller}
        >
          {constants.SignIn}
        </Button>
      </SignupAccoutn>
    </Wrapper>
  );
};

export default Registration;

import React, { useState, useReducer } from "react";
import Divider from "@mui/material/Divider";
import {
  CardDivWrapper,
  DividerWrapper,
  Container,
  SetperDiv,
  ButtonTextWrapper,
  StyleButton,
  RightLeftButtonWrapper,
  Typography,
  ButtonDefinition,
  ButtonTerm,
  ButtonDefinitionWrapper,
  IconButtonWrapper,
} from "./FlashCardView.style.js";
import Pallete from "./../../../config/palette.js";
import MobileStepper from "@mui/material/MobileStepper";
import { FullScreen, useFullScreenHandle } from "react-full-screen";
import "../../../App.css";
import StackNumbers from "./StackNumbers";
import TypographyCompo from "./../Typography/TypographyCompo";
import IconButton from "@mui/material/IconButton";
import OpenFullView from "./icons/OpenFullView";
import ClickSvg from "./icons/ClickSvg";
import BackSvg from "./icons/BackSvg";
import NextSvg from "./icons/NextSvg";
import CrossSvg from "./icons/CrossSvg";
import QuestionMarkSvg from "./icons/QuestionMarkSvg";
import CheckSvg from "./icons/CheckSvg";
import PropTypes from "prop-types";
import TextEditorRenderOutput from "./../TextEditorRenderOutput/TextEditorRenderOutput";
import Alert from "./../Alert/Alert";
import { useSnackbar } from "notistack";

const controller = [
  {
    term: "A dye that changes to different colors in acids and alkalis.",
    definition: "Indicators are substances whose solutions.",
  },
];

const FlashCardView = ({
  controllerData,
  sideEffect,
  awaitingUserResponse,
  flashCardIdSideEffect,
  getMenuState,
}) => {
  const handle = useFullScreenHandle();
  const { enqueueSnackbar } = useSnackbar();
  const [activeStep, setActiveStep] = useState(0);
  const [activeFlash, setActiveFlash] = useState(true);
  const [_fullView, set_FullView] = useState(true);
  const [isSelected, setIsSelected] = useState({ value: false });

  const handleChangeSelected = (value) => {
    setIsSelected((prevState) => ({ ...prevState, value }));
  };

  const maxSteps = controllerData && controllerData.length;

  const initialState = {
    allAttemptedQuestion: [],
    totalScore: { no: 0, yes: 0, mayBe: 0 },
  };
  const reducer = (state, action) => {
    switch (action.type) {
      case "YES":
        sideEffect({ response: "YES", id: controllerData[activeStep].id });
        return {
          ...state,
          allAttemptedQuestion: action.payload.attemptedQuestions,
          totalScore: action.payload.totalScore,
        };

      // break;

      case "NO":
        sideEffect({ response: "NO", id: controllerData[activeStep].id });
        return {
          ...state,
          allAttemptedQuestion: action.payload.attemptedQuestions,
          totalScore: action.payload.totalScore,
        };

      case "MAYBE":
        sideEffect({ response: "MAYBE", id: controllerData[activeStep].id });
        return {
          ...state,
          allAttemptedQuestion: action.payload.attemptedQuestions,
          totalScore: action.payload.totalScore,
        };
      // break;

      default:
        throw new Error();
    }
    // return stateCopy;
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  function makePayLoad(type) {
    let obj = {};
    if (type === "no") {
      obj = { no: 1, yes: 0, mayBe: 0 };
    } else if (type === "yes") {
      obj = { yes: 1, no: 0, mayBe: 0 };
    } else {
      obj = { mayBe: 1, no: 0, yes: 0 };
    }
    let temp = [];
    if (state.allAttemptedQuestion.length !== 0) {
      temp = [...state.allAttemptedQuestion];
    }

    temp[activeStep] = obj;

    const score = temp.reduce(
      (acc = {}, item = {}) => {
        acc.no = acc.no + item.no;
        acc.yes = acc.yes + item.yes;
        acc.mayBe = acc.mayBe + item.mayBe;

        return acc;
      },
      {
        no: 0,
        yes: 0,
        mayBe: 0,
      }
    );

    return {
      attemptedQuestions: temp,
      totalScore: score,
    };
  }
  flashCardIdSideEffect(controllerData[activeStep].id);

  const disabledRightArrow = (userHasSelected) => {
    // ({
    //   loading: awaitingUserResponse.loading,
    //   allAttemptedQuestion: !state.allAttemptedQuestion[activeStep],
    // });
    const shouldBeDisabled = awaitingUserResponse.loading;
    // STOP WHEN LOADING IS TRUE
    // OR
    // STOP WHEN NOT SELECTED IS TRUE
    // BUTTON IS DISABLED WHEN RETURN IS TRUE
    // ABOVE STOPS SHOULD BE RETURNING TRUE

    return shouldBeDisabled;
  };

  return (
    <Container>
      <StackNumbers
        remaining={controllerData.length - state.allAttemptedQuestion.length}
        notLearned={state.totalScore.no}
        knownWell={state.totalScore.yes}
        notSure={state.totalScore.mayBe}
      />
      <DividerWrapper>
        <Divider
          sx={{
            background: Pallete.colors.unselected,
            height: "2px",
            borderRadius: "10px",
          }}
        />
      </DividerWrapper>
      <FullScreen handle={handle} className="fullscreen-enabled">
        <CardDivWrapper>
          <SetperDiv>
            <MobileStepper
              variant="text"
              steps={maxSteps}
              position="static"
              activeStep={activeStep}
            ></MobileStepper>
            <ButtonTerm
              size="small"
              onClick={() => setActiveFlash(!activeFlash)}
            >
              {activeFlash ? "Term" : "Definition"}
            </ButtonTerm>
          </SetperDiv>

          {!controllerData || controllerData.length === 0 ? (
            <Alert message="No Question Answer added!" severity="warning" />
          ) : (
            <Typography variant={activeFlash ? "h6" : "body2"}>
              <TextEditorRenderOutput
                data={
                  activeFlash
                    ? controllerData[activeStep].question
                    : controllerData[activeStep].answer
                }
              />
            </Typography>
          )}

          <ButtonDefinitionWrapper>
            <ButtonDefinition
              variant="text"
              onClick={() => setActiveFlash(!activeFlash)}
              startIcon={<ClickSvg />}
            >
              {activeFlash
                ? "Click to see the term"
                : " Click to see the definition"}
            </ButtonDefinition>
            <>
              <IconButtonWrapper
                _fullview={_fullView}
                onClick={() => {
                  _fullView ? handle.enter() : handle.exit();
                  set_FullView(!_fullView);
                }}
              >
                <OpenFullView />
              </IconButtonWrapper>
            </>
          </ButtonDefinitionWrapper>
        </CardDivWrapper>
        <ButtonTextWrapper>
          <TypographyCompo variant="body2">
            <strong>Did you know that?</strong>
          </TypographyCompo>
          <RightLeftButtonWrapper>
            <IconButton
              onClick={() =>
                setActiveStep((prevActiveStep) => prevActiveStep - 1)
              }
              disabled={activeStep === 0}
              aria-label="OpenvIEW"
            >
              <BackSvg />
            </IconButton>
            <StyleButton
              disabled={state.allAttemptedQuestion[activeStep]?.no === 1}
              size="small"
              background={
                state.allAttemptedQuestion[activeStep]?.no === 1
                  ? "#E015A2"
                  : "#f6e2f3"
              }
              sx={{ color: "#e229ab" }}
              onClick={() => {
                handleChangeSelected(true);
                dispatch({ type: "NO", payload: makePayLoad("no") });
              }}
            >
              {state.allAttemptedQuestion[activeStep]?.no === 1 ? (
                <CrossSvg />
              ) : (
                "No"
              )}
            </StyleButton>
            <StyleButton
              size="small"
              disabled={state.allAttemptedQuestion[activeStep]?.yes === 1}
              background={
                state.allAttemptedQuestion[activeStep]?.yes === 1
                  ? "#81D0D4"
                  : "#edf5f8"
              }
              sx={{ color: "#8bd3d8" }}
              onClick={() => {
                handleChangeSelected(true);
                dispatch({ type: "YES", payload: makePayLoad("yes") });
              }}
            >
              {state.allAttemptedQuestion[activeStep]?.yes === 1 ? (
                <CheckSvg />
              ) : (
                "Yes"
              )}
            </StyleButton>
            <StyleButton
              size="small"
              disabled={state.allAttemptedQuestion[activeStep]?.mayBe === 1}
              background={
                state.allAttemptedQuestion[activeStep]?.mayBe === 1
                  ? "#FFC76D"
                  : "#f9eee0"
              }
              sx={{ color: "#fecb79" }}
              onClick={() => {
                handleChangeSelected(true);
                dispatch({ type: "MAYBE", payload: makePayLoad("mayBe") });
              }}
            >
              {state.allAttemptedQuestion[activeStep]?.mayBe === 1 ? (
                <QuestionMarkSvg />
              ) : (
                "Maybe"
              )}
            </StyleButton>
            {/* DISABLED TRUE WHEN WE WANT TO STOP */}

            <IconButton
              disabled={disabledRightArrow(isSelected.value)}
              onClick={() => {
                if (activeStep !== maxSteps - 1) {
                  if (state.allAttemptedQuestion[activeStep]) {
                    setActiveStep((prevActiveStep) => prevActiveStep + 1);
                  }
                } else {
                  // enqueueSnackbar("Quizz attempted successfully!", {
                  //   variant: "success",
                  // });
                  getMenuState(true);
                  // navigate("/dashboard");
                }
              }}
              aria-label="OpenvIEW"
            >
              <NextSvg />
            </IconButton>
          </RightLeftButtonWrapper>
        </ButtonTextWrapper>
      </FullScreen>
    </Container>
  );
};

FlashCardView.propTypes = {
  awaitingUserResponse: PropTypes.shape({
    loading: PropTypes.any,
  }),
  controllerData: PropTypes.shape({
    length: PropTypes.number,
  }),
  flashCardIdSideEffect: PropTypes.func,
  getMenuState: PropTypes.func,
  sideEffect: PropTypes.func,
};
FlashCardView.defaultProps = {
  controllerData: controller,
  sideEffect: (e) => {
    return;
  },
  flashCardIdSideEffect: (e) => {
    return;
  },
  getMenuState: (e) => {
    return;
  },
  awaitingUserResponse: {
    loading: false,
  },
};

export default FlashCardView;

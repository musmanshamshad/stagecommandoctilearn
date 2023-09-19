import React from "react";
import Grid from "@mui/material/Grid";
import {
  DivHeading,
  ImageDic,
  TopicTitle,
  IconTextWrapper,
  DivText,
  TypographyStarted,
  TypographyStats,
  TypographyCompleted,
} from "./FlashCard.style";
import StackCompo from "./../Stack/Stack";
import TypographyCompo from "./../Typography/TypographyCompo";
import Divider from "@mui/material/Divider";
import pallete from "../../../config/palette.js";
import DashboardSvg from "./../../Containers/Subject/Headers/LearningResources/icons/DashboardSvg";
import IconButton from "@mui/material/IconButton";
import StarSvg from "./../../Containers/Subject/Headers/LearningResources/icons/StarSvg";
import FlashCardStack from "./../FlashCardStack/FlashCardStack";
import { PropTypes } from "prop-types";
import capitalize from "../../../helpers/capitalize";
// BUG FROM ASAD: this data prop should be sent from parent
import CustomLoader from "../CustomLoader/CustomLoader";
import { EachStackDefaultProps } from "./../../../config/MockData/FlashCardData";
const FlashCard = ({
  stackID,
  title,
  questions,
  image,
  _1000px,
  clicked,
  type,
  questionsArr,
  loading,
  show,
  setShow,
  flashcardStatus,
}) => {
  const saveHandler = (e) => {
    if (!show) {
      setShow(e);
    }
  };
  console.log("i am title", title);
  console.log("questionsArr", questionsArr);
  return (
    <FlashCardStack
      onClick={(e) => {
        clicked({ stackID, title, type });
      }}
    >
      <DivText>
        {flashcardStatus.status === "Completed" ? (
          <TypographyCompleted variant="body2">
            {flashcardStatus.status}
          </TypographyCompleted>
        ) : flashcardStatus.status === "In Progress" ? (
          <TypographyStats variant="body2">
            {flashcardStatus.doneFlashcards}/{questions}{" "}
            {flashcardStatus.status}
          </TypographyStats>
        ) : (
          <TypographyStarted variant="body2">
            {flashcardStatus.status}
          </TypographyStarted>
        )}
        <StackCompo
          direction="row"
          divider={
            <Divider
              orientation="vertical"
              flexItem
              style={{ background: pallete.unselected }}
            />
          }
        >
          <TypographyCompo variant="body2">{capitalize(type)}</TypographyCompo>
          <TypographyCompo variant="body2">{title}</TypographyCompo>
        </StackCompo>
      </DivText>
      <Grid container spacing={0}>
        <Grid item xs={6}>
          <DivHeading>
            <div>
              <TopicTitle variant="h5" sx={{ marginBottom: "15px" }}>
                {capitalize(title)}
              </TopicTitle>
              <IconTextWrapper>
                <DashboardSvg />
                <TypographyCompo variant="body2">
                  {questions} Flashcards
                </TypographyCompo>
              </IconTextWrapper>
            </div>
            <IconTextWrapper
              onClick={(e) => {
                e.stopPropagation();
                saveHandler(e);
              }}
            >
              {loading ? (
                <IconButton color="primary" aria-label="add to shopping cart">
                  <CustomLoader
                    variant="tail-spin"
                    height="18px"
                    width="18px"
                    color="#624ba2"
                  />
                </IconButton>
              ) : (
                <IconButton color="primary" aria-label="add to shopping cart">
                  <StarSvg show={show} />
                </IconButton>
              )}

              <TypographyCompo
                variant="body2"
                color={show ? "#624ba2" : "#ADB4C5"}
              >
                {show ? "Saved" : "Save to My Library"}
              </TypographyCompo>
            </IconTextWrapper>
          </DivHeading>
        </Grid>
        <Grid item xs={6}>
          <ImageDic>
            <img src={image} alt="flashcardImage" />
          </ImageDic>
        </Grid>
      </Grid>
    </FlashCardStack>
  );
};

export default FlashCard;

FlashCard.propTypes = {
  _1000px: PropTypes.any,
  clicked: PropTypes.func,
  data: PropTypes.any,
  id: PropTypes.any,
  image: PropTypes.any,
  questions: PropTypes.any,
  questionsArr: PropTypes.any,
  setShow: PropTypes.func.isRequired,
  show: PropTypes.bool.isRequired,
  stackID: PropTypes.any,
  title: PropTypes.any,
  type: PropTypes.string,
  flashcardStatus: PropTypes.object,
};

FlashCard.defaultProps = {
  id: EachStackDefaultProps.id,
  title: EachStackDefaultProps.title,
  questions: EachStackDefaultProps.questions,
  image: EachStackDefaultProps.image,
  type: "chapter",
  clicked: (e) => {
    return;
  },
  loading: false,
  flashcardStatus: { status: "Not yet Started!", doneFlashcards: 0 },
};

import PropTypes from "prop-types";
import React from "react";
import StackComp from "../Stack/Stack";
import AddQuestion from "./icons/AddQuestionSvg";
import IconButton from "@mui/material/IconButton";
import { Label } from "./FlashcardCreate.style";

const AddNewQuestion = ({ addQuestionHandler }) => {
  return (
    <StackComp direction="row" alignItems="center">
      <IconButton onClick={addQuestionHandler} sx={{ margin: 0, padding: 0 }}>
        <AddQuestion />
      </IconButton>
      <Label>Add New Flashcard</Label>
    </StackComp>
  );
};

export default AddNewQuestion;

AddNewQuestion.propTypes = {
  addQuestionHandler: PropTypes.any,
};

AddNewQuestion.defaultProps = {
  addQuestionHandler: (e) => {
    return;
  },
};

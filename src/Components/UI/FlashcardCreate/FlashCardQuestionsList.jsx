import PropTypes from "prop-types";
import React from "react";
import SimpleList from "../List/SmallTextList";
import Delete from "./icons/DeleteSvg";
import { SimpleListWrapper } from "./FlashcardCreate.style";

const FlashCardQuestionsList = ({ getSelection, questions, getDelete }) => {
  return (
    <SimpleListWrapper>
      <SimpleList
        secondaryIcon={<Delete />}
        secondaryAction={getDelete}
        selectItem={getSelection}
        items={questions}
        height="295px"
      />
    </SimpleListWrapper>
  );
};

export default FlashCardQuestionsList;

FlashCardQuestionsList.propTypes = {
  getSelection: PropTypes.any,
};
FlashCardQuestionsList.defaultProps = {
  getSelection: (e) => {
    return;
  },
  questions: [],
};

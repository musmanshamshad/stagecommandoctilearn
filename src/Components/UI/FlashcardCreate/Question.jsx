import React from "react";
import TextEditorToggle from "../TextEditorToggle/TextEditorToggle";

const Question = ({ getQuestionHandler, question }) => {
  return (
    <TextEditorToggle
      getData={(e) => getQuestionHandler(JSON.stringify(e))}
      placeholder="Enter Question"
      data={JSON.parse(question)}
    />
  );
};

export default Question;

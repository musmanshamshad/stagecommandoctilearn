import React from "react";
import TextEditorToggle from "../TextEditorToggle/TextEditorToggle";

const Answer = ({ getAnswerHandler, answer }) => {
  return (
    <TextEditorToggle
      getData={(e) => getAnswerHandler(JSON.stringify(e))}
      placeholder="Enter Question"
      data={JSON.parse(answer)}
    />
  );
};

export default Answer;

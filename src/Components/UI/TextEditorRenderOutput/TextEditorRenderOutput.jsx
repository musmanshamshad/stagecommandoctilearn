import PropTypes from "prop-types";
import React from "react";
import ErrorBoundary from "./../../../Errors/ErrorBoundary";

const TextEditorRenderOutput = ({
  data,
  parentStyles,
  contentStyles,
  noteId,
}) => {
  const { html } = JSON.parse(data);
  return (
    <ErrorBoundary>
      <div style={{ ...parentStyles, wordBreak: "break" }} id={noteId}>
        <div dangerouslySetInnerHTML={{ __html: html }} style={contentStyles} />
      </div>
    </ErrorBoundary>
  );
};

TextEditorRenderOutput.propTypes = {
  contentStyles: PropTypes.any,
  // data: PropTypes.shape({
  //   html: PropTypes.string,
  // }),
  html: PropTypes.string,
  parentStyles: PropTypes.any,
};

export default TextEditorRenderOutput;

TextEditorRenderOutput.defaultProps = {
  data: {
    html: "",
  },
};

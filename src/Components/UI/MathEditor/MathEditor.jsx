import React from "react";
import { InlineTex } from "react-tex";
import PropTypes from "prop-types";

const MathEditor = ({ latexString }) => {
  return <InlineTex texContent={latexString} />;
};

export default MathEditor;

MathEditor.propTypes = {
  latexString: PropTypes.string,
};

MathEditor.defaultProps = {
  latexString: "",
};

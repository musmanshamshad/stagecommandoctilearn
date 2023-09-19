import React from "react";
import {
  DivWrapper,
  FirstDiv,
  SecondDiv,
  ThirdDiv,
} from "./FlashCardStack.style.js";
import { PropTypes } from "prop-types";

const FlashCardStack = ({ paddingTop, children, ...props }) => {
  return (
    <DivWrapper {...props}>
      <FirstDiv paddingTop={paddingTop}> {children}</FirstDiv>
      <SecondDiv />
      <ThirdDiv />
    </DivWrapper>
  );
};

export default FlashCardStack;

FlashCardStack.propstypes = {
  children: PropTypes.string,
  paddingTop: PropTypes.string,
};

FlashCardStack.defaultProps = {
  children: "Hello Fashcard Stack",
  paddingTop: "24px",
};

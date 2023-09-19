import React from "react";
import { StyledSection } from "./Dashboard.style";

const Section = ({ children, ...props }) => {
  return (
    <StyledSection {...props} spacing={3.125} item container xs={12}>
      {children}
    </StyledSection>
  );
};
export default Section;

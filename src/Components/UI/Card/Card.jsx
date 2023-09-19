import React from "react";
import { StyledCard } from "./Card.style";

const CardComp = ({ nopadding, children, ...props }) => {
  return (
    <StyledCard nopadding={+nopadding} {...props}>
      {children}
    </StyledCard>
  );
};

export default CardComp;

CardComp.defaultProps = {
  nopadding: false,
};

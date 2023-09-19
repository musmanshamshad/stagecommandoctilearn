import React from "react";
import * as StyledComponents from "./PrimaryAccordian.style";
import PropTypes from "prop-types";
import AccordionDetails from "@mui/material/AccordionDetails";
import Checked from "./icons/Checked";
import defaultProps from "./defaultProps";
import palette from "./../../../../config/palette";

const {
  AccordianWrapper,
  AccordionSummary,
  SummaryDiv,
  HeaderName,
  Subheading,
} = StyledComponents;

const Accordians = ({ controller, expandAll, toggleExpandAllOff }) => {
  const [expandArr, setExpandArr] = React.useState([]);
  const changeAccordionHandler = (e, index) => {
    let temp = [...expandArr];
    const alreadyExists = temp.includes(index);
    toggleExpandAllOff && toggleExpandAllOff();
    if (alreadyExists) {
      temp.splice(
        temp.findIndex((e) => e === index),
        1
      );
      return setExpandArr(temp);
    } else {
      temp.push(index);
      return setExpandArr(temp);
    }
  };

  React.useEffect(() => {
    let temp = [];
    if (expandAll) {
      temp = controller.map((el, index) => index);
    }
    setExpandArr(temp);
  }, [expandAll, setExpandArr]);

  return (
    <div>
      {controller.map((accordion, index) => (
        <AccordianWrapper
          TransitionProps={{ unmountOnExit: true }}
          expanded={expandArr.includes(index)}
          onChange={(e) => changeAccordionHandler(e, index)}
          square={true}
          key={index}
        >
          <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
            <SummaryDiv>
              <HeaderName>
                <Checked color={palette.colors.primaryModified} />
                <strong>{accordion.heading}</strong>
              </HeaderName>
              <Subheading>{accordion.description}</Subheading>
            </SummaryDiv>
          </AccordionSummary>
          <AccordionDetails>{accordion.content}</AccordionDetails>
        </AccordianWrapper>
      ))}
    </div>
  );
};

Accordians.propTypes = {
  controller: PropTypes.shape({
    map: PropTypes.func,
  }),
  expandAll: PropTypes.bool,
  toggleExpandAllOff: PropTypes.func,
};

export default Accordians;

Accordians.defaultProps = {
  ...defaultProps,
};

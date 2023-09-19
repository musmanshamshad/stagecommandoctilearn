import PropTypes from "prop-types";
import React from "react";
import {
  Accordian,
  AccordionDetails,
  AccordionSummary,
  HeaderText,
  HeaderWrapper,
  MasterWrapper,
} from "./RightBarAccordian.style";

const RightBarAccordian = ({ controller }) => {
  const [expanded, setExpanded] = React.useState(false);

  const changeAccordionHandler = (index) => {
    return (event, isExpanded) => {
      if (expanded === index) {
        return setExpanded(false);
      }
      setExpanded(index);
      // onChangeHandler()
    };
  };

  return (
    <MasterWrapper>
      {controller.length > 0 &&
        controller.map((accordionData, index) => (
          <Accordian
            expanded={expanded === index}
            onChange={changeAccordionHandler(index)}
            disableGutters
            key={index}
          >
            <AccordionSummary
              aria-controls="panel1d-content"
              id="panel1d-header"
            >
              <HeaderWrapper>
                <HeaderText>{accordionData.title}</HeaderText>
              </HeaderWrapper>
            </AccordionSummary>
            <AccordionDetails>{accordionData.content}</AccordionDetails>
          </Accordian>
        ))}
    </MasterWrapper>
  );
};

RightBarAccordian.propTypes = {
  controller: PropTypes.shape({
    map: PropTypes.func,
  }),
  // onChangeHandler: PropTypes.func
};

RightBarAccordian.defaultProps = {
  controller: [{ title: "Title", content: <div>CONTENT</div> }],
  // onChangeHandler: (e) => {
  //   return
  // }
};

export default RightBarAccordian;

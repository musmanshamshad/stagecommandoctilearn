import PropTypes from "prop-types";
import React from "react";
import Typography from "@mui/material/Typography";
import pallette from "../../../../config/palette";
import Checked from "../PrimaryAccordion/icons/Checked";
import AccordionDetails from "@mui/material/AccordionDetails";
import defaultProps from "./defaultProps";

import {
  Accordian,
  AccordionSummary,
  HeaderText,
  HeaderWrapper,
} from "./SecondaryAccordian.style";

const ChapterAccordian = ({ controller, expandAll }) => {
  const [expandArr, setExpandArr] = React.useState([]);
  const changeAccordionHandler = (e, index) => {
    let temp = [...expandArr];

    const alreadyExists = temp.includes(index);

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
      {controller.map((accordionData, index) => (
        <Accordian
          TransitionProps={{ unmountOnExit: true }}
          expanded={expandArr.includes(index)}
          onChange={(e) => changeAccordionHandler(e, index)}
          disableGutters
          key={index}
        >
          <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
            <HeaderWrapper>
              <HeaderText>
                <Checked color={pallette.colors.primaryModified} />
                {accordionData.heading}
              </HeaderText>
              <Typography color={pallette.colors.unselected}>
                {accordionData.description}
              </Typography>
            </HeaderWrapper>
          </AccordionSummary>
          <AccordionDetails>{accordionData.content}</AccordionDetails>
        </Accordian>
      ))}
    </div>
  );
};

ChapterAccordian.propTypes = {
  controller: PropTypes.shape({
    map: PropTypes.func,
  }),
};

ChapterAccordian.defaultProps = {
  ...defaultProps,
};

export default ChapterAccordian;

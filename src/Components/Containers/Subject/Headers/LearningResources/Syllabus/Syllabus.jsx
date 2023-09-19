import * as React from "react";
import Divider from "@mui/material/Divider";
import Stack from "../../../../../UI/Stack/Stack";
import Typography from "../../../../../UI/Typography/TypographyCompo";
import ToolTip from "../../../../../UI/Tooltip/ToolTip";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import HighlightSvg from "../../../icons/HighlightSvg";
import CommentSvg from "../../../icons/CommentSvg";
import PrintSvg from "../../../icons/PrintOutSvg";
import { useParams } from "react-router-dom";
import capitalize from "../../../../../../helpers/capitalize";
import { subjectActions } from "../../../../../../redux/reducers/subject";
import { useDispatch, useSelector } from "react-redux";
import constants from "../../../../../../config/constants";
import { downloadRef } from "./../../../../../../helpers/download";

import {
  StackWrapper,
  HeaderButton,
  ExpandButton,
  HeaderDiv,
} from "./Syllabus.style";

const Header = ({ handlePrint, pageRef }) => {
  const accordionsAreExpanded = useSelector(
    (state) => state.subject.expandAccordian
  );
  const { name, value } = useParams();
  const dispatch = useDispatch();
  const courseTitle = useSelector((state) => state.course?.title);
  // const allExpanded = useSelector((state) => state.subject.unitsValue);
  const expandHandler = () => {
    dispatch(subjectActions.accordianExpandHandler());
  };
  const { syllabus } = constants.learningResources;

  return (
    <StackWrapper>
      <Typography sx={{ fontWeight: "600" }}>
        {capitalize(name)} {syllabus.syllabus} ({value} Units)
      </Typography>
      <Divider light style={{ marginBottom: "-12px" }} />
      <HeaderDiv>
        <Stack
          direction="row"
          spacing={{ xs: 1, sm: 2, md: 3 }}
          divider={
            <Divider
              orientation="vertical"
              variant="string"
              flexItem
              style={{ marginBottom: "16px", marginTop: "16px" }}
            />
          }
        >
          <ToolTip title={syllabus.highlightTooltip}>
            <HeaderButton variant="text" startIcon={<HighlightSvg />}>
              {constants.HighlightText}
            </HeaderButton>
          </ToolTip>
          <ToolTip title={syllabus.commentTooltip}>
            <HeaderButton variant="text" startIcon={<CommentSvg />}>
              {constants.CommentText}
            </HeaderButton>
          </ToolTip>
          <ToolTip title={syllabus.downloadTooltip}>
            <HeaderButton
              variant="text"
              onClick={(e) => {
                if (pageRef.current === null) {
                  return;
                }
                downloadRef(
                  pageRef,
                  "pdf",
                  `Syllabus for ${courseTitle
                    .split(" ")
                    .map((el) => capitalize(el))
                    .join(" ")}`
                );
              }}
              startIcon={<PrintSvg />}
            >
              {constants.Download}
            </HeaderButton>
          </ToolTip>

          <ToolTip title={syllabus.printTooltip}>
            <HeaderButton
              variant="text"
              onClick={handlePrint}
              startIcon={<PrintSvg />}
            >
              {constants.Print}
            </HeaderButton>
          </ToolTip>
          <ExpandButton
            variant="text"
            onClick={expandHandler}
            endIcon={
              <KeyboardArrowDownIcon
                sx={{
                  transform: `scale(1.3) ${
                    accordionsAreExpanded && "rotate(180deg)"
                  }`,
                }}
              />
            }
          >
            {accordionsAreExpanded
              ? constants.CollapseAllUnits
              : constants.ExpandAllUnits}
          </ExpandButton>
        </Stack>
      </HeaderDiv>
      <Divider light style={{ marginTop: "2px" }} />
    </StackWrapper>
  );
};

export default Header;
// const styles = StyleSheet.create({
//   page: {
//     flexDirection: "row",
//     backgroundColor: "#E4E4E4",
//   },
//   section: {
//     margin: 10,
//     padding: 10,
//     flexGrow: 1,
//   },
// });

// // Create Document Component
// const MyDocument = ({ img }) => (
//   <Document>
//     <Page size="A4" style={styles.page}>
//       <View style={styles.section}>
//         <Image src={img} />
//       </View>
//     </Page>
//   </Document>
// );

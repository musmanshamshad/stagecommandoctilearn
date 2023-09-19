import React, { useState } from "react";
import Divider from "@mui/material/Divider";
import Stack from "./../../../../../UI/Stack/Stack";
import HighlightSvg from "./../../../icons/HighlightSvg.jsx";
import CommentSvg from "./../../../icons/CommentSvg";
import NotesExplaination from "./../../../../../../assets/images/headers/Notes explanation (1).png";
import Typography from "./../../../../../UI/Typography/TypographyCompo";
import ToolTip from "../../../../../UI/Tooltip/ToolTip";
import SearchBar from "./../../../../../UI/SearchBar/SearchBar";
import {
  StackWrapper,
  HeaderButton,
  HeaderDiv,
  SearchDiv,
  PhysicsImgae,
} from "./Notes.style.js";
import { useSelector, useDispatch } from "react-redux";
import { myLibraryHighlightActions } from "../../../../../../redux/reducers/myLibraryHighlight";
import { Box } from "@mui/material";

const MyLibraryNotesHeader = ({ handlePrint, _1000px, _830px }) => {
  const dispatch = useDispatch();
  const [searchedData, setSearchedData] = useState("");
  const isHighlightingActive = useSelector(
    (state) => state.myLibraryHighlight.isHighlighting
  );
  const dataHandler = (e) => {
    setSearchedData(e.target.value);
    dispatch(myLibraryHighlightActions.searchedValueState(e.target.value));
  };
  return (
    <div>
      <StackWrapper>
        <Typography sx={{ fontWeight: "600" }}>Course Notes</Typography>
        <SearchDiv>
          <SearchBar searchedValue={searchedData} searchHandler={dataHandler} />
          <Box
            sx={{
              display: {
                sm: "none",
                xs: "none",
                md: "block",
              },
            }}
          >
            <PhysicsImgae
              src={NotesExplaination}
              alt="subject_image"
              // width="30%"
              // height="auto"
            />
          </Box>
        </SearchDiv>
        <Divider light style={{ marginBottom: "-12px" }} />
        <HeaderDiv>
          <Stack
            direction="row"
            spacing={{ xs: 1, sm: 2, md: 3 }}
            divider={
              <Divider orientation="vertical" variant="string" flexItem />
            }
          >
            <ToolTip title="Mark text to highlight">
              <HeaderButton
                isActive={isHighlightingActive}
                onClick={(e) => {
                  dispatch(myLibraryHighlightActions.toggleHighlightState());
                }}
                variant="text"
                startIcon={<HighlightSvg />}
              >
                Highlight Text
              </HeaderButton>
            </ToolTip>
            <ToolTip title="Mark text to Comment">
              <HeaderButton variant="text" startIcon={<CommentSvg />}>
                Comment Text
              </HeaderButton>
            </ToolTip>
            {/* <ToolTip title="Mark text to Comment">
            <TextSelectionComp/>
            </ToolTip>   */}
          </Stack>
        </HeaderDiv>
        <Divider light style={{ marginTop: "2px" }} />
      </StackWrapper>
    </div>
  );
};

export default MyLibraryNotesHeader;

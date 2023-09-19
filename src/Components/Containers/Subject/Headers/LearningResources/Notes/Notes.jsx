import React, { useEffect, useState } from "react";
import Divider from "@mui/material/Divider";
import Stack from "../../../../../UI/Stack/Stack";
import Typography from "../../../../../UI/Typography/TypographyCompo";
import ToolTip from "../../../../../UI/Tooltip/ToolTip";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import HighlightSvg from "../../../icons/HighlightSvg";
import CommentSvg from "../../../icons/CommentSvg";
import { useParams } from "react-router-dom";
import { subjectActions } from "../../../../../../redux/reducers/subject";
import { useSelector, useDispatch } from "react-redux";
import AddSvg from "./../../LearningResources/icons/AddSvg";
import pallete from "../../../../../../config/palette";
import SearchBar from "../../../../../UI/SearchBar/SearchBar";
import physicsSvg from "../../../../../../assets/images/courses/physics.png";
import biologySvg from "../../../../../../assets/images/courses/biology.png";
import mathSvg from "../../../../../../assets/images/courses/maths.png";
import ChmistrySvg from "../../../../../../assets/images/courses/chemistry.png";
import { myLibraryHighlightActions } from "./../../../../../../redux/reducers/myLibraryHighlight";
import {
  StackWrapper,
  HeaderButton,
  ExpandButton,
  HeaderDiv,
  SearchDiv,
  TagsDiv,
  TagsButton,
  PhysicsImgae,
} from "./Notes.style";
import api from "./../../../../../../Services";
import Loader from "./../../../../../UI/Loader/Loader";
import { learningResourcesHighlightActions } from "./../../../../../../redux/reducers/learningResourcesHighlight";
import { learningResourcesNotesListControllerActions } from "../../../../../../redux/reducers/learningResourcesNotesListController";
import { Grid } from "@mui/material";

const Header = ({ allTags, setAllTags, handleSelection, activeTag }) => {
  const expandAllIsTrue = useSelector(
    (state) => state.learningResourcesNotesListController.value
  );
  const { name } = useParams();
  const dispatch = useDispatch();
  const [showLoader, setShowLoader] = useState(false);
  const [searchedData, setSearchedData] = useState("");

  const isHighlightingActive = useSelector(
    (state) => state.learningResources.isHighlighting
  );

  const expandHandler = () => {
    dispatch(learningResourcesNotesListControllerActions.toggleValue());
  };

  const getTagsFromDbB = async (token) => {
    let temp = await api.getAllTags(token);
    return temp;
  };
  const getTagsApi = async () => {
    let token = localStorage.getItem("auth");
    getTagsFromDbB(token)
      .then((el) => {
        if (el.error) {
          return;
        }
        const { data } = el;
        setAllTags([...data]);
        setShowLoader(false);
      })
      .catch((error) => console.error(error));
  };

  useEffect(() => {
    getTagsApi();
    setShowLoader(true);
  }, []);

  let subjectImage;
  switch (name) {
    case "physics":
      subjectImage = physicsSvg;
      break;
    case "biology":
      subjectImage = biologySvg;
      break;
    case "math":
      subjectImage = mathSvg;
      break;
    case "chemistry":
      subjectImage = ChmistrySvg;
      break;
    default:
      subjectImage = physicsSvg;
      break;
  }

  const selectTagHandler = (e, item) => {
    handleSelection(e, item);
  };
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
          <PhysicsImgae src={subjectImage} alt="subject_image" />
        </SearchDiv>
        <Typography variant="caption" sx={{ color: pallete.unselected }}>
          Search by Tags
        </Typography>
        <TagsDiv container spacing={2}>
          {showLoader ? (
            <Loader />
          ) : (
            <>
              <TagsButton
                isselected={!activeTag.id && activeTag.title === "all"}
                onClick={(e) => selectTagHandler(e, { title: "all" })}
                size="small"
                endIcon={<AddSvg />}
                variant={"text"}
              >
                All
              </TagsButton>
              {allTags.map((item, index) => (
                <Grid sm={2} item>
                  <TagsButton
                    isselected={item.id === activeTag.id}
                    variant="text"
                    size="small"
                    key={index}
                    onClick={(e) => selectTagHandler(e, item)}
                    endIcon={<AddSvg />}
                  >
                    {item.title}
                  </TagsButton>
                </Grid>
              ))}
            </>
          )}
        </TagsDiv>
        <Divider light style={{ marginBottom: "-12px" }} />
        <HeaderDiv>
          <Stack
            direction="row"
            spacing={{ xs: 3, sm: 3, md: 3 }}
            divider={
              <Divider orientation="vertical" variant="string" flexItem />
            }
            sx={{ width: "100%", overflowX: "auto" }}
          >
            <ToolTip title="Mark text to highlight">
              <HeaderButton
                isActive={isHighlightingActive}
                variant="text"
                startIcon={<HighlightSvg />}
                onClick={(e) => {
                  dispatch(
                    learningResourcesHighlightActions.toggleHighlightState()
                  );
                }}
              >
                Highlight Text
              </HeaderButton>
            </ToolTip>
            <ToolTip title="Mark text to Comment">
              <HeaderButton variant="text" startIcon={<CommentSvg />}>
                Comment Text
              </HeaderButton>
            </ToolTip>
            {/* <ToolTip title="Mark text to Comment"> */}
            {/* <TextSelectionComp/> */}
            {/* </ToolTip> */}
            <ExpandButton
              variant="text"
              onClick={expandHandler}
              endIcon={
                <KeyboardArrowDownIcon
                  sx={{
                    transform: `scale(1.3) rotate(${
                      expandAllIsTrue ? "180deg" : "0deg"
                    })`,
                  }}
                />
              }
            >
              {expandAllIsTrue ? "Collapse all units" : "Expand all units"}
            </ExpandButton>
          </Stack>
        </HeaderDiv>
        <Divider light style={{ marginTop: "2px" }} />
      </StackWrapper>
    </div>
  );
};

export default Header;

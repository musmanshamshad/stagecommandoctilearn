import React, { useState } from "react";
import Divider from "@mui/material/Divider";
import {
  Stack,
  IconButtonWrapper,
  CommentBox,
  HighlightBox,
  Box,
} from "./TextComp.style";
import ToolTips from "./../../../../../../UI/Tooltip/ToolTip";
import { useDispatch } from "react-redux";
import { learningResourcesHighlightActions } from "../../../../../../../redux/reducers/learningResourcesHighlight";
import Delete from "../../../../../../UI/FlashcardCreate/icons/DeleteSvg";
import { Input } from "../../../../../../UI/Highlight/HighlightAndCommentMenuWrapper.style";
import IconButton from "@mui/material/IconButton";
import CommentsSVG from "./icons/CommentsSVG";
import EditSVG from "./icons/EditSVG";

function TextComp({ value, commentId, deleteComment, children }) {
  const [showInput, setShowInput] = useState(false);
  const [showComments, setShowComments] = useState(false);
  const [showHighlight, setShowHighlight] = useState(false);
  const dispatch = useDispatch();

  const commentsHandler = () => {
    dispatch(learningResourcesHighlightActions.highlightHandler(false));
    setShowInput(!showInput);
    setShowHighlight(false);
    setShowComments(true);
  };
  const highlightHandler = () => {
    dispatch(learningResourcesHighlightActions.highlightHandler(true));
    setShowComments(false);
    setShowHighlight(true);
  };
  return (
    <>
      <Stack>
        {value ? (
          <>
            <CommentBox showComments={true}>
              <div
                style={{
                  height: "100%",
                  display: "flex",
                  width: "100%",
                  flexDirection: "column",
                  alignItems: "flex-end",
                  justifyContent: "space-between",
                }}
              >
                <Input
                  placeholder="Add Comments..."
                  multiline
                  maxRows={3.8}
                  value={value}
                ></Input>
                <IconButton onClick={() => deleteComment(commentId)}>
                  <Delete fill="white" />
                </IconButton>
              </div>
            </CommentBox>
          </>
        ) : (
          <>
            <CommentBox showComments={showComments}>{children}</CommentBox>
            <HighlightBox showHighlight={showHighlight}>
              {children}
            </HighlightBox>
          </>
        )}

        <Box>
          <ToolTips
            title="Highlight"
            placement="left"
            backgroundColor="#3d2862"
            arrow={false}
          >
            <IconButtonWrapper
              aria-label="delete"
              size="small"
              onClick={highlightHandler}
            >
              <EditSVG />
            </IconButtonWrapper>
          </ToolTips>
          <Divider
            orientation="vertical"
            flexItem
            color="white"
            variant="middle"
          />
          <ToolTips
            title="Comments"
            placement="right"
            backgroundColor="#3d2862"
            arrow={false}
          >
            <IconButtonWrapper
              aria-label="delete"
              size="small"
              onClick={commentsHandler}
            >
              <CommentsSVG />
            </IconButtonWrapper>
          </ToolTips>
        </Box>
      </Stack>
    </>
  );
}

export default TextComp;

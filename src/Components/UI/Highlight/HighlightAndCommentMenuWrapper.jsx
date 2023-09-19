import React from "react";
import TextComp from "../../Containers/Subject/Tabs/LearningResources/Tabs/Notes/TextComp";
import IconButton from "@mui/material/IconButton";
import SendIcon from "@mui/icons-material/Send";
import { Input } from "./HighlightAndCommentMenuWrapper.style.js";
import { useSelector } from "react-redux";
import HighlightTextMenu from "./HighlightTextMenu";

const HighlightAndCommentMenuWrapper = ({
  handleChangeColor,
  handleComment,
  setComment,
  comment,
}) => {
  const isHighlightingActive = useSelector((state) => state.learningResources);

  return (
    <>
      <TextComp>
        {!isHighlightingActive.isHighlighting ? (
          <>
            <div
              style={{
                height: "100%",
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-end",
                justifyContent: "space-between",
                color: "white",
              }}
            >
              <Input
                placeholder="Add Comments..."
                rows={4}
                onChange={(e) => setComment(e.target.value)}
                value={comment}
              ></Input>
              <IconButton
                aria-label="delete"
                size="small"
                onClick={comment?.length > 0 ? handleComment : undefined}
              >
                <SendIcon fontSize="small" sx={{ color: "white" }} />
              </IconButton>
            </div>
          </>
        ) : (
          <HighlightTextMenu handleChangeColor={handleChangeColor} />
        )}
      </TextComp>
    </>
  );
};

export default HighlightAndCommentMenuWrapper;

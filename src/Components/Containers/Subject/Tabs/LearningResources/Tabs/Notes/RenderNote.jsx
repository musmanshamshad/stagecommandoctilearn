import React, { useEffect } from "react";
import ReactDOM from "react-dom";
import { MoveToLibraryButtonStyled } from "./NotesContent";
import { Wrapper } from "./RenderNote.style";
import { useTheme } from "@emotion/react";
import TextSelectionComp from "../../../../../../UI/TextSelection/TextSelectionComp";
import MoveLibrarySvg from "../../../../LeftSideBar/Icons/MoveLibrarySvg";
import { useSelector, useDispatch, Provider } from "react-redux";
import { learningResourcesHighlightActions } from "../../../../../../../redux/reducers/learningResourcesHighlight";
import SearchableText from "./../../../../../../UI/SearchableText/SearchableText";
import TextComp from "./TextComp";
import { IconButtonWrapper } from "./TextComp.style";
import store from "../../../../../../../redux/store";
import api from "../../../../../../../Services";
import Loader from "../../../../../../UI/Loader/Loader";
import Alert from "../../../../../../UI/Alert/Alert";
import MulitipleCommentsSVG from "./icons/MulitipleCommentsSVG";
import SingeCommentSVG from "./icons/SingeCommentSVG";
const RenderNote = ({
  data,
  addToLibraryHandler,
  tagId,
  noteId,
  type,
  snackId,
  chapterId,
}) => {
  const [showIcons, setShowIcons] = React.useState(false);
  const [highlightContent, setHighlightContent] = React.useState("");
  const [isLoading, setIsLoading] = React.useState(false);
  const [commentsOnNotes, setCommentsOnNotes] = React.useState([]);
  const [noteError, setNoteError] = React.useState(false);
  const theme = useTheme();
  const dispatch = useDispatch();
  const isHighlightingActive = useSelector((state) => state.myLibraryHighlight);
  const { searchedTextValue } = isHighlightingActive;

  const updateHighlightedNotesApi = async () => {
    setIsLoading(true);
    try {
      let payload = {
        id: highlightContent.id,
        snackId,
        chapterId,
        content: document.getElementById(noteId).innerHTML,
        noteId,
      };
      const result = await api.updateHighlightedNote(payload);
      const { error } = result;

      if (error) {
        throw new Error(result.error);
      } else {
        setHighlightContent(payload);
        setNoteError(false);
        setIsLoading(false);
      }
    } catch (error) {
      setNoteError(true);
      setIsLoading(false);
    }
  };

  const addHighlightedNotesApi = async () => {
    setIsLoading(true);
    try {
      let payload = {
        snackId,
        chapterId,
        content: document.getElementById(noteId).innerHTML,
        noteId,
      };
      const result = await api.addHighlightedNotes(payload);
      const { error } = result;

      if (error) {
        throw new Error(result.error);
      } else {
        setHighlightContent(result.data);
        setNoteError(false);
        setIsLoading(false);
      }
    } catch (error) {
      setNoteError(true);
      setIsLoading(false);
    }
  };

  const addComment = async (payload) => {
    setIsLoading(true);
    try {
      const result = await api.addComment(payload);
      const { error } = result;
      if (error) {
        throw new Error(result.error);
      } else {
        setCommentsOnNotes([...commentsOnNotes, result.data]);
        setNoteError(false);
        setIsLoading(false);
      }
    } catch (error) {
      setNoteError(true);
      setIsLoading(false);
    }
  };

  function converter(data) {
    let newData = data;

    if (highlightContent) {
      if (highlightContent.noteId === noteId) {
        const temp = JSON.parse(data);

        temp.html = [highlightContent.content];

        newData = JSON.stringify(temp);
      }
    }
    return newData;
  }

  const sideEffectsOfHighlighting = () => {
    dispatch(learningResourcesHighlightActions.toggleHighlightState());

    commentsOnNotes.length > 0 &&
      commentsOnNotes.forEach((ele) => {
        ReactDOM.unmountComponentAtNode(document.getElementById(ele.commentId));
      });

    if (highlightContent) {
      updateHighlightedNotesApi();
      return;
    } else {
      addHighlightedNotesApi();
    }
  };

  const sideEffectsOfCommenting = (data) => {
    commentsOnNotes.length > 0 &&
      commentsOnNotes.forEach((ele) => {
        ReactDOM.unmountComponentAtNode(document.getElementById(ele.commentId));
      });
    const payload = {
      snackId,
      chapterId,
      content: data.comment,
      noteId,
      commentId: data.commentId,
    };
    sideEffectsOfHighlighting();
    addComment(payload);
  };

  const childRef = React.useRef();

  function handleClick(id) {
    const commentObj = commentsOnNotes?.find((ele) => ele.commentId === id);

    const child = document.getElementById(id).firstChild;
    if (child) {
      ReactDOM.unmountComponentAtNode(document.getElementById(id));
    } else {
      ReactDOM.render(
        <Provider store={store}>
          <TextComp
            value={commentObj.content}
            commentId={id}
            noteId={commentObj.noteId}
            deleteComment={deleteComment}
          />
        </Provider>,
        document.getElementById(id)
      );
    }
  }

  const getHighlightedNotesApi = async () => {
    setIsLoading(true);
    try {
      const result = await api.getHighlightedNotes(noteId, "note");
      const { error } = result;

      if (error) {
        throw new Error(result.error);
      } else {
        setHighlightContent(result.data[0]);
        setNoteError(false);
        setIsLoading(false);
      }
    } catch (error) {
      setNoteError(true);
      setIsLoading(false);
    }
  };

  const getCommentsApi = async () => {
    setIsLoading(true);
    try {
      let library = false;
      const result = await api.getComments(noteId, "note", library);
      const { error } = result;

      if (error) {
        throw new Error(result.error);
      } else {
        setCommentsOnNotes(result.data);
        setNoteError(false);
        setIsLoading(false);
      }
    } catch (error) {
      setNoteError(true);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getHighlightedNotesApi();
    getCommentsApi();
  }, []);

  const deleteComment = async (commentId) => {
    setIsLoading(true);
    try {
      const result = await api.deleteComment(commentId, "comment");

      const { error } = result;

      if (error) {
        throw new Error(result.error);
      } else {
        setIsLoading(false);

        document.getElementById(commentId).remove();

        let temp = commentsOnNotes.filter((ele) => ele.commentId !== commentId);

        setCommentsOnNotes(temp);
        setNoteError(false);
      }
    } catch (error) {
      console.error(error);
      setNoteError(true);
      setIsLoading(false);
    }
  };

  return (
    <Wrapper>
      <MoveToLibraryButtonStyled
        onClick={() =>
          addToLibraryHandler(
            { body: data, tagId, noteId, snackId, chapterId, type },
            "specific-tag"
          )
        }
        startIcon={<MoveLibrarySvg color={theme.palette.secondary.main} />}
      >
        {/* Move to My Libaray */}
        Save Now
      </MoveToLibraryButtonStyled>
      {/* buffer component */}
      {isLoading ? (
        <Loader />
      ) : noteError ? (
        <Alert message={"Error Occured !"} severity={"error"} />
      ) : (
        <TextSelectionComp
          sideEffectsOfCommenting={sideEffectsOfCommenting}
          sideEffectsOfHighlighting={sideEffectsOfHighlighting}
          isHighlightingActive={isHighlightingActive}
        >
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <SearchableText
              htmlData={converter(data)}
              ref={childRef}
              noteId={noteId}
              searchedTextValue={searchedTextValue}
            />

            <div
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "flex-start",
              }}
            >
              {commentsOnNotes?.length === 0 ? null : (
                <IconButtonWrapper
                  style={{
                    marginBottom: "0px",
                    padding: "10px 0px 10px 0px",
                  }}
                  aria-label="delete"
                  size="small"
                  onClick={() => setShowIcons(!showIcons)}
                >
                  <MulitipleCommentsSVG />
                </IconButtonWrapper>
              )}

              {showIcons &&
                commentsOnNotes.map((ele) => {
                  return (
                    <IconButtonWrapper
                      style={{
                        padding: "2px 0px 0px 0px",
                      }}
                      aria-label="delete"
                      size="small"
                      onClick={() => handleClick(ele.commentId)}
                    >
                      <SingeCommentSVG />
                    </IconButtonWrapper>
                  );
                })}
            </div>
          </div>
        </TextSelectionComp>
      )}
    </Wrapper>
  );
};

export default RenderNote;

import React, { useState } from "react";
import ThreeDot from "./ThreeDotMenu/icons/ThreeDot";
import IconButtonComp from "../../../../../UI/IconButton/IconButton";
import { styled } from "@mui/system";
import Menu from "./../../../../../UI/Menu/Menu";
import DeleteSvg from "./ThreeDotMenu/icons/DeleteSvg";
import Edit from "./ThreeDotMenu/icons/Edit";
import TextEditor from "./../../../../../UI/TextEditor/TextEditor";
import api from "../../../../../../Services";
import { useSnackbar } from "notistack";
import { Provider, useDispatch, useSelector } from "react-redux";
import SearchableText from "./../../../../../UI/SearchableText/SearchableText";
import { myLibraryActions } from "./../../../../../../redux/reducers/myLibrary.js";
import ReactDOM from "react-dom";
import store from "../../../../../../redux/store";
import TextComp from "../../LearningResources/Tabs/Notes/TextComp";
import SingeCommentSVG from "../../LearningResources/Tabs/Notes/icons/SingeCommentSVG";
import { IconButtonWrapper } from "../../LearningResources/Tabs/Notes/TextComp.style";
import MulitipleCommentsSVG from "../../LearningResources/Tabs/Notes/icons/MulitipleCommentsSVG";
import TextSelectionComp from "../../../../../UI/TextSelection/TextSelectionComp";
import Loader from "../../../../../UI/Loader/Loader";
import Alert from "../../../../../UI/Alert/Alert";

const Wrapper = styled("div")(({ theme }) => ({
  // display: "flex",
  position: "relative",
}));
const ThreeDotNoteMenu = styled("div")(({ theme }) => ({
  position: "absolute",
  top: "10px",
  right: "5px",
}));
const TextWrapper = styled("div")(({ theme }) => ({
  flexGrow: 1,
}));

const AccordionContent = (props) => {
  const dispatch = useDispatch();
  const [showIcons, setShowIcons] = React.useState(false);
  const [isLoading, setIsLoading] = React.useState(false);
  const [commentsOnNotes, setCommentsOnNotes] = React.useState([]);
  const [noteError, setNoteError] = React.useState(false);
  const [body, setBody] = React.useState("");
  const [editMode, setEditMode] = React.useState(false);
  const [showUpdatedData, setShowUpdateData] = useState(true);
  const { enqueueSnackbar } = useSnackbar();

  // const searchingData = useSelector(
  //   (state) => state.myLibraryHighlight.searchedTextValue
  // );
  const { myLibraryHighlight, myLibrary } = useSelector((state) => state);
  const { searchedTextValue: searchingData } = myLibraryHighlight;
  const { filteredNotesData } = myLibrary;

  const iconOptions = [
    {
      label: "Edit",
      icon: <Edit color="#7C7088" />,
      name: "edit",
    },
    {
      label: "Delete",
      icon: <DeleteSvg color="#7C7088" />,
      name: "delete",
    },
  ];

  const isHighlightingActive = useSelector(
    (state) => state.myLibraryHighlight.isHighlighting
  );

  const childRef = React.useRef();

  const getCommentsApi = async () => {
    setIsLoading(true);
    try {
      const library = true;
      const result = await api.getComments(props.noteId, "note", library);
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

  const deleteComment = async (commentId, resourceId, resource) => {
    setIsLoading(true);
    try {
      const result = await api.deleteComment(resourceId, resource);

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
      // setNoteError(true);3
      setIsLoading(false);
    }
  };

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
            deleteComment={(id) => deleteComment(id, id, "comment")}
          />
        </Provider>,
        document.getElementById(id)
      );
    }
  }

  const sideEffectsOfHighlighting = (data, type) => {
    commentsOnNotes.length > 0 &&
      commentsOnNotes.forEach((ele) => {
        ReactDOM.unmountComponentAtNode(document.getElementById(ele.commentId));
      });
    recieveEditsHandler(data, type);
  };

  const sideEffectsOfCommenting = (data) => {
    commentsOnNotes.length > 0 &&
      commentsOnNotes.forEach((ele) => {
        ReactDOM.unmountComponentAtNode(document.getElementById(ele.commentId));
      });
    const payload = {
      snackId: props.snackId,
      chapterId: props.chapterId,
      content: data.comment,
      noteId: props.noteId,
      commentId: data.commentId,
      library: true,
    };
    sideEffectsOfHighlighting(null, "comment");
    addComment(payload);
  };

  const handleMode = (userChoice) => {
    dispatch(myLibraryActions.findNotesIdStat(props.id));

    if (userChoice.name === "edit") {
      setEditMode((prevState) => !prevState);
    }
    if (userChoice.name === "delete") {
      props.deleteSingleNote(props);
    }
  };

  const sendEditsToApi = async (payload) => {
    let token = localStorage.getItem("auth");
    let temp = await api.updateNotesOnLibrary(payload, token);
    return temp;
  };

  const recieveEditsHandler = (e, type) => {
    let data = "";
    const filteredTemp = [...filteredNotesData];
    if (e) {
      data = e;
    } else {
      data = {
        html: document.getElementById(props.noteId).innerHTML,
        delta: JSON.parse(body).delta,
      };
    }
    sendEditsToApi({ id: props.id, body: JSON.stringify(data) })
      .then((el) => {
        if (!el.error) {
          if (type === undefined) {
            deleteComment(null, props.noteId, "note");
          }
          if (e) {
            // props.getNotes();
            setShowUpdateData(true);
          }
          const temp = el.data[1][0];
          const newArray = filteredTemp.filter((el) => el.id !== temp.id);

          let updatedData = [...newArray, temp];
          updatedData.sort((a, b) => a.id - b.id);
          dispatch(myLibraryActions.filteredNotes(updatedData));
          setBody(el.data[1][0].body);
          setEditMode(false);
          setShowUpdateData(false);
          // enqueueSnackbar("Notes updated successfully!", {
          //   variant: "success",
          // });
        } else {
          setShowUpdateData(true);
          enqueueSnackbar("Edits failed, please try again!", {
            variant: "error",
          });
        }
      })
      .catch((err) => console.error(err));
  };

  React.useEffect(() => {
    setBody(props.body);
    getCommentsApi();
  }, []);

  return (
    <Wrapper>
      <TextWrapper>
        {editMode ? (
          <TextEditor
            edit={true}
            defaultContent={JSON.parse(body).html}
            getContent={(e) => recieveEditsHandler(e, undefined)}
          />
        ) : isLoading ? (
          <Loader />
        ) : noteError ? (
          <Alert message={"Error Occured.. !"} severity={"error"} />
        ) : (
          <TextSelectionComp
            sideEffectsOfCommenting={sideEffectsOfCommenting}
            sideEffectsOfHighlighting={() =>
              sideEffectsOfHighlighting(null, "highlight")
            }
            isHighlightingActive={true}
          >
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <SearchableText
                searchedTextValue={searchingData}
                // htmlData={showUpdatedData ? props.body : body}
                htmlData={showUpdatedData ? props.body : body}
                ref={childRef}
                noteId={props.noteId}
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
      </TextWrapper>
      <ThreeDotNoteMenu>
        <Menu sideEffects={handleMode} listItems={iconOptions}>
          <IconButtonComp>
            <ThreeDot />
          </IconButtonComp>
        </Menu>
      </ThreeDotNoteMenu>
    </Wrapper>
  );
};

export default AccordionContent;

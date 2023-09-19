import React, { useEffect } from "react";
import SecondaryAccordion from "../../../../../../UI/Accordian/SecondaryAccordion/SecondaryAccordian";
import Stack from "../../../../../../UI/Stack/Stack";
import TextEditorRenderOutput from "../../../../../../UI/TextEditorRenderOutput/TextEditorRenderOutput";
import { Utility_MarginTop_16_px } from "../../../../../../../utilitystyles/TopMarginStyleForEditorOutput";
import TextSelectionComp from "../../../../../../UI/TextSelection/TextSelectionComp";
import { Provider, useDispatch, useSelector } from "react-redux";
import { subjectActions } from "../../../../../../../redux/reducers/subject";
import { generateCompletedLabel } from "./SyllabusAccordions";
import Checkbox from "../../../../../../UI/Checkbox/Checkbox";
import { learningObjectivesCompletedActions } from "../../../../../../../redux/reducers/learningObjectivesCompleted";
import api from "../../../../../../../Services";
import ReactDOM from "react-dom";
import TextComp from "../Notes/TextComp";
import store from "../../../../../../../redux/store";
import SingeCommentSVG from "../Notes/icons/SingeCommentSVG";
import { IconButtonWrapper } from "../Notes/TextComp.style";
import MulitipleCommentsSVG from "../Notes/icons/MulitipleCommentsSVG";
import Alert from "../../../../../../UI/Alert/Alert";
import Loader from "../../../../../../UI/Loader/Loader";
import { Oval } from "react-loader-spinner";
import { useSnackbar } from "notistack";
import { SyllabusContext } from "../../../../../../../contexts";

const IndividualLearningObjective = ({
  index,
  objective,
  refreshObjectives,
}) => {
  const { enqueueSnackbar } = useSnackbar();
  const { heirarchy, generateAccordionData } =
    React.useContext(SyllabusContext);
  const [showIcons, setShowIcons] = React.useState(false);
  const [highlightContent, setHighlightContent] = React.useState("");
  const [isLoading, setIsLoading] = React.useState(false);
  const [commentsOnNotes, setCommentsOnNotes] = React.useState([]);
  const [noteError, setNoteError] = React.useState(false);
  const [loading, setLoading] = React.useState({
    value: false,
  });
  const [currentObjective, setCurrentObjective] = React.useState(objective);

  React.useEffect(() => {
    setCurrentObjective(objective);
  }, [objective]);
  const handleChangeLoading = (value) =>
    setLoading((prevState) => ({ ...prevState, value }));
  //
  // waqas highlighting and commenting
  //

  const dispatch = useDispatch();

  const isCompleted = useSelector(
    (state) =>
      state?.learningObjectivesCompleted?.learningObjectivesCompleted?.find(
        (el) => el.id === objective.id
      )?.checked
  );

  //
  // waqas highlighting and commenting
  //
  const updateHighlightedNotesApi = async () => {
    setIsLoading(true);
    try {
      let payload = {
        id: highlightContent.id,
        chapterId: objective.chapterId,
        content: document.getElementById(objective.id).innerHTML,
        loId: objective.id,
      };
      const result = await api.updateHighlightedNote(payload);
      const { error } = result;

      if (error) {
        throw new Error(result.error);
      } else {
        setHighlightContent(payload);
        // setting current objective highlight to state
        setCurrentObjective({
          ...currentObjective,
          highlights: [
            { ...currentObjective.highlights[0], content: payload.content },
          ],
        });
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
        chapterId: objective.chapterId,
        content: document.getElementById(objective.id).innerHTML,
        loId: objective.id,
      };
      const result = await api.addHighlightedNotes(payload);
      const { error } = result;

      if (error) {
        throw new Error(result.error);
      } else {
        setHighlightContent(result.data);
        // setting current objective highlight to state
        setCurrentObjective({
          ...currentObjective,
          highlights: [
            { ...currentObjective.highlights[0], content: result.data.content },
          ],
        });
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
        // setCurrentObjective({
        //   ...currentObjective,
        //   ...result.data.learningObjective,
        // });
        refreshObjectives();
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

    if (newData?.highlights?.length) {
      return JSON.stringify({ html: newData?.highlights[0]?.content });
    }
    return newData?.title;
  }

  const sideEffectsOfHighlighting = () => {
    // dispatch(learningResourcesHighlightActions.toggleHighlightState());
    currentObjective?.comments.length > 0 &&
      currentObjective?.comments.forEach((ele) => {
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
    currentObjective?.comments.length > 0 &&
      currentObjective?.comments.forEach((ele) => {
        ReactDOM.unmountComponentAtNode(document.getElementById(ele.commentId));
      });
    const payload = {
      chapterId: objective.chapterId,
      loId: objective.id,
      content: data.comment,
      commentId: data.commentId,
    };
    sideEffectsOfHighlighting();
    addComment(payload);
  };

  function handleClick(id) {
    const commentObj = currentObjective?.comments?.find(
      (ele) => ele.commentId === id
    );

    const found = document.getElementById(id);
    const child = found ? found?.firstChild : null;

    if (child) {
      ReactDOM.unmountComponentAtNode(document.getElementById(id));
    } else {
      ReactDOM.render(
        <Provider store={store}>
          <TextComp
            value={commentObj.content}
            commentId={id}
            loId={commentObj.loId}
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
      const result = await api.getHighlightedNotes(
        objective.id,
        "learnobjective"
      );
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

      const result = await api.getComments(
        objective.id,
        "learnobjective",
        library
      );
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
    // getHighlightedNotesApi();
    // getCommentsApi();
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

        let temp = currentObjective?.comments.filter(
          (ele) => ele.commentId !== commentId
        );

        setCommentsOnNotes(temp);
        setCurrentObjective({ ...currentObjective, comments: temp });
        refreshObjectives();
        setNoteError(false);
      }
    } catch (error) {
      setNoteError(true);
      setIsLoading(false);
    }
  };

  //
  // waqas highlighting and commenting
  //

  const callApiLearningObjectivesCompleted = async (status, id) => {
    const token = localStorage.getItem("auth");
    const response = await api.postLearningObjective(
      { value: status, id },
      token
    );
    return response;
  };

  const handleGoodResponse = (data) => {
    const { completed, loId } = data;
    //setting result in current state
    setCurrentObjective({
      ...currentObjective,
      UserLearningObjectives: completed,
    });
    if (heirarchy.isUnitsAvailable) {
      let { data: hierarchyData } = heirarchy;
      for (let i = 0; i < hierarchyData.length; i++) {
        let currentUnit = hierarchyData[i];
        for (let j = 0; j < currentUnit.chapters.length; j++) {
          let currentChapter = currentUnit.chapters[j];
          for (let k = 0; k < currentChapter.learningObjectives.length; k++) {
            if (currentChapter.learningObjectives[k].id === loId) {
              console.log("here");
              currentChapter.learningObjectives[k].UserLearningObjectives =
                completed;
            }
          }
        }
      }
      const _hierarchy = { ...heirarchy };
      _hierarchy.data = hierarchyData;
      generateAccordionData(_hierarchy);
    } else {
      let { data: hierarchyData } = heirarchy;
      for (let i = 0; i < hierarchyData[0].chapters.length; i++) {
        let currentChapter = hierarchyData[0].chapters[i];
        console.log(currentChapter);
        for (let j = 0; j < currentChapter.learningObjectives.length; j++) {
          if (currentChapter.learningObjectives[j].id === loId) {
            currentChapter.learningObjectives[j].UserLearningObjectives =
              completed;
          }
        }
      }
      const _hierarchy = { ...heirarchy };
      _hierarchy.data = hierarchyData;
      generateAccordionData(_hierarchy);
    }
    // dispatch(
    //   learningObjectivesCompletedActions.toggleSpecificLearningObjectiveState({
    //     id: loId,
    //     value: completed,
    //   })
    // );
  };

  const checkedLearningObjectivesBadResponse = (err) => {
    handleChangeLoading(false);
    console.error(err);
    enqueueSnackbar(
      "Error! Please check your internet connection and try again or contact administrator",
      {
        variant: "error",
        autoHideDuration: 3000,
      }
    );
    throw Error("Bad response recieved!");
  };

  const handleCheckedLearningObjective = (isChecked) => {
    const { id } = objective;
    handleChangeLoading(true);
    if (typeof isChecked !== "boolean") {
      throw Error('Type of "isChecked" parameter should be boolean');
    }
    // perform api call here
    callApiLearningObjectivesCompleted(isChecked, id)
      .then((el) => {
        if (el.error) {
          checkedLearningObjectivesBadResponse(el.response);
        }
        handleChangeLoading(false);
        handleGoodResponse(el.data);
      })
      .catch((err) => {
        checkedLearningObjectivesBadResponse(err);
      });
  };
  return (
    <div style={{ display: "flex" }}>
      <div style={{ display: "flex", flexGrow: 1 }} key={index}>
        <Utility_MarginTop_16_px style={{ userSelect: "none" }}>
          {index + 1}. &nbsp;
        </Utility_MarginTop_16_px>
        {isLoading ? (
          <Loader />
        ) : noteError ? (
          <Alert message={"Error Occured !"} severity={"error"} />
        ) : (
          <TextSelectionComp
            sideEffectsOfCommenting={sideEffectsOfCommenting}
            sideEffectsOfHighlighting={sideEffectsOfHighlighting}
            isHighlightingActive={true}
          >
            {/* Components just renders text  */}
            <TextEditorRenderOutput
              data={converter(currentObjective)}
              noteId={currentObjective.id}
            />
          </TextSelectionComp>
        )}
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-between",
        }}
      >
        <div style={{ padding: loading.value ? "6px" : "" }}>
          {loading.value ? (
            <Oval
              height={19}
              width={19}
              color="#e015a2"
              secondaryColor="rgb(235, 87, 159)"
            />
          ) : (
            <Checkbox
              checked={currentObjective?.UserLearningObjectives}
              setChecked={handleCheckedLearningObjective}
            />
          )}
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-start",
          }}
        >
          {currentObjective?.comments?.length === 0 ? null : (
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
            currentObjective?.comments.map((ele) => {
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
    </div>
  );
};

const LearningObjectiveController = ({
  learningObjectives,
  refreshObjectives,
}) => {
  return (
    <Stack
      sx={{
        pl: {
          sm: "1.4rem",
          xs: "0.8rem",
        },
      }}
    >
      {learningObjectives.map((objective, index) => (
        <IndividualLearningObjective
          index={index}
          objective={objective}
          learningObjectives={learningObjectives}
          refreshObjectives={refreshObjectives}
        />
      ))}
    </Stack>
  );
};

const PrimarySyllabus = ({ chapters, ...props }) => {
  const { hasUnits, refreshObjectives } = props;
  const allExpanded = useSelector((state) => state.subject.expandAccordian);
  const dispatch = useDispatch();
  const learningObjectivesCompletedStatus = useSelector(
    (state) => state.learningObjectivesCompleted.learningObjectivesCompleted
  );
  const { heirarchy } = React.useContext(SyllabusContext);
  const [controller, setController] = React.useState([]);
  React.useEffect(() => {
    const updatedController = updateCompletedChapters();
    setController(updatedController);
  }, [learningObjectivesCompletedStatus]);

  const updateCompletedChapters = () => {
    let temp = [...controller];
    let tempLearningObjCompleted = [...learningObjectivesCompletedStatus];
    temp.map((eachObj) => {
      const filteredLearningObjectivesCompleted =
        tempLearningObjCompleted.filter(
          (each) => each.chapterId === eachObj.chapterId
        );
      let [completed, total] = eachObj.description.split("/");
      completed = filteredLearningObjectivesCompleted.filter(
        (el) => el.checked
      )?.length;
      eachObj.description = [completed, total].join("/");
      return eachObj;
    });

    return temp;
  };

  React.useEffect(() => {
    if (hasUnits) {
      let temp = chapters.map((chapter, index) => {
        const filteredObjectivesCompleted = chapter.learningObjectives;
        const completed = filteredObjectivesCompleted.filter(
          (el) => el.UserLearningObjectives
        )?.length;
        return {
          heading: chapter.title,
          description:
            chapter.learningObjectives &&
            generateCompletedLabel(
              completed,
              chapter.learningObjectives.length
            ),
          content: (
            <LearningObjectiveController
              learningObjectives={chapter.learningObjectives}
              refreshObjectives={refreshObjectives}
            />
          ),
          id: index,
          chapterId: chapter.id,
        };
      });
      setController(temp);
    }
  }, [chapters, heirarchy]);
  controller.sort((a, b) => {
    return a.chapterId - b.chapterId;
  });
  //case when course has units
  if (hasUnits) {
    return (
      <>
        {controller.length > 0 ? (
          <SecondaryAccordion
            expandAll={allExpanded}
            toggleExpandAllOff={(e) =>
              dispatch(subjectActions.stopExpandAccordion())
            }
            controller={controller}
          />
        ) : (
          "No Chapters Found"
        )}
      </>
    );
  }
  //case when course has no units

  if (!hasUnits) {
    return (
      <>
        {chapters && chapters.length > 0 ? (
          <LearningObjectiveController
            learningObjectives={chapters}
            refreshObjectives={refreshObjectives}
          />
        ) : (
          "No Learning Objective Found"
        )}
      </>
    );
  }
};

export default PrimarySyllabus;

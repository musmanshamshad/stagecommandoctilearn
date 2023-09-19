import React, { useState } from "react";
import { InnerWrapper, ImgDiv } from "./FlashcardCreate.style.js";
import TypographyCompo from "./../Typography/TypographyCompo";
import FlashCardStack from "./../FlashCardStack/FlashCardStack";
import Plus from "./../../../assets/images/flashcard/plus1.png";
import Modal from "./../Modal/Modal";
import Typography from "./../Typography/TypographyCompo";
import StackComp from "../Stack/Stack.jsx";
import Grid from "./../Grid/Grid";
import Select from "./../../../Components/UI/Select/SelectComp";
import FlashCardQuestionsList from "./FlashCardQuestionsList";
import AddNewQuestion from "./AddNewQuestion.jsx";
import { useSnackbar } from "notistack";
import { ColoredHeading, SubHeading } from "./FlashcardCreate.style.js";
import api from "../../../Services.js";
import { useLocation } from "react-router-dom";
import ErrorBoundary from "../../../Errors/ErrorBoundary.js";
import createResponses, {
  buildErrorTemplate,
  buildLoadingTemplate,
} from "../../../helpers/createResponses.js";
import Loader from "../Loader/Loader.jsx";
import Alert from "../Alert/Alert.jsx";
import isEmptyObj from "../../../helpers/objectIsEmpty.js";
import Content from "./Content.jsx";

const defaultTextNodes = {
  delta: {
    ops: [
      {
        insert: "\n",
      },
    ],
  },
  html: [""],
};

const buildQuestionItem = (number) => ({
  question: JSON.stringify(defaultTextNodes),
  answer: JSON.stringify(defaultTextNodes),
  tagId: null,
  name: `Flashcard ${number}`,
});

const nodeNotEmpty = (query) => {
  if (query === JSON.stringify(defaultTextNodes)) {
    return false;
  } else return true;
};

const FlashcardCreate = ({ loadFlashCardStacks }) => {
  const { enqueueSnackbar } = useSnackbar();
  const [error, setError] = React.useState(createResponses.initialError);
  const [questions, setQuestions] = React.useState([]);
  const [loading, setLoading] = React.useState(createResponses.initialLoading);
  const location = useLocation();
  const [tags, setTags] = React.useState([]);
  const [openModel, setOpenModel] = useState(false);
  const [chapters, setChapters] = React.useState([]);
  const [questionNumber, setQuestionNumber] = React.useState(1);
  const courseID = location.pathname.split("/")[3];
  const [chapter, setChapter] = React.useState({
    label: "",
    value: null,
  });
  const [selectedQuestion, setSelectedQuestion] = React.useState("");
  const [selectedTag, setSelectedTag] = React.useState({});

  const loadChaptersFromApi = async () => {
    const token = localStorage.getItem("auth");
    let temp = await api.getSyllabus(token, courseID);
    return temp;
  };

  const loadChapters = () => {
    setLoading(buildLoadingTemplate());
    loadChaptersFromApi()
      .then((el) => {
        setLoading(createResponses.initialLoading);
        if (!el.error) {
          setChapters([
            ...el.data.chapters.map((chapter) => ({
              value: chapter.id,
              label: chapter.title,
            })),
          ]);
          setError(createResponses.initialError);
        } else {
          setError(buildErrorTemplate("dataNotFound_error_error"));
        }
      })
      .catch((err) => {
        setLoading(createResponses.initialLoading);
        console.error(err);
      });
  };

  React.useEffect(() => {
    loadChapters();
  }, []);

  const getTags = async () => {
    const token = localStorage.getItem("auth");
    let temp = api.getAllTags(token);
    return temp;
  };

  const updateTagsHandler = () => {
    getTags()
      .then((el) => {
        if (!el.error) {
          setTags(
            el.data.map((row) => ({ value: row.id, label: row.title, ...row }))
          );
        } else {
          setTags([]);
        }
      })
      .catch((err) => {
        setTags([]);
        console.error(err);
      });
  };

  React.useEffect(() => {
    updateTagsHandler();
  }, []);

  const handleAPIsubmitcall = async (payload) => {
    let token = localStorage.getItem("auth");
    let temp = await api.createFlashcardStack(payload, token);
    return temp;
  };

  const submitToDb = (payload) => {
    handleAPIsubmitcall(payload)
      .then((el) => {
        if (el.error) {
          setOpenModel(false);
          return enqueueSnackbar("Failed to create Stack", {
            variant: "error",
          });
        } else {
          loadFlashCardStacks();
          setOpenModel(false);
          // enqueueSnackbar("Flashcard Stack created Successfully!", {
          //   variant: "success",
          //   autoHideDuration: 1000,
          // });
        }
      })
      .catch((err) => console.error(err));
  };

  const checkErrorsFn = (payload) => {
    if (!payload.chapterId) {
      enqueueSnackbar("Chapter ID is a must", {
        variant: "error",
      });
      return true;
    }

    let errorsVal = false;
    payload.flashcards.forEach(({ tagId, question, answer, name }) => {
      if (!tagId || !nodeNotEmpty(question) || !nodeNotEmpty(answer)) {
        enqueueSnackbar(
          `Error in ${name}! Tag, Front and Back Flashcard is compulsory!`,
          {
            variant: "error",
            autoHideDuration: 3000,
          }
        );
        errorsVal = true;
      }
    });

    return errorsVal;
  };

  const submitHandler = (e) => {
    e.preventDefault();
    const payload = {
      courseId: courseID,
      chapterId: chapter.value,
      flashcards: [
        ...questions.map(({ question, answer, tagId, name }) => ({
          question,
          answer,
          tagId,
          name,
        })),
      ],
    };
    const checkErrors = checkErrorsFn(payload);

    if (!checkErrors) {
      submitToDb({
        ...payload,
        flashcards: [
          ...questions.map(({ question, answer, tagId }) => ({
            question,
            answer,
            tagId,
          })),
        ],
      });
    }
  };

  return (
    <>
      <Modal
        modalStyleOverrides={{ top: "50%" }}
        modelPadding="30px"
        modelWidth="65vw"
        open={openModel}
        setOpen={setOpenModel}
      >
        <ErrorBoundary>
          <StackComp>
            <StackComp justifyContent="center" alignItems="center">
              <Typography variant="h6">Add new flashcards Stack</Typography>
              <SubHeading variant="subtitle1" oc>
                Please type Topic title of flashcard Stack here.
              </SubHeading>
            </StackComp>
            <StackComp>
              <ColoredHeading variant="h6">FlashCard Stack Info</ColoredHeading>
              <StackComp direction="row" justifyContent="space-between">
                {loading.value ? (
                  <Loader />
                ) : (
                  <>
                    {!error.value && chapters.length > 0 ? (
                      <Select
                        getValue={(e) => {
                          setChapter({ ...e });
                        }}
                        options={chapters}
                        defaultLabel={false}
                        label="Select Chapter"
                        elevation={0}
                      />
                    ) : (
                      <>
                        <Alert
                          severity={error.severity}
                          message="Chapters not found!"
                        />
                      </>
                    )}
                  </>
                )}
              </StackComp>
            </StackComp>
            {chapter.value ? (
              <>
                <ColoredHeading variant="h6">Flashcard Contents</ColoredHeading>
                <Grid container spacing={0}>
                  <Grid item xs={12} sm={12} md={4}>
                    <StackComp>
                      {questions.length > 0 && (
                        <FlashCardQuestionsList
                          questions={questions}
                          getDelete={(e) => {
                            let temp = [...questions];
                            const itemToDelete = questions.findIndex(
                              (question) => question.name === e.name
                            );
                            if (itemToDelete !== -1) {
                              temp.splice(itemToDelete, 1);
                            }
                            return setQuestions(temp);
                          }}
                          getSelection={(e) => {
                            if (isEmptyObj(e)) {
                              return;
                            }
                            setSelectedQuestion(e.name);
                          }}
                        />
                      )}
                      <AddNewQuestion
                        addQuestionHandler={(e) => {
                          let temp = [...questions];
                          temp.push(buildQuestionItem(questionNumber));
                          setQuestionNumber((prevState) => prevState + 1);
                          setQuestions(temp);
                          setSelectedQuestion("");
                          return true;
                        }}
                      />
                    </StackComp>
                  </Grid>
                  {questions.length > 0 ? (
                    <>
                      {selectedQuestion === "" ? null : (
                        <Grid item xs={12} sm={12} md={8}>
                          <Content
                            sideEffects={submitHandler}
                            question={questions.find((question) => {
                              return question.name === selectedQuestion;
                            })}
                            getAnswerHandler={(e) => {
                              let temp = [...questions];
                              const foundQuestion = temp.findIndex(
                                (el) => el.name === e.name
                              );
                              if (foundQuestion) {
                                questions[foundQuestion] = e;
                                setQuestions([...questions]);
                              }
                            }}
                            getQuestionHandler={(e) => {
                              let temp = [...questions];
                              const foundQuestion = temp.findIndex(
                                (el) => el.name === e.name
                              );
                              if (foundQuestion) {
                                questions[foundQuestion] = e;
                              }
                              setQuestions([...questions]);
                            }}
                            selectedTag={selectedTag}
                            tags={tags}
                            getTagHandler={(e) => {
                              const selected = tags.find(
                                (tag) => tag.value === e.tagId
                              );
                              setSelectedTag(selected);
                              let temp = [...questions];

                              const foundQuestion = temp.findIndex(
                                (el) => el.name === e.name
                              );
                              if (foundQuestion) {
                                questions[foundQuestion] = e;
                              }
                              setQuestions([...questions]);
                            }}
                          />
                        </Grid>
                      )}
                    </>
                  ) : null}
                </Grid>
              </>
            ) : (
              <Alert severity={"info"} message="Please select a chapter" />
            )}
          </StackComp>
        </ErrorBoundary>
      </Modal>
      <FlashCardStack paddingTop="0px">
        <div onClick={() => setOpenModel(true)}>
          <InnerWrapper>
            <ImgDiv>
              <img src={Plus} alt="create flashcard" />
            </ImgDiv>
            <TypographyCompo variant="h6">
              <strong>Create New Stack</strong>
            </TypographyCompo>
          </InnerWrapper>
        </div>
      </FlashCardStack>
    </>
  );
};

export default FlashcardCreate;

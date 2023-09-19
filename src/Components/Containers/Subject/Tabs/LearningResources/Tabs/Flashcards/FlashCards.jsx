import React, { useState, useCallback } from "react";
import FlashCardBreadCrumb from "./BreadCrumbs/BreadCrumbs";
import FlashCardHeader from "../../../../Headers/LearningResources/FlashCard/FlashCard";
import LeftSide from "../../../../LeftSideBar/LeftSide";
import GridComp from "../../../../../../UI/Grid/Grid";
import CardComp from "../../../../../../UI/Card/Card";
import api from "./../../../../../../../Services";
import { useMediaQuery } from "@mui/material";
import FlashCardOpen from "./../../../../FlashcardOpen/FlashcardOpen";
import Loader from "../../../../../../UI/Loader/Loader";
import { useSnackbar } from "notistack";
import Alert from "../../../../../../UI/Alert/Alert";
import FlashcardHandler from "./FlashcardHandler";
import errorFunctions from "../../../../../../../helpers/createResponses";
import ErrorBoundary from "./../../../../../../../Errors/ErrorBoundary";
import debounce from "lodash.debounce";
import useUserResponseAwait from "./../../../../hooks/useUserResponseAwait.js";
import { isItArray } from "../../../../../../../helpers/checkifArray";
import { template } from "lodash";

const FlashCards = () => {
  const { awaitingUserResponse, toggleLoading } = useUserResponseAwait();
  const { createError, createLoading, initialError, initialLoading } =
    errorFunctions;
  const { enqueueSnackbar } = useSnackbar();
  const [allTags, setAllTags] = useState([]);
  const [baseView, setBaseView] = useState(true);
  const _1000px = useMediaQuery("(min-width: 1000px)");
  const _750px = useMediaQuery("(max-width: 750px)");
  const [selection, setSelection] = useState({});
  const [selectedTag, setSelectedTag] = useState({ title: "all" });
  const [flashcards, setFlashcards] = useState([]);
  const [listHandle, setListHandle] = useState({});
  const [error, setError] = useState(initialError);
  const [loading, setLoading] = useState(initialLoading);
  const [selectedStack, setSelectedStack] = useState({});
  const [isInLibrary, setIsInLibrary] = useState(false);
  const [showFlashcard, setShowFlashcard] = useState(true);
  const [flashcardId, setFlashcardId] = useState(null);
  const [chapterOrSnackId, setChapterOrSnackId] = useState(null);
  const [getMenuStats, setGetMenuStats] = useState(false);
  const [flashcardStatus, setFlashcardStatus] = useState({});

  const getFlashcardsFromApi = async ({ id, type, token }) => {
    let temp = await api.getFlashcards(id, type, token);
    return temp;
  };

  const handleFlashcardCall = (payload, criteria) => {
    const { id, type } = payload;
    const token = localStorage.getItem("auth");
    getFlashcardsFromApi({ id, type, token }).then((el) => {
      setLoading(initialLoading);
      if (!el.error) {
        const { doneFlashcards, status } = el.data;
        const statusObj = { doneFlashcards: doneFlashcards, status: status };
        const isQuestionsAnArray = isItArray(el.data.questions);
        setFlashcardStatus(statusObj);
        if (isQuestionsAnArray) {
          if (el.data.questions.length > 0) {
            setError(initialError);
            setIsInLibrary(el.data.isInLibrary);
            const data = el.data.questions;
            let temp = [...data];
            if (criteria && criteria.title !== "all") {
              temp = data.filter((each) => each.tagId === criteria.id);
            }
            if (temp.length === 0) {
              setError(
                createError(
                  true,
                  "info",
                  "No Question Pair against this selection!"
                )
              );
            }

            setFlashcards(temp);
            setSelection(payload);
            setBaseView(true);
          } else {
            setError(
              createError(
                true,
                "No flashcard found against this selection!",
                "info"
              )
            );
          }
        } else {
          const flashcardArray = Object.values(el?.data.questions)[0];

          if (flashcardArray !== undefined) {
            setError(initialError);
            setIsInLibrary(el.data.isInLibrary);
            let temp = [...flashcardArray];
            // console.log("criteria...", criteria);
            if (criteria && criteria.title !== "all") {
              temp = flashcardArray.filter(
                (each) => each.tagId === criteria.id
              );
            } else {
              console.log("no criteria");
            }
            // console.log("temp", temp);
            if (temp.length === 0) {
              setError(
                createError(
                  true,
                  "info",
                  "No Question Pair against this selection!"
                )
              );
            }
            setFlashcards(temp);
            // console.log("payload", payload);
            setSelection(payload);
            setBaseView(true);
          } else {
            // console.log("no flashacrds");
            setError(
              createError(
                true,
                "No flashcard found against this selection!",
                "info"
              )
            );
          }
        }
      } else {
        // case if error is there
        setError(createError(true, "Unknown error occured!", "error"));
      }
    });
  };

  const listItemClickHandler = (selectedListItem, courseInfo) => {
    // console.log("selectedListItem", selectedListItem);
    if (selectedListItem.type === "chapter" && !selectedListItem.nested) {
      setChapterOrSnackId(selectedListItem.id);
    } else if (selectedListItem.type === "snack") {
      setChapterOrSnackId(selectedListItem.id);
    }
    setGetMenuStats(false);
    setShowFlashcard(false);
    setListHandle({ listSelection: selectedListItem, courseInfo });
    if (selectedListItem.isExpanded) {
      setLoading(createLoading(true, "list-click"));
      handleFlashcardCall(selectedListItem);
    }
  };

  const handleTagSelection = (_, item) => {
    // console.log("handle tad one", _);
    console.log("handle tad two", item);
    handleFlashcardCall(selection, item);
    setLoading(createLoading(true, "tag-click"));
    setSelectedTag(item);
  };

  const flashcardSelectionHandler = (e) => {
    const stackSelection = {
      stack: selection,
      questions: flashcards,
      userSelection: e,
    };
    // console.log("stackSelection", stackSelection);
    setSelectedStack(stackSelection);
    setBaseView(false);
  };

  const sideEffectHandler = useCallback(
    debounce((response, id) => {
      flashCardButtonApiHandler(response, id);
    }, 2000),
    []
  );

  const flashCardIdSideEffect = (responseId) => {
    setFlashcardId(responseId);
  };
  const flashCardButtonApiCall = async ({
    contentId,
    response,
    flashcardId,
  }) => {
    let token = localStorage.getItem("auth");

    let temp = api.postFlashcardButtonStatus(
      token,
      contentId,
      response,
      flashcardId
    );
    return temp;
  };
  const flashCardButtonApiHandler = (response, id) => {
    flashCardButtonApiCall({
      response,
      flashcardId,
      contentId: id,
    })
      .then((el) => {
        if (!el.error) {
          // enqueueSnackbar(`${response.response} added ${el.response}`, {
          //   variant: "success",
          // });
        } else {
          enqueueSnackbar(el.response, {
            variant: "error",
          });
        }
      })
      .catch((error) => {
        enqueueSnackbar(error, {
          variant: "error",
        });
      });

    toggleLoading(false);
  };

  const getMenuState = (getMenu) => {
    setLoading(createLoading(true, "list-click"));

    // changes done here
    handleFlashcardCall(
      { id: selection.id, type: selection.type, name: selection.name },
      selectedTag
    );
    if (getMenu === true) {
      setGetMenuStats(getMenu);
      setBaseView(true);
    }
  };

  const left = _1000px ? 3 : _750px ? 12 : 4;
  const right = _1000px ? 9 : _750px ? 12 : 8;

  return (
    <GridComp container spacing={4}>
      <GridComp item xs={12}>
        <FlashCardBreadCrumb />
      </GridComp>
      <GridComp item container xs={12}>
        <FlashCardHeader
          activeTag={selectedTag}
          allTags={allTags}
          setAllTags={setAllTags}
          baseView={baseView}
          left={left}
          right={right}
          handleSelection={handleTagSelection}
          flashcards={flashcards}
        />
      </GridComp>
      <GridComp item xs={left}>
        <CardComp nopadding={true}>
          <LeftSide
            selectedFromList={selection}
            onListClick={(e, i) => {
              listItemClickHandler(e, i);
            }}
            getMenuStats={getMenuStats}
          />
        </CardComp>
      </GridComp>
      <GridComp item xs={right}>
        <ErrorBoundary>
          {showFlashcard ? (
            <Alert title="Click on unit or chapter to show the Flashcards" />
          ) : (
            <>
              {!loading.value ? (
                <>
                  {!error.value ? (
                    <>
                      {baseView ? (
                        <>
                          {flashcards.length > 0 && (
                            <FlashcardHandler
                              flashcardStatus={flashcardStatus}
                              course={listHandle}
                              selection={selection}
                              selectedTag={selectedTag}
                              stacksArr={[flashcards]}
                              isInLibrary={isInLibrary}
                              show={false}
                              clicked={flashcardSelectionHandler}
                              _1000px={_1000px}
                            />
                          )}
                        </>
                      ) : (
                        <FlashCardOpen
                          sideEffect={(e) => {
                            toggleLoading(true);
                            sideEffectHandler(e, chapterOrSnackId);
                          }}
                          awaitingUserResponse={awaitingUserResponse}
                          selectedStack={selectedStack}
                          flashCardIdSideEffect={flashCardIdSideEffect}
                          getMenuState={getMenuState}
                        />
                      )}
                    </>
                  ) : (
                    <>
                      <Alert title="No flashcard Stack" severity="warning" />
                    </>
                  )}
                </>
              ) : (
                <Loader />
              )}
            </>
          )}
        </ErrorBoundary>
      </GridComp>
    </GridComp>
  );
};

export default FlashCards;

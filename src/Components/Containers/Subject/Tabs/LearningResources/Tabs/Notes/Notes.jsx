import React, { useRef, useState, useEffect } from "react";
import LeftMenu from "../../../../LeftSideBar/LeftSide";
import BreadCrumb from "../../../../BreadCrumb";
import NotesHeader from "../../../../Headers/LearningResources/Notes/Notes";
import NotesContent from "./NotesContent";
import Grid from "../../../../../../UI/Grid/Grid";
import Card from "../../../../../../UI/Card/Card";
import { useSnackbar } from "notistack";
import api from "./../../../../../../../Services";
import capitalize from "../../../../../../../helpers/capitalize";
import Loader from "../../../../../../UI/Loader/Loader";
import isEmptyObj from "../../../../../../../helpers/objectIsEmpty";
import Alert from "./../../../../../../UI/Alert/Alert";
import ErrorBoundary from "./../../../../../../../Errors/ErrorBoundary";
import { useSelector } from "react-redux";
import TypographyCompo from "../../../../../../UI/Typography/TypographyCompo";
import { groupBy } from "lodash";
import NotesChapterLoop from "./NotesChapterLoop";
import { useParams } from "react-router-dom";

const Notes = () => {
  const { enqueueSnackbar } = useSnackbar();
  const { id: courseId } = useParams();
  const course = useSelector((state) => state.course);
  const [loading, setLoading] = useState(false);
  const searchResultsListRef = useRef();
  const [allTags, setAllTags] = useState([]);
  const [filteredTags, setFilteredTags] = useState([]);
  const [selectedFromList, setSelectedFromList] = useState({});
  const [selectedTag, setSelectedTag] = useState({ title: "all" });
  const [hierarchyData, setHeirarchyData] = useState(null);
  // const [chapterId, setChapterId] = useState(null);
  const [showData, setShowData] = useState(true);
  // const [dataType, setDataType] = useState("");
  const [dataCorrespondingToSelection, setDataCorrespondingToSelection] =
    useState([]);

  const getNotesFromApi = async (id, type) => {
    let token = localStorage.getItem("auth");
    let temp = await api.getNotesFromDbLearningResources({ id, type }, token);
    return temp;
  };

  const handleDataIfTrue = (payload, userSelection) => {
    console.log(payload);

    const generateMasterArr = (Arr) => {
      const arrGenerated = Arr.map((arrEl) => {
        let topic = "";
        if (arrEl.snackId) {
          // find the snack in course with the snack id from arrEl
          topic = course.snacks.find(
            (snack) => snack.id === arrEl.snackId
          )?.title;
        } else {
          // find the chapter in course with the chapter id id from arrEl
          topic = course.chapters.find(
            (chap) => chap.id === arrEl.chapterId
          )?.title;
        }
        const notes = rows.filter(
          (el) =>
            el.chapterId === arrEl.chapterId && el.snackId === arrEl.snackId
        );
        return {
          topic,
          notes,
          combination: arrEl,
        };
      });

      return arrGenerated;
    };
    setSelectedFromList(userSelection);
    if (payload.data.count === 0) {
      return setDataCorrespondingToSelection([]);
    }

    let keys = []; //Array of {chapterId:id, snackId:id}

    let rows = payload.data.rows;
    rows.forEach((el) => {
      const testObj = {
        chapterId: el.chapterId,
        snackId: el.snackId,
      };
      const elementIsInKey = keys.find(
        (eachKey) =>
          eachKey.chapterId === el.chapterId && eachKey.snackId === el.snackId
      );
      if (!elementIsInKey) {
        keys.push(testObj);
      }
    });

    const chapterWiseGroups = groupBy(keys, "chapterId"); // group by chapter ids e.g { chapterId: [{chapterId:id, snackId:id}]}

    let chaptersArr = [];

    for (let i in chapterWiseGroups) {
      const chapterId = +i;
      const notesGroupedAsTags = generateMasterArr(chapterWiseGroups[i]);
      const chapterInfo = {
        id: chapterId,
        name: capitalize(
          course.chapters.find((chap) => chap.id === chapterId)?.title
        ),
        notes: notesGroupedAsTags,
      };

      chaptersArr.push(chapterInfo);
    }

    setDataCorrespondingToSelection(chaptersArr);
    return true;
  };

  const getContentHandler = (id, type, selection) => {
    setLoading(true);
    getNotesFromApi(id, type)
      .then((el) => {
        if (el.error) {
          console.error(el);
          setLoading(false);
          throw Error("Network Response Error");
        }
        setLoading(false);
        //set data to be view
        handleDataIfTrue(el, selection);
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
        throw Error("Network Request Error");
      });
  };
  // will make call for selected item unit, chapter or snack
  const selectFromListHandler = async (e) => {
    console.log(e);
    setShowData(false);
    const { id, type } = e;
    if (e.nested && !e.isExpanded) {
      // it has some chapter or snacks and is already expanded then no api call will be made
      return;
    }

    getContentHandler(id, type, e);
  };

  const handleTagSelection = (_, tag) => {
    // enqueueSnackbar(`Selected ${capitalize(tag.title)}`, {
    //   variant: "success",
    // });
    setSelectedTag(tag);
  };

  const toggleTagsHandler = React.useCallback(
    (selection) => {
      if (!selection.id && selection.title === "all") {
        setFilteredTags([...allTags]);
      } else {
        let temp = allTags.filter((each) => each.id === selection.id);
        setFilteredTags(temp);
      }
      return true;
    },
    [allTags]
  );

  const fetchNotesHeirarchy = async () => {
    let token = localStorage.getItem("auth");
    await api
      .getHierarchyForNotes(token, courseId)
      .then((resp) => setHeirarchyData(resp))
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    toggleTagsHandler(selectedTag);
  }, [selectedTag, toggleTagsHandler]);
  useEffect(() => {
    fetchNotesHeirarchy();
  }, []);
  const addNoteToLibraryApiCall = async (payload) => {
    let token = localStorage.getItem("auth");
    let temp = api.addNoteToLibrary(payload, token);
    return temp;
  };

  const pushFullContentToLibrary = (payload) => {
    let data = {};
    const { chapterId, snackId } = payload;

    data.chapterId = chapterId;
    if (snackId) {
      data.snackId = snackId;
    }
    if (data.snackId || data.chapterId) {
      addNoteToLibraryApiCall(data)
        .then((el) => {
          handleResponseOfLibraryPush(el);
        })
        .catch((err) => console.error(err));
    }
  };

  const handleResponseOfLibraryPush = (res) => {
    if (res.ok) {
      return true;
    } else
      enqueueSnackbar(`Failed to add to library!`, {
        variant: "error",
      });
    return false;
  };

  const pushTagToLibrary = (payload) => {
    const { chapterId, snackId, tagId } = payload;
    addNoteToLibraryApiCall({ chapterId, snackId, tagId })
      .then((el) => {
        handleResponseOfLibraryPush(el);
      })
      .catch((err) => console.error(err));
  };

  const addToLibraryHandler = (payload) => {
    const { content, selectedCategory } = payload;

    const { chapterId, snackId } = content.combination;

    let toSend = { type: "chapter" };
    toSend.chapterId = chapterId;

    if (snackId) {
      toSend.snackId = snackId;
      toSend.type = "snack";
    }
    switch (selectedCategory) {
      case "specific-tag": {
        toSend.tagId = payload.origin.tagId;
        pushTagToLibrary(toSend);
        break;
      }
      case "full-content": {
        pushFullContentToLibrary(toSend);
        break;
      }
      default: {
        break;
      }
    }
  };

  const generateUnitName = (id, type) => {
    // setDataType(type);
    switch (type) {
      case "unit": {
        const getUnit = course.units.find((eachUnit) => eachUnit.id === id);

        return getUnit.title ? getUnit.title : null;
      }

      case "chapter": {
        const unitId = course.chapters.find(
          (eachChap) => eachChap.id === id
        )?.unitId;
        if (unitId) {
          const getUnit = course.units.find(
            (eachUnit) => eachUnit.id === unitId
          );
          return getUnit.title ? getUnit.title : null;
        }
        return null;
      }

      case "snack": {
        const getChapterId = course.snacks.find(
          (snack) => snack.id === id
        )?.chapterId;
        const getUnitId = course.chapters.find(
          (chap) => chap.id === getChapterId
        )?.unitId;
        const unitDetails = course.units.find((unit) => unit.id === getUnitId);
        return unitDetails ? unitDetails.title : null;
      }

      default: {
        return null;
      }
    }
  };

  return (
    <div>
      <BreadCrumb />
      <NotesHeader
        allTags={allTags}
        setAllTags={setAllTags}
        activeTag={selectedTag}
        handleSelection={handleTagSelection}
        ref={searchResultsListRef}
      />
      <Grid container spacing={2}>
        <Grid item md={3} sm={12} sx={{ width: "100%" }}>
          <ErrorBoundary>
            <Card nopadding={true}>
              <LeftMenu
                selectedFromList={selectedFromList}
                onListClick={selectFromListHandler}
                hierarchyData={hierarchyData}
              />
            </Card>
          </ErrorBoundary>
        </Grid>
        <Grid item md={9} sm={12} sx={{ width: "100%" }}>
          <ErrorBoundary>
            {showData ? (
              <Alert
                severe="info"
                message="Click on unit or chapter to show the Notes"
              />
            ) : (
              <>
                {isEmptyObj(selectedFromList) ? null : !loading ? (
                  dataCorrespondingToSelection.length > 0 ? (
                    <Card nopadding={true}>
                      {course.haveUnits ? (
                        <>
                          <TypographyCompo
                            style={{ padding: "2rem 1rem" }}
                            variant={"h4"}
                          >
                            {generateUnitName(
                              selectedFromList.id,
                              selectedFromList.type
                            )}
                          </TypographyCompo>
                        </>
                      ) : null}

                      {dataCorrespondingToSelection.map((data) => {
                        return (
                          <NotesChapterLoop
                            // dataType={dataType}
                            selectedTag={selectedTag}
                            selectedFromList={selectedFromList}
                            filteredTags={filteredTags}
                            addToLibraryHandler={addToLibraryHandler}
                            {...data}
                          />
                        );
                      })}
                    </Card>
                  ) : (
                    <Alert
                      message={"No notes found against this selection!"}
                      severity={"info"}
                    />
                  )
                ) : (
                  <Loader />
                )}
              </>
            )}
          </ErrorBoundary>
        </Grid>
      </Grid>
    </div>
  );
};

export default Notes;

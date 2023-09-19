import React from "react";
import BreadCrumb from "./../../../BreadCrumb";
import MyLibraryNotesHeader from "./../../../Headers/MyLibrary/Notes/Notes";
import NotesContent from "./NotesContent";
import GridComp from "./../../../../../UI/Grid/Grid";
import CardComp from "./../../../../../UI/Card/Card";
import LeftSide from "./../../../LeftSideBar/LeftSide";
import { useMediaQuery } from "@mui/material";
import api from "../../../../../../Services";
import responseFunctions from "../../../../../../helpers/createResponses";
import Loader from "../../../../../UI/Loader/Loader";
import Alert from "../../../../../UI/Alert/Alert";
import ErrorBoundary from "./../../../../../../Errors/ErrorBoundary";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { useSnackbar } from "notistack";
import { myLibraryActions } from "./../../../../../../redux/reducers/myLibrary";
import { template } from "lodash";

const MyLibraryNotes = () => {
  const params = useParams();
  const { id } = params;
  const { enqueueSnackbar } = useSnackbar();
  const { createError, createLoading, initialError, initialLoading } =
    responseFunctions;
  const dispatch = useDispatch();
  // const noteId = useSelector((state) => state.myLibrary.notesId);
  const library = useSelector((state) => state.myLibrary);
  const { notesId: noteId, filteredNotesData, myLibraryNotesData } = library;
  const [course, setCourse] = React.useState({});
  const [selectedFromList, setSelectedFromList] = React.useState({});
  const [error, setError] = React.useState(initialError);
  const [loading, setLoading] = React.useState(initialLoading);
  const [initialNotes, setInitialNotes] = React.useState([]);
  const [notes, setNotes] = React.useState([]);
  const _1000px = useMediaQuery("(min-width: 1000px)");
  const _830px = useMediaQuery("(max-width: 830px)");
  const [dataType, setDataType] = React.useState("");
  const [getUnitorChapId, setGetUnitorChapId] = React.useState(null);
  const [subjectName, setSubjectName] = React.useState("");
  const [showNotes, setShowNotes] = React.useState(false);

  // ************* single note delete start **************

  const deleteSingleNoteApi = async (id) => {
    const token = localStorage.getItem("auth");
    let temp = await api.deleteNote(id, token);
    return temp;
  };

  const handleSignleDeleteNote = (category, singleNoteData) => {
    setShowNotes(true);
    deleteSingleNoteApi(noteId)
      .then((el) => {
        if (!el.error) {
          let temp = [...filteredNotesData];
          let matchedIndex = temp
            .map((obj) => obj.id)
            .indexOf(singleNoteData.id);
          let temp1 = [...filteredNotesData];
          temp1.splice(matchedIndex, 1);

          dispatch(myLibraryActions.filteredNotes(temp1));
          setNotes(temp1);
          setShowNotes(false);
          // enqueueSnackbar("Changes successfully made!", {
          //   variant: "success",
          //   autoHideDuration: 4000,
          // });
          // getNotes();
        } else {
          enqueueSnackbar("Edits failed, please try again!", {
            variant: "error",
            autoHideDuration: 6000,
          });
        }
      })
      .catch((err) => {
        enqueueSnackbar(`${error} please try again!`, {
          variant: "error",
          autoHideDuration: 6000,
        });
      });
  };

  // **************** Single note delete function end ***************************

  const selectFromListHandler = (e) => {
    const { id, type, name } = e;
    setSubjectName(name);
    setGetUnitorChapId(id);
    let temp = [...filteredNotesData];
    // let temp = [...initialNotes];
    let update = [];
    switch (e.type) {
      case "unit": {
        update = temp.filter((each) => each.unitId === e.id);
        break;
      }
      case "chapter": {
        update = temp.filter((each) => each.chapterId === e.id);
        break;
      }
      case "snack": {
        update = temp.filter((each) => each.snackId === e.id);
        break;
      }
      default:
        break;
    }

    setNotes(update);
    setSelectedFromList(e);

    switch (type) {
      case "unit":
        setDataType("unit");
        break;
      case "chapter":
        setDataType("chapter");
        break;

      default:
        break;
    }
  };

  const callResetNotesApi = async (getUnitorChapId, dataType) => {
    let token = localStorage.getItem("auth");
    let temp = await api.restNotesFromDB(token, getUnitorChapId, dataType);
    return temp;
  };

  const resetMyLibraryNotes = () => {
    callResetNotesApi(getUnitorChapId, dataType)
      .then((el) => {
        if (!el.error) {
          getNotes();
        } else {
          enqueueSnackbar("Reset to default failed, please try again!", {
            variant: "error",
            autoHideDuration: 6000,
          });
        }
      })
      .catch((error) => {
        enqueueSnackbar(`${error}please try again!`, {
          variant: "error",
          autoHideDuration: 6000,
        });
      });
  };

  const fetchLibraryApi = async () => {
    let token = localStorage.getItem("auth");
    let temp = await api.fetchNotesFromLibrary(token);
    return temp;
  };

  const filterNotesThroughCourseId = (notes) => {
    const filtered = notes.filter((note) => note.courseId === +id);
    return filtered;
  };

  const getNotes = (category) => {
    setLoading(createLoading(true, "load-notes"));
    fetchLibraryApi()
      .then((el) => {
        setSelectedFromList({});
        const filterData = filterNotesThroughCourseId(el.data);
        if (!el.error) {
          if (el.data.length > 0) {
            setError(initialError);
          } else if (el.data.length === 0) {
            setError(
              createError(true, "No notes found in the library!", "info")
            );
          }

          filterData.sort((a, b) => a.id - b.id);

          dispatch(myLibraryActions.filteredNotes(filterData));
          setInitialNotes(filterData);

          if (category && category === "delete") {
            setNotes(filterData);
          }
        } else {
          setError(createError(true, "An error occured", "info"));
        }
        setLoading(createLoading(false, "load-notes"));
        setInitialNotes(filterData);
        if (category && category === "delete") {
          return filterData;
        }
      })
      .catch((err) => console.error(err));
  };

  const deleteMyLibraryApi = async () => {
    let token = localStorage.getItem("auth");
    let temp = await api.deleteMyLibraryNotes(token, getUnitorChapId, dataType);
    return temp;
  };

  const deleteMylibraryData = () => {
    deleteMyLibraryApi()
      .then((el) => {
        if (!el.error) {
          getNotes("delete");
          setSelectedFromList({});
        }
      })
      .catch((err) => {
        enqueueSnackbar(err, {
          variant: "error",
          autoHideDuration: 6000,
        });
      });
  };

  const handleDelete = () => {
    deleteMylibraryData();
  };

  const deleteSingleNote = (singleNoteData) => {
    handleSignleDeleteNote("delete", singleNoteData);
    // getNotes();
  };
  const handleResetNotes = () => {
    resetMyLibraryNotes();
  };
  React.useEffect(() => {
    getNotes();
  }, []);

  return (
    <div>
      {loading.value ? (
        <Loader />
      ) : (
        <>
          {error.value ? (
            <>
              <Alert severity={error.severity} message={error.message} />
            </>
          ) : (
            <>
              <BreadCrumb />
              <MyLibraryNotesHeader _1000px={_1000px} _830px={_830px} />
              <GridComp container spacing={2}>
                <GridComp item xs={_1000px ? 3 : _830px ? 12 : 4}>
                  <CardComp nopadding={true}>
                    <LeftSide
                      selectedFromList={selectedFromList}
                      onListClick={selectFromListHandler}
                      getCourseInfo={(e) => setCourse(e)}
                    />
                  </CardComp>
                </GridComp>
                <GridComp item xs={_1000px ? 9 : _830px ? 12 : 8}>
                  {selectedFromList.id ? (
                    <ErrorBoundary>
                      <CardComp
                        nopadding={true}
                        style={{ paddingBottom: "2rem" }}
                      >
                        {showNotes ? (
                          <Loader />
                        ) : (
                        <NotesContent
                          subjectName={subjectName}
                          handleResetNotes={handleResetNotes}
                          getNotes={getNotes}
                          deleteSingleNote={deleteSingleNote}
                          handleDelete={handleDelete}
                          selectedFromList={selectedFromList}
                          notes={notes}
                          course={course}
                          showNotes={showNotes}
                        />
                       )} 
                      </CardComp>
                    </ErrorBoundary>
                  ) : (
                    <Alert severity={"info"} title={"Please select a topic"} />
                  )}
                </GridComp>
              </GridComp>
            </>
          )}
        </>
      )}
    </div>
  );
};

export default MyLibraryNotes;

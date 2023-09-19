import React from "react";
import Flashcard from "./../../../../../../UI/FlashCard/FlashCard";
import GridComp from "../../../../../../UI/Grid/Grid";
import api from "../../../../../../../Services";
import createResponses from "../../../../../../../helpers/createResponses";

const { createLoading, initialLoading } = createResponses;

const EachFlashcardHandler = (props) => {
  const [loading, setLoading] = React.useState(initialLoading);

  const [saved, setSaved] = React.useState(props.isInLibrary);

  const saveHandler = (e) => {
    setLoading(createLoading(true, "save"));
    if (e) {
      prepareToSaveToLibrary();
    }

    if (!e) {
      setLoading(createLoading(false, "save"));
    }
  };

  const prepareToSaveToLibrary = () => {
    const courseInfo = props.saveLibraryInfo.courseInfo.data;
    let payload = {};
    if (props.type === "snack") {
      payload = {
        snackId: props.index,
        chapterId: courseInfo.snacks.find((snack) => snack.id === props.index)
          ?.chapterId,
      };
    }

    if (props.type === "chapter") {
      payload = { chapterId: props.index };
    }
    saveController(payload);
  };

  const fetchFlashcardsFromApi = async () => {
    const token = localStorage.getItem("auth");
    let temp = api.fetchFlashcardsFromLibrary(token);
    return temp;
  };

  const getFlashcardsHandler = (payload) => {
    fetchFlashcardsFromApi()
      .then((el) => {
        return;
      })
      .catch((err) => console.error(err));
  };

  const sendSaveToAPI = (payload) => {
    let token = localStorage.getItem("auth");
    let temp = api.addFlashcardToLibrary(payload, token);
    return temp;
  };

  const handleSuccess = (res, payload) => {
    setSaved(true);
    setLoading(createLoading(false, "true"));
    getFlashcardsHandler(payload);
    return true;
  };

  const handleFail = (res) => {
    setLoading(createLoading(false, "true"));
    return true;
  };

  const saveController = (payload) => {
    sendSaveToAPI(payload)
      .then((el) => {
        if (!el.error) handleSuccess(el, payload);
        else handleFail(el);
      })
      .catch((error) => {
        handleFail(error);
      });
  };

  return (
    <GridComp md={6} sm={12} xs={12} item>
      <Flashcard
        flashcardStatus={props.flashcardStatus}
        show={saved}
        loading={loading.value}
        setShow={saveHandler}
        {...props}
      />
    </GridComp>
  );
};

export default EachFlashcardHandler;

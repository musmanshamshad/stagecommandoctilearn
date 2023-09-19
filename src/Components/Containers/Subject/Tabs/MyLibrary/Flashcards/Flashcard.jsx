import React from "react";
import MyLibFlashCard from "./MyLibFlashCard";
import api from "../../../../../../Services";
import createResponses from "../../../../../../helpers/createResponses";
import Loader from "../../../../../UI/Loader/Loader";
import BreadCrumb from "./BreadCrumbs/BreadCrumbs";
import MyLibFlashCardView from "./MyLibFlashCardView/MyLibFlashCardView";
import { useSelector } from "react-redux";
import { useSnackbar } from "notistack";
import useUserResponseAwait from "../../../hooks/useUserResponseAwait";
import debounce from "lodash.debounce";

const MyLibraryFlashcard = () => {
  const { awaitingUserResponse, toggleLoading } = useUserResponseAwait();
  const { enqueueSnackbar } = useSnackbar();
  const { createLoading, initialLoading } = createResponses;
  const { showMyLibFlashcard } = useSelector((state) => state.breadCrumbStats);
  const [baseView, setBaseView] = React.useState(true);
  const [flashcards, setFlashcards] = React.useState([]);
  const [selectedStack, setSelectedStack] = React.useState();
  const [loading, setLoading] = React.useState(initialLoading);
  const [getFlashcardStacks, setGetFlashcardStacks] = React.useState(false);
  const [fcStackId, setFcStackId] = React.useState(null);

  const loadFlashcards = async () => {
    const token = localStorage.getItem("auth");
    let temp = await api.getFlashcardsFromLibrary(token);
    return temp;
  };

  const loadFlashcardsHandler = () => {
    setLoading(createLoading(true, "flash-cards-init"));
    loadFlashcards()
      .then((el) => {
        if (!el.error) {
          setFlashcards([...el.data]);
        }

        setLoading(initialLoading);
      })
      .catch((err) => console.error(err));
  };
  const loadInit = () => {
    loadFlashcardsHandler();
  };

  React.useEffect(() => {
    loadInit();
  }, []);
  React.useState(() => {
    loadInit();
  }, [showMyLibFlashcard]);

  const getMenuState = (getMenu) => {
    if (getMenu === true) {
      setGetFlashcardStacks(getMenu);
      setBaseView(true);
    }
  };
  React.useEffect(() => {
    if (getFlashcardStacks === true) {
      loadFlashcardsHandler();
    }
  }, [getFlashcardStacks]);

  function handleClick(stack) {
    console.log("stack", stack);
    setFcStackId(stack.stackId);
    setBaseView(false);
    setSelectedStack(stack);
  }

  const flashCardButtonApiCall = async (response, flashcardId) => {
    let token = localStorage.getItem("auth");
    let temp = api.myLibraryFlashcardButtonStatus(token, response, flashcardId);
    return temp;
  };
  const flashCardButtonApiHandler = (payload) => {
    const { response, id } = payload;
    flashCardButtonApiCall(response, id)
      .then((el) => {
        if (!el.error) {
          // enqueueSnackbar(`${response} added ${el.response}`, {
          //   variant: "success",
          // });
        } else {
          enqueueSnackbar(el.response, {
            variant: "error",
          });
        }
        toggleLoading(false);
      })
      .catch((error) => {
        toggleLoading(false);
        enqueueSnackbar(error, {
          variant: "error",
        });
      });
  };

  const deleteFlashcardStackApiCall = async (fcStackId) => {
    let token = localStorage.getItem("auth");
    let temp = api.deleteFlashcardStack(token, fcStackId);
    return temp;
  };
  const deleteFlashcardStackHandler = () => {
    deleteFlashcardStackApiCall(fcStackId)
      .then((el) => {
        if (!el.error) {
          // enqueueSnackbar(` ${el.response}`, {
          //   variant: "success",
          // });
          loadFlashcardsHandler();
          setBaseView(true);
        } else {
          // enqueueSnackbar(el.response, {
          //   variant: "success",
          // });
        }
      })
      .catch((error) => {
        enqueueSnackbar(error, {
          variant: "error",
        });
      });
  };

  const sideEffectHandler = React.useCallback(
    debounce((response) => {
      flashCardButtonApiHandler(response);
    }, 2000),
    []
  );
  return (
    <div>
      {loading.value ? (
        <Loader />
      ) : (
        <>
          <BreadCrumb baseVeiw={baseView} />
          {baseView ? (
            <MyLibFlashCard
              clicked={handleClick}
              MyLibraryFlashCardData={flashcards}
              loadFlashCardStacks={loadInit}
            />
          ) : (
            <MyLibFlashCardView
              awaitingUserResponse={awaitingUserResponse}
              deleteFlashcardStack={deleteFlashcardStackHandler}
              sideEffect={({ response, id }) => {
                toggleLoading(true);
                sideEffectHandler({ response, id });
              }}
              flashCardIdSideEffect={(e) => {
                return;
              }}
              controllerData={selectedStack.flashcards}
              getMenuState={getMenuState}
            />
          )}
        </>
      )}
    </div>
  );
};

export default MyLibraryFlashcard;

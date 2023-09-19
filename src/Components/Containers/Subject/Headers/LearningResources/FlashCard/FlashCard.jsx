import React, { useState, useEffect } from "react";
import StackCompo from "../../../../../UI/Stack/Stack";
import TypographyCompo from "../../../../../UI/Typography/TypographyCompo";
import Divider from "@mui/material/Divider";
import AddSvg from "./../../LearningResources/icons/AddSvg";
import GridComp from "../../../../../UI/Grid/Grid";
import {
  FlashCardHeaderWrapper,
  FlashCardTagStack,
  FlashCardTagsButton,
} from "./FlashCard.Style";
import api from "./../../../../../../Services";
import Loader from "./../../../../../UI/Loader/Loader";
import { useParams } from "react-router-dom";
import ErrorBoundary from "./../../../../../../Errors/ErrorBoundary";

const FlashCardHeader = ({
  left,
  activeTag,
  right,
  baseView,
  allTags,
  setAllTags,
  handleSelection,
  flashcards,
}) => {
  const [showLoader, setShowLoader] = useState(false);
  const { name } = useParams();
  const getTagsFromDbB = async (token) => {
    let temp = await api.getAllTags(token);
    return temp;
  };

  const getTagsApi = async () => {
    let token = localStorage.getItem("auth");
    getTagsFromDbB(token)
      .then((el) => {
        if (el.error) {
          return;
        }
        const { data } = el;
        setAllTags([...data]);
        setShowLoader(false);
      })
      .catch((error) => console.error(error));
  };

  const selectTagHandler = (e, item) => {
    handleSelection(e, item);
  };

  useEffect(() => {
    getTagsApi();
    setShowLoader(true);
  }, []);

  return (
    <>
      <FlashCardHeaderWrapper container spacing={2}>
        <GridComp item xs={left}>
          <StackCompo
            direction="row"
            divider={
              <Divider
                style={{ background: "black", width: "0.7px" }}
                orientation="vertical"
                flexItem
              />
            }
          >
            <TypographyCompo variant="body2" sx={{ minWidth: "max-content" }}>
              {name} Flashcards
            </TypographyCompo>
            <TypographyCompo variant="body2" sx={{ minWidth: "max-content" }}>
              <strong>
                Total Stacks {flashcards.length > 0 ? flashcards.length : null}
              </strong>
            </TypographyCompo>
          </StackCompo>
        </GridComp>
        {baseView && (
          <FlashCardTagStack direction={"row"}>
            {showLoader ? (
              <Loader />
            ) : (
              <>
                <ErrorBoundary>
                  <FlashCardTagsButton
                    variant={"text"}
                    small="small"
                    endIcon={<AddSvg />}
                    isActive={!activeTag.id && activeTag.title === "all"}
                    onClick={(e) => selectTagHandler(e, { title: "all" })}
                  >
                    All
                  </FlashCardTagsButton>
                  {allTags.map((item, index) => (
                    <FlashCardTagsButton
                      variant="text"
                      size="small"
                      isActive={activeTag.id === item.id}
                      onClick={(e) => {
                        selectTagHandler(e, item);
                      }}
                      key={index}
                      endIcon={<AddSvg />}
                    >
                      {item.title}
                    </FlashCardTagsButton>
                  ))}
                </ErrorBoundary>
              </>
            )}
          </FlashCardTagStack>
        )}
      </FlashCardHeaderWrapper>
    </>
  );
};

export default FlashCardHeader;

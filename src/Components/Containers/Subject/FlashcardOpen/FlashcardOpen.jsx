import React from "react";
import FlashCardView from "./../../../UI/FlashCardView/FlashCardView";
import { Box } from "@mui/material";
import { FlashcardOpenBox } from "./FlashcardOpen.style";

const FlashcardOpen = ({
  selectedStack,
  sideEffect,
  flashCardIdSideEffect,
  getMenuState,
  awaitingUserResponse,
}) => {
  return (
    <FlashcardOpenBox>
      <FlashCardView
        awaitingUserResponse={awaitingUserResponse}
        controllerData={selectedStack.questions}
        sideEffect={sideEffect}
        flashCardIdSideEffect={flashCardIdSideEffect}
        getMenuState={getMenuState}
      />
    </FlashcardOpenBox>
  );
};

export default FlashcardOpen;

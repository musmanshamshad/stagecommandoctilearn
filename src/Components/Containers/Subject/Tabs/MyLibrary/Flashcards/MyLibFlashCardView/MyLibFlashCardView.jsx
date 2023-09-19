import React, { useState } from "react";
import FlashCardView from "./../../../../../../UI/FlashCardView/FlashCardView";
import GridComp from "./../../../../../../UI/Grid/Grid";
import { Container, LeftGrid, RightGrid } from "./MyLibFlashCardView.style";
import IconButton from "@mui/material/IconButton";
import StarSvg from "./../../../../Headers/LearningResources/icons/StarSvg";
import TypographyCompo from "./../../../../../../UI/Typography/TypographyCompo";
import Modal from "./../../../../../../UI/Modal/Modal";
import FlashcardDeleteModel from "./FlashcardDeleteModel/FlashcardDeleteModel";

const MyLibFlashCardView = ({
  deleteFlashcardStack,
  sideEffect,
  flashCardIdSideEffect,
  controllerData,
  getMenuState,
  awaitingUserResponse,
}) => {
  const [show, setShow] = useState(true);
  const [openDeleteModel, setOpenDeleteModel] = React.useState(false);
  const saveHandler = () => {
    setOpenDeleteModel(true);
  };

  return (
    <Container>
      <GridComp container spacing={3}>
        <GridComp item md={2} sm={3} xs={12}>
          <LeftGrid>
            <TypographyCompo variant="h6">Topic Title</TypographyCompo>
            <IconButton
              color="primary"
              aria-label="add to shopping cart"
              onClick={saveHandler}
            >
              <StarSvg show={show} />
            </IconButton>
          </LeftGrid>
        </GridComp>

        <GridComp item md={10} sm={9} xs={12}>
          <FlashCardView
            sideEffect={sideEffect}
            flashCardIdSideEffect={flashCardIdSideEffect}
            getMenuState={getMenuState}
            awaitingUserResponse={awaitingUserResponse}
            controllerData={controllerData}
          />
        </GridComp>
        {/* <RightGrid item xs={2}>
        </RightGrid> */}
      </GridComp>
      <Modal open={openDeleteModel} setOpen={setOpenDeleteModel}>
        <FlashcardDeleteModel
          deleteFlashcardStack={deleteFlashcardStack}
          setOpen={setOpenDeleteModel}
          setShow={setShow}
        />
      </Modal>
    </Container>
  );
};

export default MyLibFlashCardView;

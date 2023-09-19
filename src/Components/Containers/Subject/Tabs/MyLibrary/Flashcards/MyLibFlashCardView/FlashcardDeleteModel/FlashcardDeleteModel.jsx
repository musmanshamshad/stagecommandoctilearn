import React from "react";
import {
  DeleteIconButton,
  DeleteWrapper,
  CancelDeleteWrapper,
  Typorgraphy,
  ButtonTypo,
} from "./FlashcardDeleteModel.style.js";
import palette from "./../../../../../../../../config/palette.js";
import ButtonCompo from "./../../../../../../../UI/Button/ButtonComp";
import DeleteSvg from "./../../../Notes/ThreeDotMenu/icons/DeleteSvg";

const FlashcardDeleteModel = ({
  deleteFlashcardStack,
  background,
  setOpen,
  setShow,
}) => {
  const cancelHandler = () => {
    setOpen(false);
    setShow(true);
  };
  const deleteHandler = () => {
    deleteFlashcardStack();
    setOpen(false);
    setShow(false);
  };
  return (
    <div>
      <DeleteWrapper>
        <DeleteIconButton
          color="primary"
          aria-label="upload picture"
          component="span"
        >
          <DeleteSvg
            color={palette.colors.secondaryModified}
            width="22"
            height="22"
          />
        </DeleteIconButton>
        <Typorgraphy>
          <strong>
            Are you sure you want to Remove this Flashcard Stack from My
            Library?
          </strong>
        </Typorgraphy>
        <Typorgraphy color={palette.colors.unselected}>
          <i>You will be able to find this Stack on Learning Resources </i>
        </Typorgraphy>
        <CancelDeleteWrapper>
          <ButtonTypo
            variant="text"
            size="small"
            color1={palette.colors.unselected}
            onClick={cancelHandler}
          >
            Cancel
          </ButtonTypo>
          <ButtonCompo size="small" onClick={deleteHandler}>
            Delete
          </ButtonCompo>
        </CancelDeleteWrapper>
      </DeleteWrapper>
    </div>
  );
};

export default FlashcardDeleteModel;

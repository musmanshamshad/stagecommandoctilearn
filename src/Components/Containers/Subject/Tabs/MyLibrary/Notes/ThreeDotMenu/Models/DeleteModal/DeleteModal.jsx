import React from "react";
import {
  DeleteIconButton,
  DeleteWrapper,
  CancelDeleteWrapper,
  Typorgraphy,
  ButtonTypo,
} from "./DeleteModel.style";
import ButtonCompo from './../../../../../../../../UI/Button/ButtonComp';
import DeleteSvg from './../../icons/DeleteSvg';
import palette from './../../../../../../../../../config/palette.js'
const DeleteModal = ({ background, setOpen, setOpenUndo }) => {
  const deleteHandler = () => {
    
    setOpen(false)
    setOpenUndo(true)
  }
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
          <strong>Are you sure you want to Delete Notes?</strong>
        </Typorgraphy>
        <Typorgraphy color={palette.colors.unselected}>
          <i>You will lose your editing on these selected notes, if any </i>
        </Typorgraphy>
        <CancelDeleteWrapper>
          <ButtonTypo
            variant="text"
            size="small"
            color1={palette.colors.unselected}
            onClick={() => setOpen(false) }
          >
            Cancel
          </ButtonTypo>
          <ButtonCompo size="small" onClick={deleteHandler}>Delete</ButtonCompo>
        </CancelDeleteWrapper>
      </DeleteWrapper>
    </div>
  );
};

export default DeleteModal;

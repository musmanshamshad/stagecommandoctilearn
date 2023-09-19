import React, { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import IconButton from "./../../../../../../UI/IconButton/IconButton";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import ShareSvg from "./icons/ShareSvg";
import SetToOrigionalSvg from "./icons/SetToOrigionalSvg";
import DeleteSvg from "./icons/DeleteSvg";
import { TextSpan } from "./ThreeDotMenu.style";
import Modal from "./../../../../../../UI/Modal/Modal";
import ShareModal from "./Models/ShareModel/ShareModal";
import DeleteModal from "./Models/DeleteModal/DeleteModal";
import UndoNotes from "./Models/DeleteModal/UndoNotes";
import SetToOrigional from "./Models/SetToOrigionalModel/SetToOrigional";

export default function ThreeDotMenu({
  subjectName,
  handleResetNotes,
  handleDelete,
}) {
  const [anchorEl, setAnchorEl] = useState(null);
  const [openShareModel, setOpenShareModel] = useState(false);
  const [openDeleteModel, setOpenDeleteModel] = useState(false);
  const [openOrigonalModel, setOpenOrigonalModel] = useState(false);
  const [openUndoModel, setOpenUndoModel] = useState(false);

  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <Box>
        <IconButton onClick={handleClick} size="small" sx={{ ml: 2 }}>
          <MoreVertIcon />
        </IconButton>
      </Box>
      <Menu
        anchorEl={anchorEl}
        id="account-menu"
        open={open}
        onClose={handleClose}
        onClick={handleClose}
        PaperProps={{
          sx: {
            overflow: "visible",
            background: "#251038",
            borderRadius: "10px",
            filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
            ml: -4,
            mt: 2.5,

            "&:before": {
              content: '""',
              display: "block",
              position: "absolute",
              top: 0,
              right: 20,
              width: 15,
              height: 15,
              bgcolor: "#251038",
              transform: "translateY(-50%) rotate(45deg)",
              zIndex: 0,
            },
          },
        }}
      >
        {/* <MenuItem onClick={() => setOpenShareModel(true)}>
          <ShareSvg /> <TextSpan>Share</TextSpan>
        </MenuItem> */}
        <MenuItem onClick={() => setOpenDeleteModel(true)}>
          <DeleteSvg /> <TextSpan>Delete</TextSpan>
        </MenuItem>
        <MenuItem onClick={() => setOpenOrigonalModel(true)}>
          <SetToOrigionalSvg /> <TextSpan>Restore</TextSpan>
        </MenuItem>
      </Menu>
      <Modal
        open={openShareModel}
        setOpen={setOpenShareModel}
        modelWidth="600px"
      >
        <ShareModal />
      </Modal>
      <Modal open={openDeleteModel} setOpen={setOpenDeleteModel}>
        <DeleteModal
          setOpen={setOpenDeleteModel}
          setOpenUndo={setOpenUndoModel}
        />
      </Modal>
      <Modal open={openUndoModel} setOpen={setOpenUndoModel}>
        <UndoNotes
          subjectName={subjectName}
          handleDelete={handleDelete}
          open={openUndoModel}
          setOpen={setOpenUndoModel}
        />
      </Modal>
      <Modal open={openOrigonalModel} setOpen={setOpenOrigonalModel}>
        <SetToOrigional
          handleResetNotes={handleResetNotes}
          setOpen={setOpenOrigonalModel}
        />
      </Modal>
    </>
  );
}

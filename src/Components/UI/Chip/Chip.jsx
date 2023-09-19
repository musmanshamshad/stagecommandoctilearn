import React from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import { StyledChip } from "./Chip.style";
import PropTypes from "prop-types";

const Chip = ({ deleteIcon, label, deleteHandler }) => {
  const handleClick = (e) => {
    console.info("You clicked the Chip.");
  };
  const handleDelete = (e) => {
    e.stopPropagation();
    deleteHandler();
  };
  return (
    <StyledChip
      label={label}
      onClick={handleClick}
      onDelete={handleDelete}
      deleteIcon={deleteIcon}
      variant="filled"
    />
  );
};

Chip.propTypes = {
  deleteIcon: PropTypes.any,
  deleteHandler: PropTypes.func,
  label: PropTypes.string,
};
Chip.defaultProps = {
  deleteIcon: <DeleteIcon />,
  deleteHandler: () => {
    return;
  },
  label: "File1.exe",
};

export default Chip;

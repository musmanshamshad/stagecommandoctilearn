import React from "react";
import StackComp from "../../../UI/Stack/Stack";
import { HeadingLabel } from "./EducationDetails.style.js";
import IconButtonComp from "../../../UI/IconButton/IconButton";
import Edit from "../../../UI/KeyValue/icons/EditSvg";
import TextField from "./../../../UI/Textfield/Textfield";
import { MdOutlineDone } from "react-icons/md";
import { useSnackbar } from "notistack";

const Name = ({ defaultValue, setValue }) => {
  const [editName, setEditName] = React.useState(false);
  const { enqueueSnackbar } = useSnackbar();

  const completeEditHandler = (e) => {
    setEditName(false);
    // enqueueSnackbar("User name changed", {
    //   variant: "success",
    // });
  };
  return (
    <StackComp direction="row">
      {editName ? (
        <StackComp direction="row" alignItems="center">
          <TextField
            label=""
            value={defaultValue}
            onChange={(e) => setValue(e.target.value)}
          />
          <IconButtonComp onClick={completeEditHandler}>
            <MdOutlineDone />
          </IconButtonComp>
        </StackComp>
      ) : (
        <>
          <HeadingLabel variant="h6">{defaultValue}</HeadingLabel>
          <IconButtonComp
            onClick={(e) => setEditName((prevState) => !prevState)}
          >
            <Edit />
          </IconButtonComp>
        </>
      )}
    </StackComp>
  );
};

export default Name;

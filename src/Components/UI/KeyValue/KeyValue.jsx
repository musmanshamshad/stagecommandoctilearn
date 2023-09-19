import PropTypes from "prop-types";
import React from "react";
import { styled } from "@mui/system";
import TypographyComp from "./../Typography/TypographyCompo";
import Stack from "./../Stack/Stack";
import IconButton from "./../IconButton/IconButton";
import EditSvg from "./icons/EditSvg";
import TextField from "./../Textfield/Textfield";
import { MdOutlineDone } from "react-icons/md";
import { useSnackbar } from "notistack";
import SelectComp from "../Select/SelectComp";

export const Title = styled(TypographyComp)(({ theme }) => ({
  fontWeight: 400,
  fontSize: "11px",
  color: "#ADB4C5",
}));

export const Value = styled(TypographyComp)(({ theme }) => ({
  fontSize: "14px",
  fontWeight: 500,
  color: "#251038",
}));

const KeyValue = ({ defaultValue, title, snackBarTitle,dropDown,options,placeholder,setValue}) => {
  const { enqueueSnackbar } = useSnackbar();
  const [editMode, setEditMode] = React.useState(false);
  const completeEditHandler = (e) => {
    setEditMode(false);
    // enqueueSnackbar(snackBarTitle, {
    //   variant: "success",
    // })
  };

  return (
    <Stack>
      <Stack direction="row" alignItems="center">
        <Title>{title}</Title>
        <IconButton
          onClick={(e) => {
            setEditMode((prevState) => !prevState);
           
          }}
        >
          <EditSvg />
        </IconButton>
      </Stack>
      {editMode ? (
        <Stack direction="row" alignItems="center">
          {dropDown ?
          <SelectComp
          placeholder={placeholder}
          getValue={(e) => setValue(e)}
          options={options}
          label=" "
          width="24.2rem"
        />:
          <TextField
            label=""
            value={defaultValue}
            onChange={(e) => setValue(e.target.value)}
          />
          }
          <IconButton onClick={completeEditHandler}>
            <MdOutlineDone />
          </IconButton>
        </Stack>
      ) : (
        <Value>{(defaultValue && typeof defaultValue==="object")?defaultValue.label:defaultValue}</Value>
      )}
    </Stack>
  );
};

KeyValue.propTypes = {
  defaultValue: PropTypes.any,
  dropDown:PropTypes.bool,
  options:PropTypes.array,
  placeholder: PropTypes.string,
  setValue: PropTypes.func,
};

KeyValue.defaultProps = {
  defaultValue: "No value given",
  title: "No title given",
  snackBarTitle: "No title given",
  dropDown:false,
  placeholder:"",
};
export default KeyValue;

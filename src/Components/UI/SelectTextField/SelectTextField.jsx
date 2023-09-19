import * as React from "react";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { PropTypes } from "prop-types";
import defaultProps from "./defaultProps.js";

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

const SelectTextField = ({ labelName, data, defaultName }) => {
  const [userName, setUserName] = React.useState("");

  const handleChange = (event) => {
    setUserName(event.target.value);
  };

  return (
    <>
      <FormControl sx={{ width: "100%" }}>
        <InputLabel id="demo-multiple-name-label">{labelName}</InputLabel>
        <Select
          labelId="demo-multiple-name-label"
          id="demo-multiple-name"
          value={userName}
          onChange={handleChange}
          input={<OutlinedInput label={labelName} />}
          MenuProps={MenuProps}
        >
          <MenuItem disabled value="">
            <em>Pakistan</em>
          </MenuItem>
          {data.map((name, index) => (
            <MenuItem key={index} value={name.name}>
              {name.name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </>
  );
};
export default SelectTextField;
SelectTextField.propTypes = {
  labelName: PropTypes.string,
  defaultName: PropTypes.string,
  data: PropTypes.shape({
    map: PropTypes.func,
  }),
};

SelectTextField.defaultProps = {
  ...defaultProps,
};

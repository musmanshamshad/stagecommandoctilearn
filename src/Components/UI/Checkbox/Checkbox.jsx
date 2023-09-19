import PropTypes from "prop-types";
import React from "react";
import CheckboxComp from "@mui/material/Checkbox";
import CheckboxIcon from "./CheckboxIcon";

const Checkbox = ({ checked, setChecked }) => {
  const handleChange = (event) => {
    setChecked(event.target.checked);
  };

  return (
    <CheckboxComp
      checked={checked}
      onChange={handleChange}
      inputProps={{ "aria-label": "controlled" }}
      icon={<CheckboxIcon variant="unchecked" />}
      checkedIcon={<CheckboxIcon variant="checked" />}
    />
  );
};

Checkbox.propTypes = {
  checked: PropTypes.bool.isRequired,
  setChecked: PropTypes.func.isRequired,
};

Checkbox.defaultProps = {
  checked: true,
};

export default Checkbox;

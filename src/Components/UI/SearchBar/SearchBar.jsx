import React from "react";
import InputAdornment from "@mui/material/InputAdornment";
import PropTypes from "prop-types";
import SearchIcon from "./icons/SearchIconSvg";
import { SearchField } from "./SearchBar.style";

const SearchBar = (props) => {
const changeHandler = (e) => {
  props.searchHandler(e)
}

  return (
    <div>
      <SearchField
        value= {props.searchedValue}
        size={props.size}
        id="outlined-start-adornment"
        placeholder={props.placeholder}
        onChange ={changeHandler}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">{props.icon}</InputAdornment>
          ),
        }}
      />
    </div>
  );
};

export default SearchBar;

SearchBar.propTypes = {
  size: PropTypes.string,
  placeholder: PropTypes.string,
  icon: PropTypes.any,
  searchHandler : PropTypes.func,
  searchedValue: PropTypes.string
};

SearchBar.defaultProps = {
  size: "small",
  placeholder: "Search by Keyword",
  icon: <SearchIcon />,
  searchedValue: '',
  searchHandler : ((e) => {return})
};

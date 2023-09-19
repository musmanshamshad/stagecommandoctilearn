import React from "react";
import PropTypes from "prop-types";
import ArrowDownIcon from "./icons/ArrowDownIconSvg";
import ClickAwayListener from "react-click-away-listener";
import {
  Divider,
  DropDownContainer,
  ErrorMessage,
  formattedDefaultData,
  Icon,
  Inner,
  ListItem,
  Placeholder,
  Select,
  StyledPaper,
  Wrapper,
} from "./SelectComp.style";
import isEmptyObj from "../../../helpers/objectIsEmpty";

const SelectComp = ({
  fullWidth,
  width,
  options,
  placeholder,
  errorMessageText,
  hasError,
  getValue,
  label,
  elevation,
  defaultLabel,
  defaultValue,
  initialValue,
}) => {
  
  const data = initialValue;
  const [selectedVal, setSelectedVal] = React.useState(data);
  const [selectOpen, setSelectOpen] = React.useState(false);
  React.useEffect(() => {
    if(data !== ''){
      setSelectedVal(data)
    }
    if (!isEmptyObj(defaultValue) && defaultValue) {
      setSelectedVal(defaultValue.value);
    }
  }, []);
  const clickedListHandler = (e) => {
    const tempOption = options.find(
      (option) => option.value == e.target.getAttribute("id")
    );
    getValue(tempOption);
    const { value } = tempOption;

    setSelectOpen(false);
    setSelectedVal(value);
  };

  return (
    <ClickAwayListener
      onClickAway={(e) => {
        setSelectOpen(false);
      }}
    >
      <Wrapper
        onClick={(e) => setSelectOpen((prevState) => !prevState)}
        width={fullWidth ? "100%" : width}
      >
        {defaultLabel ? (
          <>{label}</>
        ) : (
          <span style={{ fontSize: "0.8rem" }}>{label}</span>
        )}
        <StyledPaper
          error={+hasError}
          type="select"
          selectopen={+selectOpen}
          style={{ cursor: "pointer" }}
          elevation={elevation}
        >
          <Select type="select">
            {selectedVal.length === 0 && (
              <Placeholder>{placeholder}</Placeholder>
            )}
            {options.find((option) =>{
              return (option.value === selectedVal)}
            )?.label}
          </Select>
          <Icon type="select" open={+selectOpen}>
            <ArrowDownIcon />
          </Icon>
        </StyledPaper>

        {hasError && <ErrorMessage>{errorMessageText}</ErrorMessage>}
        {selectOpen && (
          <DropDownContainer onClick={(e) => e.stopPropagation()} type="select">
            <Inner>
              {options.map((option, index) => (
                <React.Fragment key={index}>
                  <ListItem
                    onClick={clickedListHandler}
                    type="drop-down"
                    id={option.value}
                  >
                    {option.label}
                  </ListItem>
                  <Divider>&nbsp;</Divider>
                </React.Fragment>
              ))}
            </Inner>
          </DropDownContainer>
        )}
      </Wrapper>
    </ClickAwayListener>
  );
};

SelectComp.propTypes = {
  fullWidth: PropTypes.bool,
  options: PropTypes.array,
  width: PropTypes.string,
  placeholder: PropTypes.string,
  errorMessageText: PropTypes.string,
  hasError: PropTypes.bool,
  getValue: PropTypes.func,
  elevation: PropTypes.number,
  defaultLabel: PropTypes.bool,
  initialValue: PropTypes.string,
};

SelectComp.defaultProps = {
  fullWidth: false,
  width: "30rem",
  options: formattedDefaultData,
  placeholder: "",
  errorMessageText: "Field is required!",
  hasError: false,
  defaultValue: {},
  label: "label",
  initialValue: "",
  getValue: (e) => {
    return;
  },
  elevation: 1,
  defaultLabel: true,
};

export default SelectComp;

import * as React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import StackComp from "../Stack/Stack";
import IconButton from "@mui/material/IconButton";
import { StyledListBtn, Wrapper, StyledListItem } from "./List.style.js";
import PropTypes from "prop-types";
import defaultProps from "./defaultProps.js";

function BasicList({
  secondaryIcon,
  secondaryAction,
  items,
  height,
  selectItem,
}) {
  const [selected, setSelected] = React.useState({});

  React.useEffect(() => {
    selectItem(selected);
  }, [selected, selectItem]);
  return (
    <Wrapper height={height}>
      <nav aria-label="main mailbox folders">
        <List
          sx={{
            "& *": {
              fontSize: "13px",
            },
          }}
        >
          {items.map((item, index) => {
            return (
              <ListItem key={index} disablePadding>
                <StyledListBtn
                  onClick={(e) => {
                    setSelected(item);
                  }}
                  selected={selected.name === item.name}
                >
                  <StackComp
                    direction="row"
                    alignItems="center"
                    justifyContent="space-between"
                    sx={{ width: "100%" }}
                  >
                    <StyledListItem primary={item.name} />
                    {secondaryIcon && selected.name === item.name && (
                      <IconButton
                        onClick={(e) => {
                          e.stopPropagation();
                          secondaryAction(selected);
                        }}
                      >
                        {secondaryIcon}
                      </IconButton>
                    )}
                  </StackComp>
                </StyledListBtn>
              </ListItem>
            );
          })}
        </List>
      </nav>
    </Wrapper>
  );
}

BasicList.propTypes = {
  items: PropTypes.array,
  height: PropTypes.string,
  selectItem: PropTypes.func,
  secondaryAction: PropTypes.func,
};
BasicList.defaultProps = {
  ...defaultProps,
};

export default BasicList;

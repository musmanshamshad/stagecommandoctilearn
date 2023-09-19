import React from "react";
import PropTypes from "prop-types";
import Triangle from "./icons/TriangleSvg";
import {
  Wrapper,
  TriangleContainer,
  List,
  Item,
  IconContainer,
  ListItem
} from "./DropDownMenu.style";

const DropDownMenu = ({ list, selectItem }) => {
  return (
    <Wrapper>
      <TriangleContainer>
        <Triangle />
      </TriangleContainer>
      <List>
        {list.map(({ name, icon }, index) => (
          <ListItem >
            <Item onClick={() => selectItem(name)} key={index}>
              <IconContainer>{icon}</IconContainer>
              <span>{name}</span>
            </Item>
          </ListItem>
        ))}
      </List>
    </Wrapper>
  );
};

export default DropDownMenu;

DropDownMenu.propTypes = {
  list: PropTypes.array,
  selectItem: PropTypes.any,
};

DropDownMenu.defaultProps = {
  list: [],
  selectItem: (e) => {return},
};

import React from "react";
import {
  ListSubheader,
  ListItemIcon,
  ListItemText,
  Divider,
  Collapse,
} from "@mui/material";
import DropDownContract from "./icons/DropDownContractSvg";
import DropDownExpand from "./icons/DropDownExpandSvg";
import defaultProps from "./defaultProps.js";
import { StyledItem, StyledListContainer } from "./List.style";
import PropTypes from "prop-types";

const ListItemComp = ({
  nested,
  name,
  label,
  icon,
  childrenElements,
  listItemClickEvent,
  secondary,
  layer,
  type,
  expandAll,
  ...props
}) => {
  React.useEffect(() => {
    forceOpenState(expandAll);
  }, [expandAll]);
  const [open, setOpen] = React.useState(false);
  const forceOpenState = (state) => setOpen(state);
  const [padding, setPadding] = React.useState("0");
  React.useEffect(() => {
    switch (layer) {
      case 1: {
        return setPadding("15.16px");
      }
      case 2: {
        return setPadding("24px");
      }
      case 3: {
        return setPadding("40px");
      }
      default: {
        return setPadding("0");
      }
    }
  }, [layer]);
  return (
    <>
      <StyledItem
        layer={layer}
        padding={padding}
        onClick={(e) => {
          listItemClickEvent({
            name,
            type,
            isExpanded: !open,
            label,
            nested,
            ...props,
          });
          setOpen((prevState) => !prevState);
        }}
      >
        {icon && <ListItemIcon>{icon}</ListItemIcon>}
        <ListItemText
          secondary={secondary ? secondary : null}
          primaryTypographyProps={{
            style: { fontFamily: "HelviticaNue-Bold", overflow: "hidden" },
          }}
        >
          {label ? label : name}
        </ListItemText>
        {nested && (open ? <DropDownContract /> : <DropDownExpand />)}
      </StyledItem>

      {nested && (
        <Collapse in={open} timeout="auto" unmountOnExit>
          <ListComp
            open={expandAll}
            onItemClick={listItemClickEvent}
            listSkeleton={childrenElements}
          />
          {/* <Divider/> */}
        </Collapse>
      )}
    </>
  );
};

const ListComp = ({
  heading,
  listSkeleton,
  onItemClick,
  selection,
  open,
  setOpen,
}) => {
  return (
    <>
      <StyledListContainer
        component="nav"
        aria-labelledby="nested-list-subheader"
        subheader={
          heading !== "" && (
            <ListSubheader component="div" id="nested-list-subheader">
              {heading}
            </ListSubheader>
          )
        }
      >
        {listSkeleton.map((item, index) => {
          return (
            <React.Fragment key={index}>
              {item.name === "divider" ? (
                <Divider />
              ) : (
                <ListItemComp
                  expandAll={open}
                  setOpen={setOpen}
                  listItemClickEvent={onItemClick}
                  nested={item.childrenElements}
                  {...item}
                />
              )}
            </React.Fragment>
          );
        })}
      </StyledListContainer>
      {/* <Divider /> */}
    </>
  );
};

export default ListComp;

ListComp.propTypes = {
  heading: PropTypes.string,
  listSkeleton: PropTypes.array,
  onItemClick: PropTypes.func,
};
ListComp.defaultProps = {
  ...defaultProps,
};

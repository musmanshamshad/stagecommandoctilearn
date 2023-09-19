import React from "react";
import DownIcon from "./icons/DownSvg";
import Stack from "../../../UI/Stack/Stack";
import { IconButton, ListItemButton } from "@mui/material";
import ClickAwayListener from "react-click-away-listener";
import { List, ListItem, Span } from "./TransparentSelect.style.js";
import constants from "./../../../../config/constants";

const TransparentSelect = ({ getSelected, title, controler, iconColor }) => {
  const [open, setOpen] = React.useState(false);
  const [selected, setSelected] = React.useState(null);
  return (
    <ClickAwayListener
      onClickAway={(e) => {
        return setOpen(false);
      }}
    >
      <Stack direction="row" sx={{ position: "relative" }}>
        <Stack
          sx={{ cursor: "pointer" }}
          onClick={(e) => setOpen((prevState) => !prevState)}
          direction="row"
          alignItems="center"
          justifyContent="center"
          space={1}
        >
          <ListItemButton sx={{ borderRadius: "15px" }}>
            <Span>{selected ? selected : title}</Span>

            <IconButton>
              <DownIcon iconColor={iconColor} />
            </IconButton>
          </ListItemButton>
        </Stack>
        {open && (
          <List>
            {controler.map((value, index) => (
              <ListItem key={index}>
                <ListItemButton
                  onClick={(e) => {
                    setSelected(value);
                    setOpen(false);
                    getSelected(value);
                  }}
                  sx={{ padding: "19px 35px 19px 20px" }}
                >
                  {value}
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        )}
      </Stack>
    </ClickAwayListener>
  );
};

TransparentSelect.defaultProps = {
  getSelected: (e) => {
    return;
  },
  title: "Select Dates",
  controler: constants.timeInterval,
  iconColor: "#3E2850",
};

export default TransparentSelect;

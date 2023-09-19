import * as React from "react";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";

export default function BasicMenu({ children, sideEffects, listItems }) {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div style={{ position: "relative" }}>
      <span
        id="basic-button"
        aria-controls={open ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
        style={{
          background: "transparent",
          outline: "none",
          border: "none",
        }}
      >
        {children}
      </span>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
          sx: {
            color: "white",
          },
        }}
        anchorOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        PaperProps={{
          sx: {
            width: "100px",
            minHeight: "60px",
            background: "#251038",
            zIndex: 10000,
            borderRadius: "16px",
            filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
            "&::after": {
              position: "absolute",
              top: "-12px",
              right: "20px",
              content: '""',
              background: "#251038",
              width: "28px",
              height: "15px",
              clipPath: "polygon(50% 0%, 0% 100%, 100% 100%)",
            },
          },
        }}
      >
        {listItems.map((item, index) => (
          <MenuItem
            sx={{ color: "white" }}
            key={index}
            onClick={(e) => {
              e.preventDefault();
              handleClose(e);
              sideEffects(item);
            }}
          >
            {item.icon && item.icon}&nbsp;{item.label}
          </MenuItem>
        ))}
      </Menu>
    </div>
  );
}

BasicMenu.defaultProps = {
  sideEffects: (e) => {
    return;
  },
  listItems: [
    {
      label: "First",
      id: "first",
    },
    {
      label: "Second",
      test: "hello",
    },
  ],
};

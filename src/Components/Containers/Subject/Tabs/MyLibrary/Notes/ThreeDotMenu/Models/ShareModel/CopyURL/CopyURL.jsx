import React from "react";
import IconButton from "@mui/material/IconButton";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputAdornment from "@mui/material/InputAdornment";
import FormControl from "@mui/material/FormControl";
import CopySvg from "./../../../../../Flashcards/icons/CopySvg";
import palette from "./../../../../../../../../../../config/palette.js";
import LinkSvg from "./../../../../../Flashcards/icons/LinkSvg";
import ToolTips from "./../../../../../../../../../UI/Tooltip/ToolTip";

const CopyURL = () => {

  let values = "https://www.figma.com/file/ICuhM9hJBxw/Octilearn";
  const [copy, setCopy] = React.useState("Copy Link");
  const handleEmailLink = () => {
    navigator.clipboard.writeText(values);
    setCopy("Copied");
  };

  return (
    <div>
      <FormControl sx={{ mt: 5 }} variant="outlined" fullWidth>
        <OutlinedInput
          id="outlined-adornment-password"
          type="text"
          value={values}
          fullwidth
          disabled
          endAdornment={
            <InputAdornment position="end">
              <ToolTips
                backgroundColor={palette.colors.secondaryModified}
                arrow={false}
                color={palette.colors.lightColor}
                title={copy}
              >
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleEmailLink}
                  edge="end"
                >
                  <CopySvg />
                </IconButton>
              </ToolTips>
            </InputAdornment>
          }
          startAdornment={
            <InputAdornment position="start">
              <LinkSvg />
            </InputAdornment>
          }
        />
      </FormControl>
    </div>
  );
};

export default CopyURL;

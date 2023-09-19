import React from "react";
import IconButton from "./../IconButton/IconButton";
import {Input, Label} from './UploadIcon.style';

const UploadIcon = ({ icon }) => {
  return (
    <Label htmlFor="icon-button-file">
      <IconButton>
        <Input accept="image/*" id="icon-button-file" type="file" />
        {icon}
      </IconButton>
    </Label>
  );
};

export default UploadIcon;

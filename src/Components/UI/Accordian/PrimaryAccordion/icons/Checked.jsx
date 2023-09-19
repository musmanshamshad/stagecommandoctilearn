import React from "react";
import palette from "../../../../../config/palette";
import pngFile from "./../assets/checkedImg.png";

const Checked = () => {
  return (
    <div
      style={{
        paddingTop: "0.3rem",
        paddingRight: "2rem",
        paddingLeft: "0.5rem",
      }}
    >
      <img src={pngFile} alt="learning-objective-icon" />
    </div>
  );
};

export default Checked;
Checked.defaultProps = {
  // color: "#ADB4C5",
  color: palette.colors.primaryModified,
};

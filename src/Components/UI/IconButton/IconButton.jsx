import React from "react";
import { StyledBtn } from "./IconButton.style";

const IconButtonComp = ({ children, ...props }) => {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        width: "25px",
        height: "25px",
      }}
    >
      <StyledBtn {...props}>{children}</StyledBtn>
    </div>
  );
};

export default IconButtonComp;

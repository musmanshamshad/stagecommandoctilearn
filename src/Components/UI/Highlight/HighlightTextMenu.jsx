import React from "react";
import IconButton from "@mui/material/IconButton";
import AutoFixOffIcon from "@mui/icons-material/AutoFixOff";
const HighlightTextMenu = ({ handleChangeColor }) => {
  return (
    <div>
      <IconButton
        sx={{ padding: "6px" }}
        onClick={() => {
          handleChangeColor("green");
        }}
      >
        <div
          style={{
            width: "15px",
            height: "15px",
            background: "green",
            border: "2px solid white",
            borderRadius: "50px",
          }}
        ></div>
      </IconButton>
      <IconButton
        sx={{ padding: "6px" }}
        onClick={() => {
          handleChangeColor("#f44336");
        }}
      >
        <div
          style={{
            width: "15px",
            height: "15px",
            background: "#f44336",
            border: "2px solid white",
            borderRadius: "50px",
          }}
        ></div>
      </IconButton>
      <IconButton
        sx={{ padding: "6px" }}
        onClick={() => {
          handleChangeColor("#00bcd4");
        }}
      >
        <div
          style={{
            width: "15px",
            height: "15px",
            background: "#00bcd4",
            border: "2px solid white",
            borderRadius: "50px",
          }}
        ></div>
      </IconButton>
      <IconButton
        sx={{ padding: "6px" }}
        onClick={() => {
          handleChangeColor("#9c27b0");
        }}
      >
        <div
          style={{
            width: "15px",
            height: "15px",
            background: "#9c27b0",
            border: "2px solid white",
            borderRadius: "50px",
          }}
        ></div>
      </IconButton>
      <IconButton
        sx={{ padding: "6px" }}
        onClick={() => {
          handleChangeColor("#795548");
        }}
      >
        <div
          style={{
            width: "15px",
            height: "15px",
            background: "#795548",
            border: "2px solid white",
            borderRadius: "50px",
          }}
        ></div>
      </IconButton>
      <IconButton
        sx={{ padding: "6px" }}
        onClick={() => {
          handleChangeColor("#ffc107");
        }}
      >
        <div
          style={{
            width: "15px",
            height: "15px",
            background: "#ffc107",
            border: "2px solid white",
            borderRadius: "50px",
          }}
        ></div>
      </IconButton>
      <IconButton
        sx={{ padding: "6px" }}
        onClick={() => {
          handleChangeColor("#cddc39");
        }}
      >
        <div
          style={{
            width: "15px",
            height: "15px",
            background: "#cddc39",
            border: "2px solid white",
            borderRadius: "50px",
          }}
        ></div>
      </IconButton>
      <IconButton
        sx={{ padding: "6px" }}
        onClick={() => {
          handleChangeColor("#03a9f4");
        }}
      >
        <div
          style={{
            width: "15px",
            height: "15px",
            background: "#03a9f4",
            border: "2px solid white",
            borderRadius: "50px",
          }}
        ></div>
      </IconButton>
      <IconButton
        sx={{ padding: "6px" }}
        onClick={() => {
          handleChangeColor("white");
        }}
      >
        <AutoFixOffIcon sx={{ fill: "white" }} />
      </IconButton>
    </div>
  );
};

export default HighlightTextMenu;

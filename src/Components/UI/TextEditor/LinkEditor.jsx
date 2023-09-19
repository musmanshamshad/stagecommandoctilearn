import PropTypes from "prop-types";
import React from "react";
import { MdDone } from "react-icons/md";
import { IconButton } from "@mui/material";
import { Editor } from "slate";
import checkUrl from "./utils/checkUrl";
import matchesHttpOrHttps from "./utils/matchesHttpOrHttps";
const containerStyle = {
  padding: "0.2rem 0.6rem",
  background: "#fff",
  borderRadius: "5px",
  height: "40px",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
};
const inputStyle = {
  border: "none",
  height: "100%",
  background: "transparent",
  outline: "none",
  flexGrow: "1",
};
const btnStyle = { borderRadius: "5px", height: "100%", background: "#f7f7f7" };
const LinkEditor = ({ editor, setUrl }) => {
  const [value, setValue] = React.useState("");
  const urlSendHandler = () => {
    const valueIsURL = checkUrl(value);
    if (!valueIsURL) {
      return window.alert("The provided url is invalid!");
    }
    const hasHttp = matchesHttpOrHttps(value);
    let link;
    if (!hasHttp) {
      link = `http://${value}`;
    } else {
      link = value;
    }
    const [linkNode, path] = Editor.above(editor, {
      match: (n) => n.type === "link",
    });
    setUrl({ linkNode, path, link });
    setValue("");
  };

  return (
    <div
      style={containerStyle}
      onKeyDown={({ code }) => {
        if (code === "Enter") urlSendHandler();
      }}
    >
      <input
        style={inputStyle}
        id="addLink"
        placeholder="Enter URL"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <IconButton style={btnStyle} onClick={() => urlSendHandler()}>
        <MdDone />
      </IconButton>
    </div>
  );
};

LinkEditor.propTypes = {
  setUrl: PropTypes.func.isRequired,
};

export default LinkEditor;

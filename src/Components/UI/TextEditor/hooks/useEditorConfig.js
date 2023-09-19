import React from "react";
import { DefaultElement } from "slate-react";
import { StaticMathField } from "react-mathquill";
import { toggleStyle } from "../utils/EditorUtils";
import Link from "./../Link";

const renderElement = (props) => {
  const { element, children, attributes } = props;
  switch (element.type) {
    case "paragraph":
      return <p {...attributes}>{children}</p>;
    case "h1":
      return <h1 {...attributes}>{children}</h1>;
    case "h2":
      return <h2 {...attributes}>{children}</h2>;
    case "h3":
      return <h3 {...attributes}>{children}</h3>;
    case "h4":
      return <h4 {...attributes}>{children}</h4>;
    case "link":
      return <Link {...props} url={element.url} />;
    case "align-left":
      return (
        <div {...attributes} style={{ textAlign: "left" }}>
          {children}
        </div>
      );
    case "align-center":
      return (
        <div {...attributes} style={{ textAlign: "center" }}>
          {children}
        </div>
      );

    case "list-item":
      return <li {...attributes}>{children}</li>;
    case "orderedList":
      return (
        <ol type="1" {...attributes}>
          {children}
        </ol>
      );
    case "unorderedList":
      return <ul {...attributes}>{children}</ul>;
    case "align-right":
      return (
        <div {...attributes} style={{ textAlign: "right" }}>
          {children}
        </div>
      );

    case "katex":
      return (
        <React.Fragment {...attributes}>
          <span style={{ userSelect: "none" }}>
            <StaticMathField
              style={{ userSelect: "none" }}
            >{` ${element.math}`}</StaticMathField>
          </span>
          {children}
        </React.Fragment>
      );
    default:
      return <DefaultElement {...props} />;
  }
};

const renderLeaf = (props) => {
  const { attributes, children, leaf } = props;
  let inlineType = <>{children}</>;

  if (leaf.bold) {
    inlineType = <strong>{inlineType}</strong>;
  }

  if (leaf.code) {
    inlineType = <code>{inlineType}</code>;
  }

  if (leaf.italic) {
    inlineType = <em>{inlineType}</em>;
  }

  if (leaf.underline) {
    inlineType = <u>{inlineType}</u>;
  }

  if (leaf["strike-through"]) {
    inlineType = (
      <span style={{ textDecoration: "line-through" }}>{inlineType}</span>
    );
  }
  if (leaf["align-center"]) {
    inlineType = <div style={{ textAlign: "center" }}>{inlineType}</div>;
  }
  if (leaf["align-left"]) {
    inlineType = <div style={{ textAlign: "left" }}>{inlineType}</div>;
  }
  if (leaf["align-right"]) {
    inlineType = <div style={{ textAlign: "right" }}>{inlineType}</div>;
  }
  return <span {...attributes}>{inlineType}</span>;
};

const KeyBindings = {
  onKeyDown: (editor, { key, ctrlKey, metaKey }) => {
    if (ctrlKey || metaKey) {
      if (key === "b") {
        toggleStyle(editor, "bold");
        return;
      }
      if (key === "i") {
        toggleStyle(editor, "italic");
        return;
      }
      if (key === "c") {
        toggleStyle(editor, "code");
        return;
      }
      if (key === "u") {
        toggleStyle(editor, "underline");
        return;
      }
    }
  },
};

const useEditorConfig = (editor) => {
  editor.isInline = (element) => ["link"].includes(element.type);
  const onKeyDown = React.useCallback(
    (event) => KeyBindings.onKeyDown(editor, event),
    [editor]
  );
  return { renderElement, renderLeaf, onKeyDown };
};

export default useEditorConfig;

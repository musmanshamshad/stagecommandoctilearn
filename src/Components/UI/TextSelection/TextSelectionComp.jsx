import PropTypes from "prop-types";
import React from "react";
import useContextMenu from "./useContextMenu";
import "./styles.css";
import ClickAwayListener from "react-click-away-listener";
import { highlightSelection, uniqueID } from "../List/Utils";
import HighlightAndCommentMenuWrapper from "../Highlight/HighlightAndCommentMenuWrapper";
import Model from "../Modal/Modal";
import HighlightInfoModal from "../../Containers/Subject/Tabs/MyLibrary/Notes/ThreeDotMenu/Models/HighlightInforModal/HighlightInfoModal";

const TextSelectionComp = ({
  children,
  sideEffectsOfCommenting,
  sideEffectsOfHighlighting,
  isHighlightingActive,
  multipleBlocks,
}) => {
  const [comment, setComment] = React.useState();
  const [commentId, setCommentId] = React.useState();
  const [commentRange, setCommentRange] = React.useState();
  const [previousSelection, setPreviousSelection] = React.useState();
  const [openModal, setopenModal] = React.useState(false);
  const [contentAfter, setContentAfter] = React.useState("");
  const [
    positionTopOfHighlightContextMenu,
    setPositionTopOfHighlightContextMenu,
  ] = React.useState();

  const [
    positionLeftOfHighlightContextMenu,
    setPositionLeftOfHighlightContextMenu,
  ] = React.useState();

  const highlightAndCommentMenuWrapperProps = {
    handleChangeColor,
    handleComment,
    setComment,
    comment,
  };

  const { anchorPoint, show, changeShowHandler, handleContextMenu } =
    useContextMenu();

  function convertHtmlStringToNode(str, tagType) {
    var parser = new DOMParser();
    var doc = parser.parseFromString(str, "text/html");
    var div = doc.createElement(tagType);
    div.id = "wrap";

    while (doc.body.firstChild) {
      div.appendChild(doc.body.firstChild);
    }

    doc.body.appendChild(div);

    return doc.getElementsByTagName(tagType)[0];
  }

  function testStringForBlockElements(myString) {
    const charArray = [
      "<div>",
      "<p>",
      "<h1>",
      "<h2>",
      "<h3>",
      "<h4>",
      "<h5>",
      "<h6>",
      "<ul>",
      "<ol>",
      "<pre>",
      "<li>",
    ];
    let result = [];
    charArray.forEach((item) => {
      if (myString.includes(item)) {
        result.push(item);
      }
    });

    if (result.length > 0) {
      return true;
    } else {
      return false;
    }
  }

  function handleChangeColor(color) {
    const nodestest = window.getSelection().getRangeAt(0).cloneContents();

    const result = Array.prototype.reduce.call(
      nodestest.childNodes,
      (result, node) => result + (node.outerHTML || node.nodeValue),
      ""
    );
    if (!multipleBlocks && testStringForBlockElements(result)) {
      setopenModal(true);
      return;
    } else {
      highlightSelection(color);
    }

    changeShowHandler(false);
    sideEffectsOfHighlighting();
  }

  function handleComment() {
    const data = {
      commentId,
      comment,
      outerHtml: contentAfter,
    };

    sideEffectsOfCommenting(data);
    changeShowHandler(false);
  }

  document.onmouseup = () => {
    const ID = uniqueID();
    if (!window.getSelection().isCollapsed) {
      var range = window.getSelection().getRangeAt(0);
      if (commentRange !== range) {
        setCommentRange(range);

        const selection = window.getSelection().toString();

        if (selection === "") {
          return;
        } else {
          const htmlNode = document.createElement("span");
          htmlNode.setAttribute("id", ID);
          htmlNode.style.position = "absolute";
          range.insertNode(htmlNode);
          setCommentId(ID);
        }
      }
    }
  };

  const containerRef = React.useRef(null);
  const childRef = React.useRef(null);

  React.useEffect(() => {
    setContentAfter(childRef.current.outerHTML);
  }, [commentRange]);

  const setTopPositionOfContextMenu = () => {
    const distanceFromTopOfDocument =
      containerRef.current.getBoundingClientRect().top;
    const distanceOfElementFromWindowTop =
      window.pageYOffset + distanceFromTopOfDocument;
    const distanceFromParentToHighlight =
      anchorPoint.y - distanceOfElementFromWindowTop;
    setPositionTopOfHighlightContextMenu(distanceFromParentToHighlight);
  };

  const setLeftPositionOfContextMenu = () => {
    const distanceFromLeftOfDocument =
      containerRef.current.getBoundingClientRect().left;
    const distanceOfElementFromWindowLeft =
      window.pageXOffset + distanceFromLeftOfDocument;
    const distanceFromParentToHighlight =
      anchorPoint.x - distanceOfElementFromWindowLeft;
    setPositionLeftOfHighlightContextMenu(distanceFromParentToHighlight);
  };

  React.useEffect(() => {
    if (containerRef) {
      const selectionIsCollapsed = window.getSelection().isCollapsed;
      if (!selectionIsCollapsed) {
        setTopPositionOfContextMenu();
        setLeftPositionOfContextMenu();
      }
    }
  }, [anchorPoint]);

  function closeMenu() {
    if (show) {
      const selectionIsCollapsed = window.getSelection().isCollapsed;
      if (selectionIsCollapsed) {
        changeShowHandler(false);
        return;
      }
    }
  }

  return (
    <div
      ref={containerRef}
      style={{ position: "relative" }}
      onMouseUp={(e) => {
        const Newselection = window.getSelection().toString();

        if (Newselection !== previousSelection) {
          setPreviousSelection(Newselection);
          if (isHighlightingActive) {
            const selectionIsCollapsed = window.getSelection().isCollapsed;
            if (selectionIsCollapsed) {
              return;
            }
            handleContextMenu(e);
          }
        }
      }}
    >
      <ClickAwayListener onClickAway={closeMenu}>
        {show ? (
          <div
            style={{
              position: "absolute",
              top: positionTopOfHighlightContextMenu,
              left: positionLeftOfHighlightContextMenu,
            }}
          >
            <HighlightAndCommentMenuWrapper
              {...highlightAndCommentMenuWrapperProps}
            />
          </div>
        ) : (
          <></>
        )}
      </ClickAwayListener>
      <Model open={openModal} setOpen={setopenModal}>
        <HighlightInfoModal setOpen={setopenModal} />
      </Model>
      <div ref={childRef}>{children}</div>
    </div>
  );
};

TextSelectionComp.propTypes = {
  children: PropTypes.any,
  multipleBlocks: PropTypes.bool,
  isHighlightingActive: PropTypes.any,
  sideEffectsOfHighlighting: PropTypes.func,
};

TextSelectionComp.defaultProps = {
  children: <>No children provided</>,
  isHighlightingActive: true,
  multipleBlocks: false,
  sideEffectsOfHighlighting: (e) => {
    return;
  },
};

export default TextSelectionComp;

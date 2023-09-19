import PropTypes from "prop-types";
import React from "react";
import PickColor from "./icons/PickColorSvg";
import Chat from "./icons/ChatSvg";
import pallete from "./../../../config/palette";
import ClickAwayListener from "react-click-away-listener";
import IconButton from "@mui/material/IconButton";

import {
  ContentPickerWithBefore,
  ContentFlexStyle,
  ColorBox,
  CommentPicker,
  CommentWrapper,
  ColorPickerWrapper,
  ContentInput,
  EditorWrapper,
  EditorStyles,
  Divider,
  Wrapper,
  Text,
} from "./SelectableText.style";

const CommentPickerBox = ({ getValue }) => {
  const [value, setValue] = React.useState("");
  React.useEffect(() => {
    getValue(value);

    return () => {
      return;
    };
  }, [value]);
  return (
    <>
      <CommentPicker onClick={(e) => e.stopPropagation()}>
        <ContentInput
          value={value}
          onChange={(e) => setValue(e.target.value)}
          placeholder="Add a comment"
        />
      </CommentPicker>
    </>
  );
};

const ColorPickerBox = ({ getColor }) => {
  const setColorHandler = (event, color) => {
    getColor(`rgb(${color})`);
  };
  return (
    <>
      <ContentPickerWithBefore onClick={(e) => e.stopPropagation()}>
        <ContentFlexStyle>
          {pallete.colors.map((color, index) => (
            <ColorBox key={index} variant={color}>
              <IconButton
                onClick={(e) => setColorHandler(e, color)}
                sx={{ width: "16px", height: "16px" }}
              >
                &nbsp;
              </IconButton>
            </ColorBox>
          ))}
        </ContentFlexStyle>
      </ContentPickerWithBefore>
    </>
  );
};

const Comment = ({ selection, setSelection, getColor, getValue }) => {
  const openCommentHandler = (e) => {
    if (selection !== "comment") {
      setSelection("comment");
    } else setSelection("");
  };
  return (
    <CommentWrapper onClick={openCommentHandler}>
      {selection === "comment" && (
        <CommentPickerBox getValue={getValue} getColor={getColor} />
      )}
      <Chat />
    </CommentWrapper>
  );
};

const ColorPicker = ({ selection, setSelection, getColor }) => {
  const openHighlightHandler = (e) => {
    if (selection !== "highlight") {
      setSelection("highlight");
    } else setSelection("");
  };
  return (
    <ColorPickerWrapper onClick={openHighlightHandler}>
      {selection === "highlight" && <ColorPickerBox getColor={getColor} />}
      <PickColor />
    </ColorPickerWrapper>
  );
};

const EditorComp = ({ getColor, reset, getValue }) => {
  const [selection, setSelection] = React.useState("");
  const [show, setShow] = React.useState(false);
  const props = {
    show,
    setShow,
    selection,
    setSelection,

    reset,
  };
  return (
    <EditorWrapper onClick={(e) => e.stopPropagation()}>
      <EditorStyles>
        <ColorPicker getColor={getColor} {...props} />
        <Divider />
        <Comment {...props} getValue={getValue} />
      </EditorStyles>
    </EditorWrapper>
  );
};

const SelectableText = ({ data, getData }) => {
  const [activeSentence, setActiveSentence] = React.useState({});
  const [controller, setController] = React.useState([]);

  React.useEffect(() => {
    getData(controller);
    return () => {
      return;
    };
  }, [controller]);

  const resetActiveSentence = () => {
    setActiveSentence({});
  };

  React.useEffect(() => {
    let temp = data.map((each, index) => {
      return {
        id: index,
        text: each.value,
        highlighted: "",
        comment: "",
      };
    });
    setController(temp);
    return () => {
      return;
    };
  }, []);

  const clickTextHandler = (event, sentence) => {
    setActiveSentence(activeSentence.id === sentence.id ? {} : sentence);
  };

  const getColor = (e) => {
    let tempController = [...controller];
    let toChange = tempController.find((each) => each.id === activeSentence.id);
    toChange.highlighted = e;
    setController(tempController);
    setTimeout(() => {
      setActiveSentence({});
    }, 300);
  };
  const getCommentHandler = (event, sentence) => {
    let tempController = [...controller];
    let toChange = tempController.find((each) => each.id === activeSentence.id);
    toChange.comment = event;
    setController(tempController);
  };
  return (
    <ClickAwayListener onClickAway={(e) => setActiveSentence({})}>
      <Wrapper
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        {controller.map((each, index) => (
          <Text
            bg={each.highlighted}
            isselected={each.id === activeSentence.id}
            key={index}
            onKeyUp={(e) => {
              if (e.key === "Escape") {
                setActiveSentence({});
              }
            }}
            onClick={(e) => clickTextHandler(e, each)}
          >
            {each.id === activeSentence.id && (
              <EditorComp
                getValue={(e) => getCommentHandler(e, each)}
                reset={resetActiveSentence}
                getColor={(e) => getColor(e)}
              />
            )}
            {/* {index + 1}. */}
            {each.text}
          </Text>
        ))}
      </Wrapper>
    </ClickAwayListener>
  );
};

SelectableText.propTypes = {
  data: PropTypes.shape({
    map: PropTypes.func,
  }),
  getData: PropTypes.func,
};

export default SelectableText;

SelectableText.defaultProps = {
  getData: (e) => {
    return;
  },
  data: [
    {
      value: "first sentence",
    },
    {
      value: "second sentence",
    },
  ],
};

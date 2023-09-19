import PropTypes from "prop-types";
import React, { useMemo } from "react";
import { createEditor, Transforms } from "slate";
import { useEditorConfig, useSelection } from "./hooks";
import { Slate, Editable, withReact } from "slate-react";
import LinkEditor from "./LinkEditor";
import {
  getActiveStyles,
  toggleStyle,
  toggleBlockType,
  toggleLinkAtSelection,
  isLinkNodeAtSelection,
} from "./utils/EditorUtils";
import QuillEditor from "./QuillEditor/QuillEditor";
import {
  Container,
  ContentContainer,
  Divider,
  Toolbar,
  IconsContainer,
  RightContainer,
  SendButton,
  Button,
} from "./TextEditor.style";
import serialize from "./utils/serialize";
import { TbMathFunction } from "react-icons/tb";
import DialogueBox from "./DialogueBox";
import Select from "./Select";
import Send from "./icons/Send";
import documentInit from "./utils/InitDoc";
import paragraphStyles from "./utils/paragraphStyles";
import inlineStyles from "./utils/inlineStyles";
import blockStyles from "./utils/blockStyles";
import { withHistory } from "slate-history";
import TinnyEditor from "../TinnyEditor";

const EditorComp = ({
  getContent,
  placeholder,
  width,
  fullWidth,
  includeSendBtn,
  defaultContent,
}) => {
  const editorRef = React.useRef(null);

  const withEditableVoids = (editor) => {
    const { isVoid } = editor;

    editor.isVoid = (element) => {
      return element.type === "katex" ? true : isVoid(element);
    };

    return editor;
  };

  const editor = useMemo(
    () => withEditableVoids(withHistory(withReact(createEditor()))),
    []
  );

  const { selection, setSelection } = useSelection(editor);

  const { renderElement, renderLeaf, onKeyDown } = useEditorConfig(editor);
  const [document, updateDocument] = React.useState(defaultContent);
  const onChangeHandler = React.useCallback(
    (document) => {
      updateDocument(document);
      setSelection(editor.selection);
    },
    [editor.selection, updateDocument, setSelection]
  );

  const onBlockTypeChange = React.useCallback(
    (targetType) => {
      if (targetType === "multiple") {
        return;
      }
      toggleBlockType(editor, targetType);
    },
    [editor]
  );
  const [openTexField, setOpenTexField] = React.useState(false);
  const texFieldHandler = (e) => {
    setOpenTexField((prevState) => !prevState);
  };

  const contentHandler = React.useCallback(
    (e) => {
      const arrNodes = document.map((node) => serialize(node));
      getContent({ original: document, htmlForm: arrNodes });
    },
    [document, getContent]
  );

  React.useEffect(() => {
    if (!includeSendBtn) {
      contentHandler("");
    }
  }, [document, contentHandler, includeSendBtn]);

  return (
    <>
      <Container ref={editorRef} fullWidth={fullWidth} width={width}>
        <ContentContainer>
          <Slate editor={editor} value={document} onChange={onChangeHandler}>
            <Editable
              onKeyDown={onKeyDown}
              renderLeaf={renderLeaf}
              renderElement={renderElement}
              placeholder={placeholder}
            />
          </Slate>
        </ContentContainer>
        <Divider>&nbsp;</Divider>
        <Toolbar>
          <IconsContainer>
            {inlineStyles.map((each) => {
              if (each.style === "link") {
                return (
                  <InlineButton
                    isActive={isLinkNodeAtSelection(editor, editor.selection)}
                    key={each.style}
                    label={each.label}
                    onMouseDown={(event) => {
                      event.preventDefault();
                      toggleLinkAtSelection(editor);
                    }}
                  />
                );
              }
              return (
                <InlineButton
                  isActive={getActiveStyles(editor).has(each.style)}
                  key={each.style}
                  label={each.label}
                  onMouseDown={(event) => {
                    event.preventDefault();
                    toggleStyle(editor, each.style);
                  }}
                />
              );
            })}
            <Select
              options={paragraphStyles}
              defaultLabel="Select Paragraph"
              getVal={(e) => onBlockTypeChange(e.value)}
            />
            {blockStyles.map(({ style, label }) => {
              return (
                <InlineButton
                  onMouseDown={(event) => {
                    event.preventDefault();
                    onBlockTypeChange(style);
                  }}
                  label={label}
                  key={style}
                />
              );
            })}
            <InlineButton
              onMouseDown={() => setOpenTexField(true)}
              label={<TbMathFunction />}
            />
            {isLinkNodeAtSelection(editor, selection) ? (
              <LinkEditor
                editor={editor}
                setUrl={(e) => {
                  Transforms.setNodes(editor, { url: e.link }, { at: e.path });
                }}
              />
            ) : null}
          </IconsContainer>
          <RightContainer>
            {includeSendBtn && (
              <SendButton
                onClick={(e) => {
                  contentHandler(e);
                }}
              >
                <Send />
              </SendButton>
            )}
          </RightContainer>
        </Toolbar>
      </Container>
      <DialogueBox
        onBlockTypeChange={onBlockTypeChange}
        triggerClose={() => setOpenTexField(false)}
        editor={editor}
        open={openTexField}
        setOpen={texFieldHandler}
      />
    </>
  );
};

EditorComp.propTypes = {
  getContent: PropTypes.any,
};

EditorComp.defaultProps = {
  getContent: (e) => {
    return;
  },
  placeholder: "Write something...",
  width: "90%%",
  fullWidth: false,
  includeSendBtn: true,
  resetTrigger: "",
  defaultContent: documentInit,
};

const InlineButton = ({ label, isActive, ...props }) => {
  return (
    <Button active={isActive} {...props}>
      {label}
    </Button>
  );
};

const TextEditorComponent = ({ type, ...editorProps }) => {
  switch (type) {
    case "quill": {
      return <TinnyEditor {...editorProps} />;
    }

    case "slate": {
      return <EditorComp {...editorProps} />;
    }

    default: {
      return <>NO TYPE PROVIDED AS PROP, IT SHOULD BE "quill" OR "slate"</>;
    }
  }
};

TextEditorComponent.defaultProps = {
  type: "quill",
};

export default TextEditorComponent;

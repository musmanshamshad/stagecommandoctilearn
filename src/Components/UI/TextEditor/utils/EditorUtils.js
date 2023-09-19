import { Editor, Transforms, Range, Element } from "slate";

export const getActiveStyles = (editor) => {
  return new Set(Object.keys(Editor.marks(editor) ?? {}));
};

export const toggleStyle = (editor, style) => {
  const activeStyles = getActiveStyles(editor);
  if (activeStyles.has(style)) {
    Editor.removeMark(editor, style);
  } else {
    Editor.addMark(editor, style, true);
  }
};

export const getTextBlockStyle = (editor) => {
  const selection = editor.selection;
  if (selection == null) {
    return null;
  }
  // gives the forward-direction points in case the selection was
  // was backwards.
  const [start, end] = Range.edges(selection);

  //path[0] gives us the index of the top-level block.
  let startTopLevelBlockIndex = start.path[0];
  const endTopLevelBlockIndex = end.path[0];

  let blockType = null;
  while (startTopLevelBlockIndex <= endTopLevelBlockIndex) {
    const [node] = Editor.node(editor, [startTopLevelBlockIndex]);
    if (blockType == null) {
      blockType = node.type;
    } else if (blockType !== node.type) {
      return "multiple";
    }
    startTopLevelBlockIndex++;
  }

  return blockType;
};
export const toggleLinkAtSelection = (editor) => {
  if (!isLinkNodeAtSelection(editor, editor.selection)) {
    const isSelectionCollapsed = Range.isCollapsed(editor.selection);
    if (isSelectionCollapsed) {
      Transforms.insertNodes(
        editor,
        {
          type: "link",
          url: "#",
          children: [{ text: "link" }],
        },
        { at: editor.selection }
      );
    } else {
      Transforms.wrapNodes(
        editor,
        { type: "link", url: "#", children: [{ text: "" }] },
        { split: true, at: editor.selection }
      );
    }
  } else {
    Transforms.unwrapNodes(editor, {
      match: (n) => Element.isElement(n) && n.type === "link",
    });
  }
};

export const isLinkNodeAtSelection = (editor, selection) => {
  if (selection == null) {
    return false;
  }

  return (
    Editor.above(editor, {
      at: selection,
      match: (n) => n.type === "link",
    }) != null
  );
};

export const toggleBlockType = (editor, blockType) => {
  const currentBlockType = getTextBlockStyle(editor);
  const changeTo = currentBlockType === blockType ? "paragraph" : blockType;
  Transforms.setNodes(
    editor,
    { type: changeTo },
    // Node filtering options supported here too. We use the same
    // we used with Editor.nodes above.
    { at: editor.selection, match: (n) => Editor.isBlock(editor, n) }
  );
};

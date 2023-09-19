import React from "react";
import areEqual from "deep-equal";
const useSelection = (editor) => {
  const [selection, setSelection] = React.useState(editor.selection);
  const previousSelection = React.useRef(null);
  const setSelectionOptimized = React.useCallback(
    (newSelection) => {
      if (areEqual(selection, newSelection)) {
        return;
      }
      previousSelection.current = selection;
      setSelection(newSelection);
    },
    [setSelection, selection]
  );

  return {
    previousSelection: previousSelection.current,
    selection,
    setSelection: setSelectionOptimized,
  };
};
export default useSelection;

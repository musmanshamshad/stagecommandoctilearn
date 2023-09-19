import React from "react";
import RenderEachNoteBlock from "./RenderEachNoteBlock";
import Alert from "../../../../../UI/Alert/Alert";
import ErrorBoundary from "./../../../../../../Errors/ErrorBoundary";

const NoteContent = ({
  getNotes,
  deleteSingleNote,
  selectedFromList,
  notes,
  course,
  unit,
  setDataLength,
}) => {
  const [groups, setGroups] = React.useState([]);

  const buildCombinations = () => {
    let combinations = [];
    let tempNotes = [...notes];
    tempNotes.forEach((note) => {
      const comboAlreadyExists = combinations.find(
        (obj) =>
          obj.chapterId === note.chapterId && obj.snackId === note.snackId
      );

      if (!comboAlreadyExists) {
        combinations.push({ chapterId: note.chapterId, snackId: note.snackId });
      }
    });
    return combinations;
  };

  const groupedContent = (arr) => {
    const groupedContent = arr.map((each) => {
      let obj = {};
      const groupedNotes = notes.filter(
        (note) =>
          note.chapterId === each.chapterId && note.snackId === each.snackId
      );
      if (each.snackId) {
        const getSnack = course.data.snacks.find(
          (snack) => snack.id === each.snackId
        );

        obj.snackId = getSnack?.id;
        obj.snackName = getSnack?.title;
      }

      const getChap = (obj.chapterId = course.data.chapters.find(
        (chapter) => chapter.id === each.chapterId
      ));

      obj.chapterId = getChap?.id;
      obj.chapterName = getChap?.title;
      obj.content = groupedNotes;

      return obj;
    });
    console.log("groupedContent", groupedContent);
    setDataLength(groupedContent);
    setGroups(groupedContent);
    return true;
  };

  React.useEffect(() => {
    const combos = buildCombinations();
    console.log("combos", combos);
    if (combos.length === 0) {
      // case if no combo found
      setGroups([]);
    } else {
      groupedContent(combos);
    }
  }, [selectedFromList]);

  return (
    <div>
      <ErrorBoundary>
        {groups.length > 0 ? (
          <>
            {groups.map((group, index) => (
              <RenderEachNoteBlock
                getNotes={getNotes}
                deleteSingleNote={deleteSingleNote}
                key={index}
                unit={unit}
                {...group}
              />
            ))}
          </>
        ) : (
          <Alert
            severity={"warning"}
            message="No note against this topic found in library!"
          />
        )}
      </ErrorBoundary>
    </div>
  );
};

export default NoteContent;

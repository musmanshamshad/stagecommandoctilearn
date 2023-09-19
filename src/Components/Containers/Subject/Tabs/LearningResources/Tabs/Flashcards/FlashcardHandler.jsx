import React from "react";
import GridComp from "../../../../../../UI/Grid/Grid";
import EachFlashcardHandler from "./EachFlashcardHandler";

const FlashcardHandler = ({
  course,
  stacksArr,
  clicked,
  selection,
  selectedTag,
  isInLibrary,
  flashcardStatus,
}) => {
  console.log("selection.name", selection);
  return (
    <GridComp container item xs={12} spacing={2}>
      {stacksArr.map((eachStack, index) => {
        return (
          <EachFlashcardHandler
            flashcardStatus={flashcardStatus}
            index={selection.id}
            saveLibraryInfo={course}
            isInLibrary={isInLibrary}
            type={selection.type}
            title={selection.name}
            questions={eachStack.length}
            clicked={clicked}
            questionsArr={eachStack}
            key={index}
          />
        );
      })}
    </GridComp>
  );
};

export default FlashcardHandler;

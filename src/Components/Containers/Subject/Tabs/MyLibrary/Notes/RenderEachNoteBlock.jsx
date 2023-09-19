import React from "react";
import NotesHeading from "./NotesHeading";
import RenderAccordionData from "./RenderAccordionData";

const RenderEachNoteBlock = (props) => {
  return (
    <React.Fragment>
      <NotesHeading
        unit={props.unit.name}
        chapter={props.chapterName}
        snack={props.snackName}
      />
      {props.content.length > 0 && (
        <RenderAccordionData
          getNotes={props.getNotes}
          deleteSingleNote={props.deleteSingleNote}
          content={props.content}
        />
      )}
    </React.Fragment>
  );
};

export default RenderEachNoteBlock;

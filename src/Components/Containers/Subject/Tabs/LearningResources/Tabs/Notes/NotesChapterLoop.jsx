import React from "react";
import TypographyCompo from "../../../../../../UI/Typography/TypographyCompo";
import NotesContent from "./NotesContent";

const NotesChapterLoop = ({
  // dataType,
  id,
  name,
  notes,
  filteredTags,
  selectedTag,
  selectedFromList,
  addToLibraryHandler,
  ...props
}) => {
  return (
    <React.Fragment>
      {notes.length > 0 ? (
        <>
          {/* <TypographyCompo style={{ padding: "2rem 1rem" }} variant="h5">
            {name}
          </TypographyCompo> */}
          {notes.map((note) => {
            return (
              <NotesContent
                // dataType={dataType}
                chapterId={id}
                addToLibraryHandler={(payload, selectedCategory) => {
                  addToLibraryHandler({
                    origin: payload,
                    selectedCategory,
                    content: note,
                    tag: selectedTag,
                  });
                  return true;
                }}
                tags={filteredTags}
                data={note.notes}
                title={note.topic}
                selection={selectedFromList}
                tagSelection={selectedTag}
                name={name}
              />
            );
          })}
        </>
      ) : null}
    </React.Fragment>
  );
};

export default NotesChapterLoop;
/**
 * 
 *   <NotesContent
                            chapterId={chapterId}
                            addToLibraryHandler={(
                              payload,
                              selectedCategory
                            ) => {
                              addToLibraryHandler({
                                origin: payload,
                                selectedCategory,
                                content: data,
                                tag: selectedTag,
                              });
                            }}
                            tags={filteredTags}
                            data={data.notes}
                            title={data.topic}
                            selection={selectedFromList}
                            tagSelection={selectedTag}
                          />
 */

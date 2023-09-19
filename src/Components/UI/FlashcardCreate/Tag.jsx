import React from "react";
import SelectComp from "../Select/SelectComp";

const Tag = ({ getTagHandler, tags, selectedTag }) => {
  return (
    <div>
      {tags.length > 0 && (
        <SelectComp
          options={tags}
          label="Select Tag"
          fullWidth
          getValue={(e) => {
            getTagHandler(e.value);
          }}
        />
      )}
    </div>
  );
};

export default Tag;

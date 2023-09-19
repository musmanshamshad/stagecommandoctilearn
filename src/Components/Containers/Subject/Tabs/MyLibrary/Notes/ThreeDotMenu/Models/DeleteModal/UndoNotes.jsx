import React, { useState, useEffect } from "react";
import {
  DeleteWrapper,
  Typorgraphy,
  ButtonTypo,
  ProgressBarTyporgraphy,
} from "./../DeleteModal/DeleteModel.style.js";
import palette from "./../../../../../../../../../config/palette.js";
import {
  buildStyles,
  CircularProgressbarWithChildren,
} from "react-circular-progressbar";

const UndoNotes = ({ subjectName, open, setOpen, handleDelete }) => {
  const [value, setValue] = useState(5);
  const secondStyle = {
    width: 70,
    height: 70,
  };

  useEffect(() => {
    const progresBarTimer = setInterval(() => {
      setValue(value - 1);
    }, 1000);
    if (value < 0) {
      handleDelete();
      clearTimeout(progresBarTimer);
      setOpen(false);
    }
    return () => clearTimeout(progresBarTimer);
  }, [open, value]);
  return (
    <div>
      <DeleteWrapper>
        <div style={secondStyle}>
          <CircularProgressbarWithChildren
            value={value}
            counterClockwise={true}
            maxValue={5}
            background={true}
            strokeWidth={2}
            styles={buildStyles({
              pathColor: palette.colors.secondaryModified,
              backgroundColor: "#f9e5f5",
              pathTransitionDuration: 2.5,
            })}
          >
            <ProgressBarTyporgraphy variant="body1">
              <strong>{value} sec </strong>
            </ProgressBarTyporgraphy>
          </CircularProgressbarWithChildren>
        </div>

        <Typorgraphy>
          <strong>
            Notes <span style={{ color: "#624ba2" }}>{subjectName}</span> have
            been Removed
          </strong>
        </Typorgraphy>
        <Typorgraphy color={palette.colors.unselected}>
          <em>You have 5 seconds to undo your action </em>
        </Typorgraphy>

        <ButtonTypo
          variant="text"
          disabled={value === 0 ? true : false}
          color1={palette.colors.secondaryModified}
          onClick={() => setOpen(false)}
        >
          Undo notes deletion
        </ButtonTypo>
      </DeleteWrapper>
    </div>
  );
};

export default UndoNotes;

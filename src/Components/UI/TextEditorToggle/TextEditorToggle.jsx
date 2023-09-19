import PropTypes from "prop-types";
import React from "react";
import TextEditorRenderOutput from "../TextEditorRenderOutput/TextEditorRenderOutput";
import TextEditor from "./../TextEditor/TextEditor";
import { AiFillEdit } from "react-icons/ai";
import IconButtonComp from "../IconButton/IconButton";
import TinnyEditor from "../TinnyEditor";

const Renderer = ({ text, toggleEditMode }) => {
  const str = text;
  return (
    <div style={{ display: "flex" }}>
      <div style={{ flexGrow: 1 }}>
        <TextEditorRenderOutput  data={JSON.stringify(text)} />
      </div>
      <IconButtonComp onClick={(e) => toggleEditMode(str)}>
        <AiFillEdit />
      </IconButtonComp>
    </div>
  );
};

/** ~~~~~~~~~~~~~~~~~~~~~~~ SEND PARSED DATA ~~~~~~~~~~~~~~~~~~~~~~~~~ */

const TextEditorToggle = ({
  placeholder,
  data,
  sideEffects,
  hasSideEffects,
  getData,
}) => {
  const [edit, setEdit] = React.useState(false);
  const [value, setValue] = React.useState(null);
  React.useEffect(() => {
    setValue(data);
  }, [data]);
  const getContentHandler = (e) => {
    if (hasSideEffects) {
      sideEffects(e)
        .then((res) => {
          if (!res.error) {
            setValue(res.body);
            setEdit(false);
          }
        })
        .catch((err) => console.error(err));
    }

    if (!hasSideEffects) {
      setValue(e);
      getData(e);
      setEdit(false);
    }
  };

  const toggleEditModeHandler = (e) => {
    setValue(e);
    setEdit(true);
  };

  return (
    <React.Fragment>
      {value && (
        <>
          {edit ? (
            <TinnyEditor 
            placeholder={placeholder}
            includeSendBtn={true}
            defaultContent={value.delta}
            getContent={getContentHandler}
            />
            // <TextEditor
            //   placeholder={placeholder}
            //   includeSendBtn={true}
            //   defaultContent={value.delta}
            //   getContent={getContentHandler}
            // />
          ) : (
            <Renderer text={value} toggleEditMode={toggleEditModeHandler} />
          )}
        </>
      )}
    </React.Fragment>
  );
};

TextEditorToggle.propTypes = {
  data: PropTypes.shape({
    delta: PropTypes.any,
    htmlForm: PropTypes.string,
  }),
  delta: PropTypes.any,
  getData: PropTypes.func,
  hasSideEffects: PropTypes.bool,
  htmlForm: PropTypes.string,
  placeholder: PropTypes.string,
  sideEffects: PropTypes.func,
};

TextEditorToggle.defaultProps = {
  sideEffects: async (e) => {
    return;
  },
  hasSideEffects: false,
  data: {
    delta: null,
    htmlForm: "",
  },
  placeholder: "Write something...",
  getData: (e) => {
    return;
  },
};

export default TextEditorToggle;

import React from "react";
import Modal from "./../Modal/Modal";
import Typography from "./../Typography/TypographyCompo";
import Button from "./../Button/ButtonComp";
import StackComp from "./../Stack/Stack";
import { Transforms } from "slate";
import { addStyles, EditableMathField } from "react-mathquill";
import { styled } from "@mui/material";
addStyles();

const StyledField = styled(EditableMathField)(({ theme }) => ({}));
const StyledContainer = styled("div")(({ theme }) => ({}));

const DialogueBox = ({
  open,
  setOpen,
  editor,
  triggerClose,
  onBlockTypeChange,
}) => {
  const text = { text: "" };
  const saveHandler = (e) => {
    const voidNode = {
      type: "katex",
      math: value,
      children: [text],
    };

    Transforms.insertNodes(editor, voidNode);

    triggerClose();
  };
  const [value, setValue] = React.useState("");
  return (
    <Modal open={open} setOpen={setOpen}>
      <StackComp>
        <Typography sx={{ alignSelf: "center" }} variant="h4">
          Insert TEX
        </Typography>
        <StyledContainer>
          <StyledField
            latex={value}
            onChange={(mathField) => {
              setValue(mathField.latex());
            }}
          />
        </StyledContainer>
        <Button onClick={saveHandler}>Save</Button>
      </StackComp>
    </Modal>
  );
};

export default DialogueBox;

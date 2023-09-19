import React, { useState, useEffect } from "react";
import { styled } from "@mui/material/styles";
import Typography from "../../../../../../UI/Typography/TypographyCompo";
import Button from "../../../../../../UI/Button/ButtonComp";
import ToolTips from "../../../../../../UI/Tooltip/ToolTip";
import Palette from "../../../../../../../config/palette.js";
import RightBarAccordian from "../../../../../../UI/RightBarAccordian/RightBarAccordian";
import capitalize from "../../../../../../../helpers/capitalize";
import MoveLibrarySvg from "../../../../LeftSideBar/Icons/MoveLibrarySvg";
import Stack from "../../../../../../UI/Stack/Stack";
import RenderNote from "./RenderNote";

const Wrapper = styled("div")(({ theme }) => ({
  borderRadius: "10px",
  background: "white",
  width: "100%",
}));

export const MoveToLibraryButton = styled(Button)(({ theme }) => ({
  background: theme.palette.secondary.main,
  height: "40px",
  borderRadius: "10px",
  color: "white",
  "&:hover": {
    background: theme.palette.secondary.main,
  },
}));

export const MoveToLibraryButtonStyled = styled(MoveToLibraryButton)(
  ({ theme }) => ({
    alignSelf: "flex-end",
    background: "#fff",
    color: theme.palette.secondary.main,
    border: `1px solid ${theme.palette.secondary.light}`,
    boxShadow: "none",
    "&:hover": {
      background: "#fff",
    },
  })
);
const PrimaryName = styled(Typography)(({ theme }) => ({
  fontWeight: 600,
  fontSize: "18px",
}));
const SecondaryName = styled(Typography)(() => ({
  fontWeight: 600,
  fontSize: "13px",
}));
const TertiaryName = styled(Typography)(() => ({
  fontWeight: 600,
  fontSize: "13px",
  opacity: 0.4,
}));

const NotesContent = ({
  chapterId,
  selection,
  data,
  title,
  tags,
  addToLibraryHandler,
  name,
}) => {
  const [controller, setController] = useState([]);
  const buildController = (tagsArr, payload) => {
    const filteredTags = tagsArr.filter((eachTag) =>
      payload.some((eachNote) => eachNote.tagId === eachTag.id)
    );
    let tempController = filteredTags.map((each) => {
      const bodyIsFound = payload.find((el) => el.tagId === each.id);
      if (bodyIsFound) {
        return {
          title: each.title,
          content: (
            <>
              <RenderNote
                type={selection.type}
                tagId={bodyIsFound.tagId}
                noteId={bodyIsFound.id}
                snackId={bodyIsFound.snackId}
                chapterId={bodyIsFound.chapterId}
                addToLibraryHandler={(e) => {
                  addToLibraryHandler(e, "specific-tag");
                }}
                data={bodyIsFound.body}
              />
            </>
          ),
        };
      }
    });
    setController([...tempController]);
  };

  useEffect(() => {
    if (tags.length > 0) {
      buildController(tags, data);
    }
  }, [selection, tags]);
  console.log(selection.type);
  return (
    <React.Fragment>
      {selection.name !== "" && selection.name && (
        <Wrapper>
          <Stack
            direction="row"
            sx={{
              width: "100wv",
              padding: {
                sm: "0.3rem 1.5rem",
                xs: "0.3rem",
              },
              background: "#E9E7EB",
              minHeight: "38px",
            }}
            justifyContent="space-between"
            alignItems="center"
          >
            {selection.name !== "" && selection.name ? (
              <Stack direction="row" alignItems="center" spacing={2}>
                <PrimaryName variant="h6">
                  {selection.type === "unit"
                    ? selection.name
                    : selection.type === "chapter"
                    ? name
                    : title}
                </PrimaryName>
                {selection.type === "unit" ? (
                  <PrimaryName variant="h6">&#124;</PrimaryName>
                ) : selection.type === "chapter" ? (
                  <SecondaryName variant="body"> &#124;</SecondaryName>
                ) : null}

                <SecondaryName variant="body">
                  {selection.type === "unit"
                    ? name
                    : selection.type === "chapter"
                    ? title
                    : ""}
                </SecondaryName>
                {selection.type === "unit" ? (
                  <SecondaryName variant="body"> &#124;</SecondaryName>
                ) : selection.type === "unit" ? (
                  <SecondaryName variant="body"> &#124;</SecondaryName>
                ) : null}

                <TertiaryName variant="body">
                  {selection.type === "unit"
                    ? capitalize(title)
                    : selection.type === "chapter"
                    ? ""
                    : selection.type === "snack"}{" "}
                </TertiaryName>
              </Stack>
            ) : (
              <Typography variant="h6">Please choose a topic</Typography>
            )}
            {selection.name !== "" && selection.name && (
              <ToolTips
                backgroundColor={Palette.colors.lightColor}
                arrow={false}
                color="#E015A2"
                title="To Edit,Move to My Library "
              >
                <MoveToLibraryButton
                  onClick={(e) =>
                    addToLibraryHandler(
                      { ...selection, chapterId },
                      "full-content"
                    )
                  }
                  sx={{ float: "right" }}
                  startIcon={<MoveLibrarySvg />}
                >
                  Save Now
                </MoveToLibraryButton>
              </ToolTips>
            )}
          </Stack>
          {selection.name !== "" && selection.name && (
            <React.Fragment>
              {controller && controller.length > 0 && (
                <RightBarAccordian controller={controller} />
              )}
            </React.Fragment>
          )}
        </Wrapper>
      )}
    </React.Fragment>
  );
};

export default NotesContent;

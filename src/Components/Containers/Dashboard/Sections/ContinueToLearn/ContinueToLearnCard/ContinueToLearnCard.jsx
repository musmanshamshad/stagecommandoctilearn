import React from "react";
import CardComp from "../../../../../UI/Card/Card";
import Stack from "../../../../../UI/Stack/Stack";
import NextIcon from "./icons/NextIconSvg";
import {
  Heading,
  ChapterHeading,
  SnackHeading,
  Title,
  NextBtn,
  LastActivityBox,
} from "./ContinueToLearnCard.style";

const ContinueToLearn = (props) => {
  const {
    chapter,
    color,
    hasSnacks,
    hasUnits,
    lastActivity,
    snack,
    title,
    unit,
  } = props;

  const { _1000px, _750px } = props;

  return (
    <CardComp>
      <Stack
        alignItems="flex-start"
        justifyContent="space-between"
        sx={{ mb: "6px", height: "53px" }}
        direction="row"
      >
        <Stack space={1.25}>
          {hasUnits ? (
            <Heading>
              Unit {unit.number}: {unit.label}
            </Heading>
          ) : (
            <Heading>
              Chapter {chapter.number}: {chapter.label}
            </Heading>
          )}
          <Stack direction="row">
            {hasUnits && (
              <ChapterHeading type="chapter">
                {" "}
                Chapter {chapter.number}: {chapter.label}
              </ChapterHeading>
            )}
            {hasSnacks && (
              <SnackHeading type="snack">
                {snack.number}: {snack.label}
              </SnackHeading>
            )}
          </Stack>
        </Stack>
        <Title color={color}>{title}</Title>
      </Stack>
      <Stack
        space={1}
        sx={{ width: "100%" }}
        direction={_1000px ? "row" : "column"}
      >
        <LastActivityBox>Last activity: {lastActivity}</LastActivityBox>
        <Stack
          alignItems="flex-end"
          space={1}
          style={{ flexGrow: 1, marginRight: "24px" }}
        >
        </Stack>
        <NextBtn bg={color}>
          <NextIcon />
        </NextBtn>
      </Stack>
    </CardComp>
  );
};

export default ContinueToLearn;

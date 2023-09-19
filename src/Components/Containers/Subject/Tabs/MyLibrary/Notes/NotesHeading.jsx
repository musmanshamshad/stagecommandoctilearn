import React from "react";
import Typography from "./../../../../../UI/Typography/TypographyCompo";
import Stack from "./../../../../../UI/Stack/Stack";
import { styled } from "@mui/system";
import ErrorBoundary from "./../../../../../../Errors/ErrorBoundary";

const HeadingContainer = styled("div")(({ theme }) => ({
  background: "#E9E7EB",
  minHeight: "38px",
  display: "flex",
  alignItems: "center",
  paddingLeft: "30px",
}));

const PrimaryName = styled(Typography)(({ theme }) => ({
  fontWeight: 600,
  fontSize: "18px",
}));
const SecondaryName = styled(Typography)(({ theme }) => ({
  fontWeight: 600,
  fontSize: "13px",
}));
const TertiaryName = styled(Typography)(({ theme }) => ({
  fontWeight: 600,
  fontSize: "13px",
  opacity: 0.4,
}));

const NotesHeading = ({ unit, chapter, snack }) => {
  return (
    <ErrorBoundary>
      <HeadingContainer>
        <Stack direction="row" alignItems="center">
          <PrimaryName variant="h6">{unit ? unit : chapter}</PrimaryName>
          <PrimaryName variant="h6">&#124;</PrimaryName>{" "}
          <SecondaryName variant="h6">{unit ? chapter : snack}</SecondaryName>
          <SecondaryName variant="body"> &#124;</SecondaryName>{" "}
          <TertiaryName variant="body">{unit ? snack : ""}</TertiaryName>
        </Stack>
      </HeadingContainer>
    </ErrorBoundary>
  );
};

export default NotesHeading;

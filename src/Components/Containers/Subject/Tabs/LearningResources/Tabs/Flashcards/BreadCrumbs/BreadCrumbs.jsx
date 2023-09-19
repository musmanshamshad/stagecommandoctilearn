import React from "react";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import { useParams } from "react-router-dom";
import { LinkWrapper } from "./BreadCrumbs.style";
import TypographyCompo from "./../../../../../../../UI/Typography/TypographyCompo";
import BreadCrumpSeparator from "./../../../../../icons/BreadCrumpSeparator";
import capitalize from "./../../../../../../../../helpers/capitalize";
const FlashCardBreadCrumb = () => {
  const { name } = useParams();
  return (
    <div role="presentation">
      <Breadcrumbs
        color="#ADB4C5"
        aria-label="breadcrumb"
        separator={<BreadCrumpSeparator />}
      >
        <TypographyCompo variant="body2">Courses</TypographyCompo>
        <TypographyCompo variant="body2">{capitalize(name)}</TypographyCompo>
        <LinkWrapper to="/dashboard">
          <TypographyCompo variant="body2">{`${capitalize(
            name
          )} Flashcard`}</TypographyCompo>
        </LinkWrapper>
      </Breadcrumbs>
    </div>
  );
};

export default FlashCardBreadCrumb;

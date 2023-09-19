import React from "react";
import Typography from "../../UI/Typography/TypographyCompo";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import { Link, useParams } from "react-router-dom";
import Separator from "./icons/BreadCrumpSeparator";
import capitalize from "../../../helpers/capitalize";
import constants from "./../../../config/constants";

const BreadCrumb = ({ baseVeiw }) => {
  const { name } = useParams();
  return (
    <div role="presentation">
      <Breadcrumbs
        color="#ADB4C5"
        aria-label="breadcrumb"
        separator={<Separator />}
      >
        <Typography variant="body2">{constants.courses}</Typography>
        <Link to="/dashboard" style={{ color: "#ADB4C5", font: "6px" }}>
          <Typography variant="body2">{capitalize(name)}</Typography>
        </Link>
      </Breadcrumbs>
    </div>
  );
};

export default BreadCrumb;

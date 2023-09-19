import React from "react";
import Stack from "../../../../../UI/Stack/Stack";
import { CardActionArea } from "@mui/material";
import { useDispatch } from "react-redux";
import { subjectActions } from "./../../../../../../redux/reducers/subject";
import {
  ImageWraper,
  Image,
  CardCompWrapper,
  Typography,
  StackInner,
} from "./MyCoursesCard.style";

const MyCoursesCard = (props) => {
  const dispatch = useDispatch();
  const { title, name, highlights, img } = props;

  if (highlights) {
    const unitData = highlights.find((el) => el.type === "units");
    const value = unitData.value;
    dispatch(subjectActions.unitsValueHander(value));
  }

  return (
    <CardCompWrapper>
      <CardActionArea>
        <ImageWraper>
          <Image src={img} alt={name} />
        </ImageWraper>
        <Stack sx={{ padding: "24px 20px" }}>
          <Typography variant="h5">{title}</Typography>
          <Typography variant="subtitle">
            <Stack direction={props.matches1000px ? "row" : "column"}>
              {highlights.map((highlight, index) => (
                <Stack direction="row" key={index}>
                  <StackInner>
                    {highlight.value} {highlight.type}
                  </StackInner>
                </Stack>
              ))}
            </Stack>
          </Typography>
        </Stack>
      </CardActionArea>
    </CardCompWrapper>
  );
};

export default MyCoursesCard;

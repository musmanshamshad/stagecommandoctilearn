import React from "react";
import Stack from "./../../../UI/Stack/Stack";
import Grid from "./../../../UI/Grid/Grid";
import { ColoredHeading } from "./../../../UI/FlashcardCreate/FlashcardCreate.style.js";
import KeyValue from "../../../UI/KeyValue/KeyValue";
import ButtonComp from "./../../../UI/Button/ButtonComp";

const EducationDetails = ({
  openModal,
  data,
  loader,
  _750px,
  grades,
  profileHandler,
  setCity,
  setCountry,
  setGradeLevel,
  city,
  country,
  gradeLevel,
  schoolName,
  setSchoolName,
}) => {
  return (
    <div>
      <Grid
        container
        spacing={4}
        style={{ padding: "1rem", fontWeight: "600" }}
      >
        <Grid item xs={_750px ? 12 : 6}>
          <Stack gap="1.4rem">
            <ColoredHeading>Educational Background</ColoredHeading>
            <KeyValue
              title="School name"
              snackBarTitle="School name changed succesfully"
              setValue={setSchoolName}
              defaultValue={schoolName}
            />
            <KeyValue
              dropDown={true}
              placeholder="Select country"
              title="Country"
              snackBarTitle="Country name changed succesfully"
              setValue={setCountry}
              defaultValue={country}
            />
            <KeyValue
              title="City"
              snackBarTitle="City name changed succesfully"
              setValue={setCity}
              defaultValue={city}
            />
          </Stack>
        </Grid>
        <Grid item xs={_750px ? 12 : 6}>
          <Stack gap="1.4rem">
            <ColoredHeading></ColoredHeading>
            <KeyValue
              dropDown={true}
              placeholder="Select grade"
              title="Grade Level"
              options={grades}
              snackBarTitle="Grade name changed succesfully"
              setValue={setGradeLevel}
              defaultValue={gradeLevel}
            />
          </Stack>
        </Grid>
        <Grid item xs={12}>
          <Stack direction="row" alignItems="center" justifyContent="center">
            <ButtonComp
              onClick={profileHandler}
              size="small"
              disabled={loader ? true : false}
            >
              {loader ? "Please wait...." : "Update Details"}
            </ButtonComp>
          </Stack>
        </Grid>
      </Grid>
    </div>
  );
};

export default EducationDetails;

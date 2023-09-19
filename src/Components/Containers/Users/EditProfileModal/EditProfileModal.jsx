import React from "react";
import Stack from "./../../../UI/Stack/Stack";
import Typography from "./../../../UI/Typography/TypographyCompo";
import IconButton from "./../../../UI/IconButton/IconButton";
import userImg from "./../../../../assets/images/user/user_img.png";
import TextField from "./../../../UI/Textfield/Textfield";
import { ColoredHeading } from "./../../../UI/FlashcardCreate/FlashcardCreate.style.js";
import Button from "../../../UI/Button/ButtonComp";
import DeleteSvg from "./../icons/DeleteSvg";
import UploadSvg from "./../icons/UploadSvg";
import {
  Wrapper,
  FormSectionWrapper,
  ImageWrapper,
} from "./EditProfileModal.style.js";

const EducationEditor = () => {
  const [universityName, setUniversityName] = React.useState("");
  const [cityName, setCityName] = React.useState("");
  const [countryName, setCountryName] = React.useState("");
  const [grade, setGrade] = React.useState("");
  const [curriculum, setCurriculum] = React.useState("");
  return (
    <Wrapper gap="14px">
      <Stack justifyContent="center" alignItems="center">
        <Typography variant="h6">Edit Educational Background</Typography>
      </Stack>
      <FormSectionWrapper>
        <ColoredHeading>Educational Background</ColoredHeading>
        <Stack direction="row">
          <TextField
            label="City"
            value={cityName}
            onChange={(e) => setCityName(e.target.value)}
          />
          <TextField
            label="Country"
            value={countryName}
            onChange={(e) => setCountryName(e.target.value)}
          />
        </Stack>
        <TextField
          label="Institute Name"
          value={universityName}
          fullWidth
          onChange={(e) => setUniversityName(e.target.value)}
        />
      </FormSectionWrapper>
      <FormSectionWrapper>
        <ColoredHeading>Subjects</ColoredHeading>
        <Stack direction="row">
          <TextField
            label="Grade"
            value={grade}
            onChange={(e) => setGrade(e.target.value)}
          />
          <TextField
            label="Curriculum"
            value={curriculum}
            onChange={(e) => setCurriculum(e.target.value)}
          />
        </Stack>
      </FormSectionWrapper>
    </Wrapper>
  );
};

const PersonalInfoEditor = (props) => {
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [phone, setPhone] = React.useState("");
  return (
    <Wrapper gap="14px">
      <Stack justifyContent="center" alignItems="center">
        <Typography variant="h6">Edit Profile</Typography>
      </Stack>
      <FormSectionWrapper>
        <Stack direction="row" gap="20px">
          <ImageWrapper>
            <img src={userImg} alt="user-img" width="100%" height="100%" />
          </ImageWrapper>
          <Stack>
            <Typography variant="h6" sx={{ fontSize: "13px" }}>
              Edit Profile Photo
            </Typography>
            <Stack gap="5px" direction="row" alignItems="center">
              <div>
                <IconButton>
                  <DeleteSvg />
                </IconButton>
              </div>
              <div>
                <IconButton>
                  <UploadSvg />
                </IconButton>
              </div>
            </Stack>
          </Stack>
        </Stack>
      </FormSectionWrapper>
      <FormSectionWrapper>
        <Stack direction="row">
          <TextField
            label="Full Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <TextField
            label="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </Stack>
      </FormSectionWrapper>
      <FormSectionWrapper>
        <Stack direction="row">
          <TextField
            label="Phone"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
        </Stack>
      </FormSectionWrapper>
    </Wrapper>
  );
};

const EditToggler = ({ type }) => {
  switch (type) {
    case "education": {
      return <EducationEditor />;
    }
    case "personal": {
      return <PersonalInfoEditor />;
    }
  }
};

const EditProfileModal = ({ type, closeHandler }) => {
  return (
    <Wrapper>
      <EditToggler type={type} />
      <Stack
        direction="row"
        sx={{ width: "100%", mb: 2 }}
        alignItems="center"
        justifyContent="center"
      >
        <Button
          variant="text"
          styleOverrides={{
            background: "#fff",
            color: "#ADB4C5",
          }}
          onClick={(e) => closeHandler()}
        >
          Cancel
        </Button>
        <Button onClick={(e) => closeHandler()}>Save</Button>
      </Stack>
    </Wrapper>
  );
};

export default EditProfileModal;

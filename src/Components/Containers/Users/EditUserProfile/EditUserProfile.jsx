import React from "react";
import Grid from "@mui/material/Grid";
import UserInfo from "./../EducationDetails/UserInfo";
import StackComp from "../../../UI/Stack/Stack";
import EducationDetails from "./../EducationDetails/EducationDetails";
import CardComp from "../../../UI/Card/Card";
import { RightCol, LeftColContent, Title } from "./EditUserProfile.style";
import api from "./../../../../Services";
import Loader from "./../../../UI/Loader/Loader";
import { useSnackbar } from "notistack";
import { useMediaQuery } from "@mui/material";
import { useDispatch } from "react-redux";
import { userActions } from "../../../../redux/reducers/user";

const EditUserProfile = () => {
  const _750px = useMediaQuery("(max-width: 750px)");
  const { enqueueSnackbar } = useSnackbar();
  const [data, setData] = React.useState({});
  const [dataLoading, setDataLoading] = React.useState(false);
  const [loader, setLoader] = React.useState(false);
  const [preview, setPreview] = React.useState();
  const [imageBase64, setImageBase64] = React.useState();
  const [grades, setGrades] = React.useState([]);
  const [name, setName] = React.useState("");
  const [schoolName, setSchoolName] = React.useState("");
  const [phone, setPhone] = React.useState("");
  const [country, setCountry] = React.useState("");
  const [city, setCity] = React.useState("");
  const [gradeLevel, setGradeLevel] = React.useState("");
  const [curriculum, setCurriculum] = React.useState("");

  const dispatch = useDispatch();

  const successHandler = (error) => {
    enqueueSnackbar(
      error ? "Error occurred!" : "Profile updated successfully!",
      {
        variant: error ? "error" : "success",
      }
    );
  };

  const getGradesHandler = async () => {
    let temp = await api.getGrades();
    const { rows } = temp.data;
    setGrades([
      ...rows.map((el) => ({ ...el, value: el.title, label: el.title })),
    ]);
  };

  const apicall = async () => {
    let isAuth = localStorage.getItem("auth");

    const temp = await api.getCurrentUserData(isAuth);

    const { data } = temp;
    setData({ ...data });
    setName(data.firstName + " " + data.lastName);
    setPhone(data.userProfile?.phone);
    setCity(data.userProfile?.city);
    setCountry(data.userProfile?.country);
    setGradeLevel(data.userProfile?.gradeLevel);
    setSchoolName(data.userProfile?.schoolName);
    setCurriculum(data.curriculum);
    setDataLoading(false);
  };
  React.useEffect(() => {
    setDataLoading(true);
    apicall();
    getGradesHandler();
  }, []);

  const profileHandler = async (e) => {
    e.preventDefault();
    setLoader(true);
    if (imageBase64) {
      const result2 = await api.uploadUserImage({ image: imageBase64 });
      successHandler(result2.error);
    }
    const data = {
      fname: name.split(" ")[0],
      lname: name.split(" ")[1],
      country: country.label,
      phone: phone,
      schoolName: schoolName,
      city: city,
      gradeLevelId: gradeLevel.id,
    };

    try {
      const result = await api.updateUserProfile(data);
      const { error, response } = result;

      if (error) {
        throw new Error(result.error);
      } else {
        let token = localStorage.getItem("auth");

        let temp = await api.getUser(token);

        const { error } = temp;

        if (error) {
          throw new Error(temp.error);
        } else {
          dispatch(userActions.getUserData(temp.data));
          successHandler(error);
          setLoader(false);
        }
      }
    } catch (error) {
      successHandler(true);
      setLoader(false);
    }
  };

  const imageHandler = async (e) => {
    const objectUrl = URL.createObjectURL(e.target.files[0]);
    const file = e.target.files[0];
    const fileReader = new FileReader();
    fileReader.readAsDataURL(file);
    fileReader.onload = () => {
      setImageBase64(fileReader.result);
    };
    setPreview(objectUrl);
    dispatch(userActions.updateProfileImage(objectUrl));
  };
  return (
    <Grid container spacing={0}>
      {dataLoading ? (
        <Loader />
      ) : (
        <>
          <Grid item xs={!_750px ? 9 : 12}>
            <LeftColContent>
              <StackComp gap="1rem">
                <Title variant="h6">My Profile</Title>
                <CardComp>
                  <EducationDetails
                    _750px={_750px}
                    grades={grades}
                    data={data}
                    profileHandler={profileHandler}
                    openModal={(e) => { }}
                    setCity={setCity}
                    setCountry={setCountry}
                    setGradeLevel={setGradeLevel}
                    setSchoolName={setSchoolName}
                    schoolName={schoolName ? schoolName : " "}
                    city={city ? city : " "}
                    country={country ? country : " "}
                    gradeLevel={gradeLevel ? gradeLevel.title : " "}
                    curriculum={curriculum ? curriculum : " "}
                    loader={loader}
                  />
                </CardComp>
              </StackComp>
            </LeftColContent>
          </Grid>
          <RightCol item xs={!_750px ? 3 : 12}>
            <UserInfo
              data={data}
              imageHandler={imageHandler}
              preview={preview}
              openModal={(e) => { }}
              setPhone={setPhone}
              setName={setName}
              name={name ? name : " "}
              phone={phone ? phone : " "}
            />
          </RightCol>
        </>
      )}
    </Grid>
  );
};

export default EditUserProfile;

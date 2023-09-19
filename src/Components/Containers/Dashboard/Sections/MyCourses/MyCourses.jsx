import React, { useEffect } from "react";
import constants from "../../../../../config/constants";
import Section from "./../../Section";
import GridComponent from "./../../../../UI/Grid/Grid";
import { useMediaQuery } from "@mui/material";
import MyCoursesCard from "./MyCoursesCard/MyCoursesCard";
import { HeadingTypography, NavLink } from "./../../Dashboard.style";
import api from "../../../../../Services";
import Loader from "../../../../UI/Loader/Loader";
import Alert from "./../../../../UI/Alert/Alert";

const MyCourses = () => {
  const [coursesLoading, setCoursesLoading] = React.useState();
  const [courses, setCourses] = React.useState([]);

  const myCoursesFromDB = async (token) => {
    let temp = await api.getCourses(token);
    return temp;
  };
  const getCoursesFunc = async () => {
    let token = localStorage.getItem("auth");
    myCoursesFromDB(token)
      .then((el) => {
        if (el.error) {
          setCoursesLoading(false);
          return setCourses([]);
        }
        const { data } = el;
        setCourses([...data]);
        setCoursesLoading(false);
      })
      .catch((error) => console.error(error));
  };
  React.useEffect(() => {
    setCoursesLoading(true);
    getCoursesFunc();
  }, []);
  const matches = useMediaQuery("(min-width:1000px)");

  useEffect(() => {
    const timer = setTimeout(() => {
      setCoursesLoading(false);
    }, 5000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <Section>
      {coursesLoading ? (
        <Loader />
      ) : (
        <>
          <GridComponent item xs={12}>
            <HeadingTypography variant="h6">
              {constants.dashboard.sectionHeadings[1]}
              {`(${courses.length})`}
            </HeadingTypography>
          </GridComponent>
          {courses.length === 0 ? (
            <Alert
              title="No courses have been added against particular level"
              severity="warning"
            />
          ) : (
            <>
              {courses.map((course, index) => (
                <GridComponent key={index} item sm={6} xs={12} md={3}>
                  <NavLink
                    to={`/dashboard/${course.title}/${course.id}/${course.highlights[0].value} `}
                  >
                    <MyCoursesCard matches1000px={matches} {...course} />
                  </NavLink>
                </GridComponent>
              ))}
            </>
          )}
        </>
      )}
    </Section>
  );
};

export default MyCourses;

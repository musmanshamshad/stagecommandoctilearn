import React from "react";
import Section from "./../../Section";
import GridComponent from "./../../../../UI/Grid/Grid";
import Stack from "./../../../../UI/Stack/Stack";
import Card from "./../../../../UI/Card/Card";
import Typography from "./../../../../UI/Typography/TypographyCompo";
import constants, {
  SHOW_USER_ACTIVITY_HISTORY_CHART,
} from "./../../../../../config/constants";
import palette from "./../../../../../config/palette";
import CoursesChart from "./../../../../UI/Charts/CourseChart";
import { useSelector } from "react-redux";
import {
  NumberOfCourses,
  CardLabel,
  StatCardFixedHeight,
  StatCardsLayout,
  Div,
  HeadingTypography,
  PercentageTypography,
  ArrowUpward,
} from "./../../Dashboard.style";
import { useMediaQuery } from "@mui/material";
import Loader from "../../../../UI/Loader/Loader";
import ErrorBoundary from "./../../../../../Errors/ErrorBoundary";
import { hoursAgainstDecimals } from "./../../../../../helpers/hoursAgainstDecimals";
import getPercentageChange from "../../../../../helpers/percentageChange";

const Statistics = () => {
  const userStatistics = useSelector((state) => state.user.stats);
  const [dataChart, setDataChart] = React.useState([]);
  const [loadingSummary, setLoadingSummary] = React.useState(false);
  const matches = useMediaQuery("(min-width:1000px)");
  const small = useMediaQuery("(max-width:530px)");
  const { statistics } = constants.dashboard;
  const [timeInfo, setTimeInfo] = React.useState({
    hours: {
      hours: 0,
      minutes: 0,
      seconds: 0,
    },
    percentageChange: 0,
  });
  const [init, setInit] = React.useState({
    coursesCompleted: 0,
    coursesInProgress: 0,
  });

  const loadStatistics = React.useCallback(() => {
    console.log("userStatistics", userStatistics);
    const buildStatistics = userStatistics.map((day) => ({
      day: day.day[0],
      lineRange: Math.round(day.hours),
    }));
    console.log("buildStatistics", buildStatistics);
    const numberOfDaysToPresent = statistics.daysToPresentInChart;
    const filter14days = buildStatistics.slice(
      -numberOfDaysToPresent,
      buildStatistics.length
    );
    console.log("filter14days", filter14days);
    setDataChart(filter14days);
  }, [userStatistics]);

  React.useEffect(() => {
    if (userStatistics.length > 0) {
      loadStatistics();
      configureTime(userStatistics);
    }
  }, [userStatistics]);

  const configureTime = (statistics) => {
    const timeInformation = builtTotalTimeSpent(statistics);
    setTimeInfo({ ...timeInformation });
  };

  const builtTotalTimeSpent = (arr) => {
    const hoursForWeekTwo = arr
      .slice(-7, arr.length)
      .map((el) => el.hours)
      .reduce((acc, curr) => {
        return acc + curr;
      });
    const hoursForWeekOne = arr
      .slice(-14, -7)
      .map((el) => el.hours)
      .reduce((acc, curr) => {
        return acc + curr;
      });

    let percentageChange = getPercentageChange(
      hoursForWeekOne,
      hoursForWeekTwo
    );

    if (percentageChange === Infinity) {
      percentageChange = getPercentageChange(1, hoursForWeekTwo);
    }
    return {
      hours: hoursAgainstDecimals(hoursForWeekTwo),
      percentageChange,
    };
  };
  console.log("timeInfo", timeInfo);
  const gridArrangementWithTimeChart = SHOW_USER_ACTIVITY_HISTORY_CHART ? 3 : 6;
  return (
    <ErrorBoundary>
      <Section>
        <GridComponent item xs={12}>
          <Stack direction="row" space={0} justifyContent="space-between">
            <HeadingTypography variant="h6">
              {constants.dashboard.sectionHeadings[0]}
            </HeadingTypography>
          </Stack>
        </GridComponent>
        {loadingSummary ? (
          <Loader />
        ) : (
          <>
            <GridComponent item spacing={3.125} container xs={12}>
              {console.log({ matches, small })}

              <GridComponent
                item
                xs={matches ? gridArrangementWithTimeChart : small ? 12 : 6}
              >
                <StatCardFixedHeight>
                  <StatCardsLayout justifyContent="center" sx={{pl:{
                    sm:5,
                    xs:0
                  }}}> 
                    <NumberOfCourses variant="h3" >
                      {init.coursesCompleted}
                    </NumberOfCourses>
                    <CardLabel variant="h5">
                      {statistics.coursesCompleted}
                    </CardLabel>
                  </StatCardsLayout>
                </StatCardFixedHeight>
              </GridComponent>
              <GridComponent
                item
                xs={matches ? gridArrangementWithTimeChart : small ? 12 : 6}
              >
                <StatCardFixedHeight>
                  <StatCardsLayout justifyContent="center" sx={{pl:{
                    sm:5,
                    xs:0
                  }}}>
                    <NumberOfCourses variant="h3">
                      {init.coursesInProgress}
                    </NumberOfCourses>
                    <CardLabel variant="h5">{statistics.progress}</CardLabel>
                  </StatCardsLayout>
                </StatCardFixedHeight>
              </GridComponent>
              {SHOW_USER_ACTIVITY_HISTORY_CHART ? (
                <GridComponent item xs={matches ? 6 : 12}>
                  <Card sx={{ height: matches ? "246px" : "fit-content" }}>
                    <Stack justifyContent="center">
                      <Typography
                        variant="body2"
                        sx={{ color: palette.colors.unselected }}
                      >
                        Spent time this week
                      </Typography>
                      <Div>
                        <Typography variant="h5">
                          <strong>
                            {timeInfo.hours.hours} h {timeInfo.hours.minutes}{" "}
                            min
                          </strong>
                        </Typography>
                        <PercentageTypography variant="body1">
                          {Number.isNaN(timeInfo.percentageChange) ? (
                            <></>
                          ) : (
                            <>
                              <ArrowUpward
                                isincreasing={timeInfo.percentageChange > 0}
                              />
                              <> +{Math.round(timeInfo.percentageChange)}%</>
                            </>
                          )}
                        </PercentageTypography>
                      </Div>
                      {dataChart?.length === 0 ? (
                        <Loader />
                      ) : (
                        <CoursesChart dataController={dataChart} />
                      )}
                      {/* <CoursesChart dataController={dataChart} /> */}
                    </Stack>
                  </Card>
                </GridComponent>
              ) : null}
            </GridComponent>
          </>
        )}
      </Section>
    </ErrorBoundary>
  );
};

export default Statistics;

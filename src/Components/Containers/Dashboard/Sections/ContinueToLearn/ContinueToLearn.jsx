import React from "react";
import constants from "../../../../../config/constants";
import Section from "./../../Section";
import GridComponent from "./../../../../UI/Grid/Grid";
import ContinueToLearnCard from "./ContinueToLearnCard/ContinueToLearnCard";
import { HeadingTypography } from "./../../Dashboard.style";
import api from "./../../../../../Services";
import Loader from "./../../../../UI/Loader/Loader";
import { useMediaQuery } from "@mui/material";

const ContinueToLearn = () => {
  const [currentProgress, setCurrentProgress] = React.useState([]);
  const [progressLoading, setProgressLoading] = React.useState(false);
  const _1000px = useMediaQuery("(min-width: 1000px)");
  const _750px = useMediaQuery("(max-width: 750px)");
  const apiReq = async () => {
    const { data, status, ...rest } = await api.getCurrentProgress();
    if (status === "error") {
      console.error(rest.error.message);
      return setCurrentProgress([]);
    }
    setCurrentProgress([...data]);
    setProgressLoading(false);
  };
  React.useEffect(() => {
    setProgressLoading(true);
    apiReq();
  }, []);

  return (
    <>
      {progressLoading ? (
        <Loader />
      ) : (
        <Section>
          <GridComponent item xs={12}>
            <HeadingTypography variant="h6">
              {constants.dashboard.sectionHeadings[2]}
            </HeadingTypography>
          </GridComponent>
          {currentProgress.map((course, index) => (
            <GridComponent key={index} item xs={_1000px ? 6 : 12}>
              <ContinueToLearnCard
                _1000px={_1000px}
                _750px={_750px}
                {...course}
              />
            </GridComponent>
          ))}
        </Section>
      )}
    </>
  );
};

export default ContinueToLearn;

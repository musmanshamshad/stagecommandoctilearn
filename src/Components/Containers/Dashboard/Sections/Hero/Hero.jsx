import React from "react";
import heroImg from "../../../../../assets/images/dashboard/hero_image.png";
import Typography from "../../../../UI/Typography/TypographyCompo";
import Stack from "../../../../UI/Stack/Stack";
import constants from "../../../../../config/constants";
import api from "./../../../../../Services";
import {
  StyledSection,
  DashboardHeroText,
  HeroImg,
  CardWrapper,
} from "./../../Dashboard.style";
import { Box } from "@mui/material";

const Hero = () => {
  const [name, setName] = React.useState("");

  const userNameCallFromDB = async (token) => {
    let temp = await api.getUser(token);
    return temp;
  };
  const apicall = async () => {
    let token = localStorage.getItem("auth");
    userNameCallFromDB(token)
      .then((el) => {
        const { firstName, ...rest } = el.data;
        if (el.error) {
          return console.error(rest.error.message);
        }

        setName(firstName);
      })
      .catch((error) => console.error(error));
  };
  const loadInitialData = () => {
    apicall();
  };
  React.useEffect(() => {
    loadInitialData();
  }, []);
  return (
    <StyledSection item xs={12}>
      <CardWrapper>
       
        <Stack sx={{ 
          alignItems:"center",
          justifyContent:{
            sm:'flex-start',
            xs:"center"
          }
         }} spacing={1} direction={{sm:"row",xs:"column"}}>
           <HeroImg src={heroImg} alt="hero"/>
         <Box>
         <Typography variant="h6">
            {constants.dashboard.greeting} {name}
          </Typography>
          <DashboardHeroText variant="subtitle">
            {constants.dashboard.heroText}
          </DashboardHeroText>
         </Box>
        </Stack>
      </CardWrapper>
    </StyledSection>
  );
};

export default Hero;

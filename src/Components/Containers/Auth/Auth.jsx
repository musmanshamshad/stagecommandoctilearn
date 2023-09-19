import React from "react";
import WelcomeImage from "./signin/WelcomeImage/WelcomeImage";
import { Outlet } from "react-router-dom";
import { GridContainer, Container } from "./Auth.style.js";
import Grid from "./../../UI/Grid/Grid";

const Auth = () => {
  return (
    <GridContainer container>
      <Grid
        item
        sm={0}
        md={5.5}
        sx={{ display: { xs: "none", sm: "none", md: "block" } }}
      >
        <WelcomeImage />
      </Grid>
      <Grid item sm={12} md={6.5}>
        <Container>
          <Outlet />
        </Container>
      </Grid>
    </GridContainer>
  );
};

export default Auth;

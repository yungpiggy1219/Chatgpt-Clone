import React from "react";
import { Typography, Grid } from "@mui/material";

const Header = () => {
  return (
    <Grid my={5} container alignItems="center" justifyContent="center">
      <Typography variant="h3" component="h3">
        ChatGPT CLONE 🤖
      </Typography>
      <br />
      <Typography my={5} variant="body1" component="body1">
        I am ChatGPT, an AI language model developed by OpenAI. I'm here to
        assist and provide information on a wide range of topics. You can ask me
        questions, seek explanations, or request help with various subjects.
        Please note that while I strive to provide accurate and helpful
        information, my responses should be verified and cross-referenced for
        critical or sensitive matters.
      </Typography>
    </Grid>
  );
};

export default Header;

// components/AnswerSection.jsx
import Divider from "@mui/material/Divider";
import { Box, Grid, Typography } from "@mui/material";

const AnswerSection = ({ storedValues }) => {
  return (
    <>
      <Divider>
        <Typography>Chat History</Typography>
      </Divider>
      <Grid container justifyContent="center" my={5}>
        {storedValues.map((value, index) => {
          return (
            <Grid item xs={12} key={index} mb={5}>
              <Box
                sx={{
                  width: "100%",
                  p: 3,
                  bgcolor: "primary.main",
                  "&:hover": {
                    bgcolor: "primary.dark",
                  },
                }}
              >
                <Typography>{value.question}</Typography>
              </Box>

              <Box
                sx={{
                  width: "100%",
                  p: 3,
                  bgcolor: "secondary.main",
                }}
              >
                <Typography>{value.answer}</Typography>
              </Box>
            </Grid>
          );
        })}
      </Grid>
    </>
  );
};

export default AnswerSection;

// components/AnswerSection.jsx
import Divider from "@mui/material/Divider";
import { Box, Grid } from "@mui/material";

const AnswerSection = ({ storedValues }) => {
  return (
    <>
      <Divider>Chat History</Divider>
      <Grid container justifyContent="center" my={5}>
        {storedValues.map((value, index) => {
          return (
            <Grid item xs={12} key={index}>
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
                {value.question}
              </Box>

              <Box
                sx={{
                  width: "100%",
                  p: 3,
                  bgcolor: "secondary.main",
                }}
              >
                {value.answer}
              </Box>
            </Grid>
          );
        })}
      </Grid>
    </>
  );
};

export default AnswerSection;

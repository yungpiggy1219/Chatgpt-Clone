// components/FormSection.jsx

import { useState } from "react";
import { Button, TextField, Grid } from "@mui/material";

const FormSection = ({ generateResponse }) => {
  const [newQuestion, setNewQuestion] = useState("");

  return (
    <Grid container my={5}>
      <TextField
        rows={5}
        multiline
        variant="outlined"
        sx={{ mb:5, width: "100%" }}
        placeholder="Ask me anything..."
        value={newQuestion}
        onChange={(e) => setNewQuestion(e.target.value)}
      ></TextField>
      <Button
        variant="contained"
        size="large"
        sx={{ mb:5, width: "100%" }}
        onClick={() => generateResponse(newQuestion, setNewQuestion)}
      >
        Generate Response 🤖
      </Button>
    </Grid>
  );
};

export default FormSection;

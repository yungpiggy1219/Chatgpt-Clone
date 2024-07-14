// src/App.js

import "./App.css";
import { useState } from "react";
import Header from "./Components/Header.jsx";
import FormSection from "./Components/FormSection.jsx";
import AnswerSection from "./Components/AnswerSection.jsx";
import OpenAI from "openai";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { pink, yellow } from "@mui/material/colors";

const theme = createTheme({
  palette: {
    primary: {
      main: pink[200],
    },
    secondary: {
      main: yellow[300],
    },
  },
});

const App = () => {
  const openai = new OpenAI({
    apiKey: process.env.REACT_APP_OPENAI_API_KEY,
    dangerouslyAllowBrowser: true,
  });

  const [storedValues, setStoredValues] = useState([]);

  const generateResponse = async (newQuestion, setNewQuestion) => {
    let options = {
      model: "gpt-3.5-turbo",
      messages: [
        {
          role: "system",
          content: "You are a helpful assistant.",
        },
        {
          role: "user",
          content: newQuestion,
        },
      ],
      temperature: 0,
      max_tokens: 100,
      top_p: 1,
      frequency_penalty: 0.0,
      presence_penalty: 0.0,
      stop: ["/"],
    };

    const chatCompletion = await openai.chat.completions.create(options);

    if (chatCompletion.choices) {
      setStoredValues([
        {
          question: newQuestion,
          answer: chatCompletion.choices[0].message.content,
        },
        ...storedValues,
      ]);
      setNewQuestion("");
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <Header />
      <FormSection generateResponse={generateResponse} />
      <AnswerSection storedValues={storedValues} />
    </ThemeProvider>
  );
};

export default App;

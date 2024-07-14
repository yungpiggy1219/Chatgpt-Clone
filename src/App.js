// src/App.js

import "./App.css";
import { useState } from "react";
import Header from "./Components/Header.jsx";
import FormSection from "./Components/FormSection.jsx";
import AnswerSection from "./Components/AnswerSection.jsx";
import OpenAI from "openai";

const App = () => {
  const openai = new OpenAI({
    apiKey: process.env.REACT_APP_OPENAI_API_KEY,
    dangerouslyAllowBrowser: true,
  });

  const [storedValues, setStoredValues] = useState([]);

  /*   async function main() {
    const completion = await openai.chat.completions.create({
      messages: [
        { role: "system", content: "You are a helpful assistant." },
        { role: "user", content: "Who won the world series in 2020?" },
        {
          role: "assistant",
          content: "The Los Angeles Dodgers won the World Series in 2020.",
        },
        { role: "user", content: "Where was it played?" },
      ],
      model: "gpt-3.5-turbo",
    });

    console.log(completion.choices[0]);
  } */

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

    let completeOptions = {
      ...options,
      /*      prompt: newQuestion, */
    };

    const chatCompletion = await openai.chat.completions.create(
      completeOptions
    );
    console.log(chatCompletion.choices[0].message);
    console.log("text: " + chatCompletion.choices[0].text);

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
    <div>
      <Header />
      <FormSection generateResponse={generateResponse} />
      <AnswerSection storedValues={storedValues} />
    </div>
  );
};

export default App;

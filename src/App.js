import "./App.css";
import Header from "./Components/Header.jsx";
import ChatForm from "./Components/ChatForm.jsx";
import AnswerSec from "./Components/Answers.jsx";
import OpenAI from "openai";

function App() {
  const openai = new OpenAI({
    apiKey: process.env.REACT_APP_OPENAI_API_KEY,
  });

  return (
    <div className="App">
      <Header />
      <ChatForm />
      <AnswerSec />
    </div>
  );
}

export default App;

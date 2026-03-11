import { useState } from "react";
import "./App.css";
import { quizQuestions } from "./components/quizQuestions";
import QuizScreen from "./components/QuizScreen";
import StartScreen from "./components/StartScreen";
import ResultScreen from "./components/ResultsScreen";

function App() {
  const [quizState, setQuizState] = useState("start");
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [userAnswers, setUserAnswers] = useState([]);

  const quizQuestionsLenght = quizQuestions.length - 1;

  const handleStartQuiz = () => {
    setQuizState("quiz");
  };

  const handleSelectedAnswer = (answerIndex) => {
    setUserAnswers((prev) => [...prev, answerIndex]);

    if (currentQuestionIndex === quizQuestionsLenght) {
      setQuizState("result");
    } else {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    }
  };

  const handleRestartQuiz = () => {
    setQuizState("start");
    setCurrentQuestionIndex(0);
    setUserAnswers([]);
  };

  if (quizState === "start") {
    return <StartScreen onStart={handleStartQuiz} />;
  }

  if (quizState === "quiz") {
    return (
      <QuizScreen
        index={currentQuestionIndex}
        questions={quizQuestions}
        onAnswerSelect={handleSelectedAnswer}
      />
    );
  }

  if (quizState === "result") {
    return (
      <ResultScreen
        userAnswers={userAnswers}
        questions={quizQuestions}
        onRestart={handleRestartQuiz}
      />
    );
  }
}

export default App;

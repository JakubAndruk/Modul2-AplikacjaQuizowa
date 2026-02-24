// import { useState } from "react";
// import { quizQuestions } from "./quizQuestions";
import Button from "./Button";

export default function QuizScreen({ index, questions, onAnswerSelect }) {
  const currentQuestion = questions[index];
  return (
    <>
      <h1>
        Pytanie {Number(index) + 1}. {currentQuestion.text}
      </h1>
      <div className="quiz-buttons-container">
        {currentQuestion.answers.map((answer, answerIndex) => (
          <Button
            key={answerIndex}
            onClick={() => onAnswerSelect(answerIndex)}
            className="dark-button"
          >
            {answer.text}
          </Button>
        ))}
      </div>
    </>
  );
}

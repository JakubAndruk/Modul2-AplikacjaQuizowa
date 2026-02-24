import Button from "./Button";

export default function ResultScreen({ userAnswers, questions, onRestart }) {
  const correctAnswersCount = questions.filter(
    (question, index) => question.answers[userAnswers[index]]?.isCorrect,
  ).length;

  const scorePercent = Math.round(
    (correctAnswersCount / questions.length) * 100,
  );

  const isPassed = scorePercent >= 80;

  return (
    <>
      <h2 style={{ color: isPassed ? "green" : "red" }}>
        {isPassed
          ? "Gratulacje! Quiz zaliczony!"
          : "Niestety, quiz niezaliczony"}
      </h2>

      <span>
        Twój wynik to:{" "}
        <span style={{ color: isPassed ? "green" : "red" }}>
          {scorePercent + ",00%"}
        </span>{" "}
        ({correctAnswersCount} z {questions.length} poprawnych odpowiedzi)
      </span>

      <div className="quiz-results-container">
        {questions.map((question, index) => {
          const userAnswerIndex = userAnswers[index];
          const userAnswer = question.answers[userAnswerIndex];
          const isCorrect = userAnswer?.isCorrect;

          if (!userAnswer) {
            return (
              <div key={index}>
                <h3>
                  Pytanie {index + 1}. {question.text}
                </h3>
                <p>Brak odpowiedzi</p>
              </div>
            );
          }

          return (
            <div key={index}>
              <h3>
                Pytanie {index + 1}. {question.text}
              </h3>
              <p>
                <strong>Twoja odpowiedź:</strong>{" "}
                <span style={{ color: isCorrect ? "green" : "red" }}>
                  {userAnswer.text}
                </span>
              </p>
            </div>
          );
        })}
      </div>

      <Button
        onClick={onRestart}
        style={{ backgroundColor: isPassed ? "green" : "red" }}
      >
        Powrót do startu
      </Button>
    </>
  );
}

import Button from "./Button";

export default function StartScreen({ onStart }) {
  return (
    <>
      <h1>Javascript Quiz</h1>
      <Button onClick={onStart}>Rozpocznij quiz</Button>
    </>
  );
}

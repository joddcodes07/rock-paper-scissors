import { useState } from "react";

export default function App() {
  const [userMove, setUserMove] = useState("Paper");
  const [computerMove, setComputerMove] = useState("Paper");

  let emojiData = { Rock: "🪨", Paper: "📄", Scissors: "✂️" };
  function handleClick(move) {
    setUserMove(move);
    let computerMove = generateComputerMove();
    setComputerMove(computerMove);
  }
  function generateComputerMove() {
    let value = Math.random();
    if (value < 0.33) {
      return "Rock";
    } else if (value < 0.67) {
      return "Paper";
    } else {
      return "Scissors";
    }
  }
  return (
    <div>
      <h1>Computer : You</h1>
      {emojiData[computerMove]} :{emojiData[userMove]}
      <br></br>
      <button
        onClick={() => {
          handleClick("Rock");
        }}
      >
        🪨
      </button>
      <button
        onClick={() => {
          handleClick("Paper");
        }}
      >
        📄
      </button>
      <button
        onClick={() => {
          handleClick("Scissors");
        }}
      >
        ✂️
      </button>
    </div>
  );
}

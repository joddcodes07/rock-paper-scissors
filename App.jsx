import { useState } from "react";

export default function App() {
  const [userMove, setUserMove] = useState("Paper");
  const [computerMove, setComputerMove] = useState("Paper");
  const [rounds, setRounds] = useState(0);

  let emojiData = { Rock: "🪨", Paper: "📄", Scissors: "✂️" };
  function handleClick(move) {
    setUserMove(move);
    let computerMove = generateComputerMove();
    setComputerMove(computerMove);
    setRounds(rounds+1);
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
  function handleReset(){
    setUserMove("Paper");
    setComputerMove("Paper");
    setRounds(0);
  }
  return (
    <div>
      <h1>Computer : You</h1>
      {emojiData[computerMove]} :{emojiData[userMove]}
      <br></br>
      <h2>Rounds Played: {rounds}</h2>
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
      <br></br><br></br>
      <button onClick={handleReset}>Reset Game</button>
    </div>
  );
}

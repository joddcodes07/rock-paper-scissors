import { useState } from "react";
import { useFormState } from "react-dom";

export default function App() {
  const [userMove, setUserMove] = useState("Paper");
  const [computerMove, setComputerMove] = useState("Paper");
  const [rounds, setRounds] = useState(0);
  const [winnerMessage, setWinnerMessage] = useState("Let's Play!"); 
  const [streak, setStreak] = useState(0);
  const [history, setHistory] = useState([]);

  let emojiData = { Rock: "🪨", Paper: "📄", Scissors: "✂️" };
  function handleClick(move) {
    setUserMove(move);
    let computerMove = generateComputerMove();
    setComputerMove(computerMove);
    setRounds(rounds+1);

    let result = checkWinner(move, computerMove);
    if (result === "User Win"){
      setWinnerMessage("🎉 You Won!");
      setStreak(streak + 1);
    }else if(result === "Computer Win"){
      setWinnerMessage("💻 Computer Won!");
      setStreak(0);
    }else{
      setWinnerMessage("Match Draw!");
    }
    let newHistory = {user:move,comp:computerMove,result:result};
    setHistory([newHistory,...history]);
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
    setWinnerMessage("Let's Play!"); 
    setStreak(0);               
    setHistory([]);
  }
  function checkWinner(user,comp){
    if (user === comp) return "Tie";
    if((user === "Rock" && comp === "Scissors") || (user === "Paper" && comp === "Rock") || (user === "Scissors" && comp === "Paper")){
      return "User Win";
    }
    return "Computer Win";
  }
  return (
    <div>
      <h1>{winnerMessage}</h1>
      <h1>Computer : You</h1>
      {emojiData[computerMove]} :{emojiData[userMove]}
      <br></br>
      <h3>Rounds Played: {rounds} | Winning Streak: 🔥 {streak}</h3>
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
      <h3>Move History</h3>
      <ul>
        {history.map((turn,index)=>(
          <li key={index}>
            Round {rounds - index}: {emojiData[turn.user]} vs {emojiData[turn.comp]} ➡️ {turn.result}
          </li>
        ))}
      </ul>
    </div>
  );
}

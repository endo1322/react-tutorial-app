import React, { useState } from 'react'
import Square from "./Square"
import calculateWinner from "./calculateWinner"



const nullList = [
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
];

const Board = () => {
  const [status, setStatus] = useState(nullList)
  const [xIsNext, setXIsNext] = useState(true)
  
  const updateStatus = (i) => {
    if (calculateWinner(status) || status[i]) {
      return;
    }
    const state = xIsNext ? 'X' : 'O';
    setStatus(
      status.map((value, index) => (index === i ? state : value))
    )
    setXIsNext(!xIsNext)
  }

  const renderSquare = (i) => {
    const winner = calculateWinner(status);
    let winStatus;
    if (winner) {
      winStatus = 'Winner: ' + winner;
    } else {
      winStatus = 'Next player: ' + (xIsNext ? 'X' : 'O');
    }
    return (
      <Square
        value={status[i]}
        onClick={() => updateStatus(i)}
      />
    );
  }



  return (
    <div>
          <div className="mb-2.5">Next player: X</div>
          <div className="clear-both content-none">
            {renderSquare(0)}
            {renderSquare(1)}
            {renderSquare(2)}
            {/* <Square index={0} value={status[0]} setter={updateStatus} /> */}
          </div>
          <div className="clear-both content-none">
            {renderSquare(3)}
            {renderSquare(4)}
            {renderSquare(5)}
          </div>
          <div className="clear-both content-none">
            {renderSquare(6)}
            {renderSquare(7)}
            {renderSquare(8)}
          </div>
        </div>
  )
}

export default Board
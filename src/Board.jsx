import React, { useState, memo } from 'react'
import Square from "./Square"
import calculateWinner from "./calculateWinner"
import { useCallback } from 'react';

const Board = memo(() => {
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
  const [status, setStatus] = useState('Next player: X')
  const [squares, setSquares] = useState(nullList)
  const [xIsNext, setXIsNext] = useState(true)
  // const [win, setWin] = useState(false)
  
  const hundleClick = (i, winner) => {
    // .slice()だとうまくいかない
    const new_squares = [...squares]
    setSquares(new_squares)
    console.log(squares)
    if (winner) {
      setStatus('Winner: ' + winner)
    } else {
      setStatus('Next player: ' + (xIsNext ? 'X' : 'O'))
    }
    if (calculateWinner(squares) || squares[i]) {
      return;
    }
    const state = xIsNext ? 'X' : 'O';
    setSquares(
      squares.map((value, index) => (index === i ? state : value))
    )
    setXIsNext(!xIsNext)

  }

  const renderSquare = useCallback((i) => {
    const winner = calculateWinner(squares);
    return (
      <Square
        value={squares[i]}
        onClick={() => hundleClick(i, winner)}
      />
    );
  })

  return (
    <div>
          <div className="mb-2.5">{status}</div>
          <div className="clear-both content-none">
            {renderSquare(0)}
            {renderSquare(1)}
            {renderSquare(2)}
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
})

export default Board
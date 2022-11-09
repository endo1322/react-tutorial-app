import React, { useState, memo } from 'react'
import Square from "./Square"
import { useCallback } from 'react';
import calculateWinner from "./calculateWinner"

const Board = memo((props) => {

  const renderSquare = useCallback((i) => {
    // const winner = calculateWinner(props.squares[0].Square);
    const winner = 'x'
    return (
      // <Square
      //   value={props.squares[0].Square[i]}
      //   onClick={() => props.onClick(i, winner)}
      // />
      <Square
      value={props.squares[0].square[i]}
      onClick={() => props.onClick(i, winner)}
    />
      // <Square
      //   value={props.squares[0].square[i]}
      // />
    );
  })

  return (
    <div>
          {/* <div className="mb-2.5">{status}</div> */}
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
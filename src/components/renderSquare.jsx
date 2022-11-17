import calculateWinner from "../logic/calculateWinner"
// import hundleClick from "../logic/hundleClick";
import Square from "../Square"

import { useContext, useState } from "react";
import { SquareContext, SquareProvider } from "../components/providers/SquareProvider"


const RenderSquare = (props) => {
    const {gameInfo, setGameInfo} = useContext(SquareContext)
    const { status, square, xIsNext } = gameInfo
    let newStatus = null

    const winner = calculateWinner(square);

    console.log("RenderSquare")
    

    const hundleClick = () => {
      
    // .slice()だとうまくいかない
    // const new_squares = [...info.square]
  
    const newXO = xIsNext ? 'X' : 'O';
    if (winner) {
      newStatus = 'Winner: ' + winner
    } else {
      newStatus = 'Next player: ' + (xIsNext ? 'X' : 'O')
      console.log(newStatus)
    }
    if (calculateWinner(square) || square[props.i]) {
      return;
    }

    setGameInfo(
      {
        status: newStatus,
        square: square.map((value, index) => (index === props.i ? newXO : value)),
        xIsNext: !xIsNext
      }
    )
    console.log(gameInfo)
    }
    
    return (
      <Square
        value={square[props.i]}
        onClick={() => hundleClick()}
      />
    );
  }

  
  export default RenderSquare
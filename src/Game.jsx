import React, { memo } from 'react';
import './index.css'; 
import Board from "./Board.jsx";
import Square from "./Square"
import { SquareContext } from "./components/providers/SquareProvider"
import { useContext } from 'react';
import calculateWinner from "./logic/calculateWinner"

export const Game = () => {
    console.log("-----Game-----")
    const {gameInfo, setGameInfo} = useContext(SquareContext)
    const { status, history, xIsNext, stepNumber } = gameInfo
    console.log("Render gameINFO = ",gameInfo)

    const hundleClick = (i) => {
        console.log("-----hundleClick start-----")
        console.log("gameInfo = ",gameInfo)
        console.log("hundleClick i = ", i)
        // console.log("history = ",history)
        const current = history[0].squares
        const squares = current.slice()
        const winner = calculateWinner(squares);
        console.log("winner= ", winner)
        console.log("squares= ", squares)
        let newStatus = null
        const newXO = xIsNext ? 'X' : 'O';
        if (winner) {
            newStatus = 'Winner: ' + winner
            console.log("winwinwin")
        } else {
            newStatus = 'Next player: ' + (xIsNext ? 'O' : 'X')
        }
        if (calculateWinner(squares) || squares[i]) {
            console.log("finish")
            setGameInfo(
                {
                    status: newStatus,
                    history: history,
                    xIsNext: !xIsNext,
                    stepNumber: history.length
                }
            )
            return;
            // return (
            //     <Square
            //         i={i}
            //         classname={"bg-lime-300 border-2 float-left text-xl font-bold leading-8 h-10 ml-px mb-px p-0 text-center w-10"}
            //         // onClick={() => props.onClick()}
            //     />
            // )
        }
        if (squares.map((value, index) => squares[i] === null)) {
            history.unshift({
                squares: squares.map((value, index) => index === i ? newXO : value)
            })
        }

        setGameInfo(
            {
                status: newStatus,
                history: history,
                xIsNext: !xIsNext,
                stepNumber: history.length
            }
        )
        console.log("-----hundleClick finish-----")
    }

    const jumpTo = (step) => {
        const length = history.length -1
        for (let i = 0; i < length - step; i++) {
            history.shift()
        }
        setGameInfo(
            {
                status: (step % 2) === 0 ? 
                    'Next player: X' : 'Next player: O',
                history: history,
                xIsNext: (step % 2) === 0,
                stepNumber: step
            }
        )
        console.log("jumpTo",gameInfo)
    }

    const moves = history.map((step, move) => {
        const desc = move ?
          'Go to move #' + move :
          'Go to game start';
        return (
          <li key={move}>
            <button className="bg-slate-200 hover:bg-sky-400 mb-px" onClick={() => jumpTo(move)}>{desc}</button>
          </li>
        );
      });

    return (
        <div className="flex-row">
            <div className="game-board">
            <Board onClick={(i) => hundleClick(i)}/>
            </div>
            <div className="ml-5">
            <div>{gameInfo.status}</div>
            <ol>{moves}</ol>
            </div>
            {console.log("-----End-----")}
        </div>
    );
}
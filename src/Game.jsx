import React from 'react';
import './index.css'; 
import Board from "./Board.jsx";
import { SquareContext } from "./components/providers/SquareProvider"
import { useContext } from 'react';
import calculateWinner from "./logic/calculateWinner"

export const Game = () => {
    console.log("-----Game-----")
    const {gameInfo, setGameInfo} = useContext(SquareContext)
    const { status, history, xIsNext, stepNumber } = gameInfo
    console.log("BeforegameINFO = ",gameInfo)

    const hundleClick = (i) => {
        console.log("-----hundleClick-----")
        console.log("gameInfo = ",gameInfo)
        // console.log("history = ",history)
        const current = history[0].squares
        const squares = current.slice()
        const winner = calculateWinner(squares);
        let newStatus = null
        const newXO = xIsNext ? 'X' : 'O';
        if (winner) {
            newStatus = 'Winner: ' + winner
        } else {
            newStatus = 'Next player: ' + (xIsNext ? 'O' : 'X')
        }
        if (calculateWinner(squares) || squares[i]) {
            return;
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
        
        console.log("afterGameInfo",gameInfo)
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
            <button className="bg-slate-200 mb-px" onClick={() => jumpTo(move)}>{desc}</button>
          </li>
        );
      });

    return (
        <div className="flex-row text-center">
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
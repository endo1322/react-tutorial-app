import React from 'react';
import './index.css'; 
import Board from "./Board.jsx";
import { SquareContext } from "./components/providers/SquareProvider"
import { useContext } from 'react';
import calculateWinner from "./logic/calculateWinner"

export const Game = () => {
    console.log("Game")
    const {gameInfo, setGameInfo} = useContext(SquareContext)
    const { status, history, xIsNext } = gameInfo
    console.log("BeforegameINFO = ",gameInfo.status,gameInfo.history,gameInfo.xIsNext)

    const hundleClick = (i) => {
        console.log("hundleClick")
        console.log("gameInfo = ",gameInfo)
        console.log("history = ",history)
        console.log("handleClick I= ",i)
        const current = history[0].squares
        const squares = current.slice()
        const winner = calculateWinner(squares);
        let newStatus = null
        const newXO = xIsNext ? 'X' : 'O';
        if (winner) {
            newStatus = 'Winner: ' + winner
        } else {
            newStatus = 'Next player: ' + (xIsNext ? 'X' : 'O')
            // console.log(newStatus)
        }
        if (calculateWinner(squares) || squares[i]) {
            return;
        }
        if (squares.map((value, index) => squares[i] === null)) {
            history.unshift({
                squares: squares.map((value, index) => index === i ? newXO : value)
            })
        }
        console.log("unshift =", history)

        setGameInfo(
            {
                status: newStatus,
                history: history,
                xIsNext: !xIsNext
            }
        )
        
        console.log("afterGameInfo",gameInfo)
        console.log("hist = ",history[0].squares[2])
    }

    return (
        <div className="flex-row text-center">
            <div className="game-board">
            <Board onClick={(i) => {console.log("i = ",i);hundleClick(i)}}/>
            </div>
            <div className="ml-5">
            <div>{gameInfo.status}</div>
            <ol>{/* TODO */}</ol>
            </div>
        </div>
    );
}
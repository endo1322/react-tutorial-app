import React, { memo, useContext } from 'react';
import './index.css'; 
import Board from "./Board.jsx";
import { SquareContext } from "./components/providers/SquareProvider"
import calculateWinner from "./logic/calculateWinner"
import Moves from './components/Moves';

export const Game = () => {
    console.log("-----Game-----")
    const { gameInfo, setGameInfo } = useContext(SquareContext)
    const { history, xIsNext } = gameInfo
    console.log("Render gameINFO = ",gameInfo)
    let status = null
    const winner = calculateWinner(history[0].squares)
    const drawCheck = history[0].squares.every(function(val){
        return val;
    });
    if (winner) {
        status = 'Winner: ' + winner.winner
    } else if (drawCheck) {
        status = 'Draw'
    } else {
        status = 'Next player: ' + (xIsNext ? 'X' : 'O')
    }

    const hundleClick = (i) => {
        console.log("-----hundleClick Start-----")
        console.log("hundleClick gameInfo = ",gameInfo)
        // console.log("history = ",history)
        const current = history[0].squares
        const squares = current.slice()
        const winner = calculateWinner(squares);
        let newStatus = null
        const newXO = xIsNext ? 'X' : 'O';
        if (winner) {
            console.log("game set")
            return;
        } else if (squares[i] !== null) {
            console.log("filled")
            return;
        }
        if (squares.map((value, index) => squares[i] === null)) {
            history.unshift({
                squares: squares.map((value, index) => index === i ? newXO : value)
            })
        }
        setGameInfo(
            {
                history: history,
                xIsNext: !xIsNext,
                stepNumber: history.length
            }
        )
        console.log("-----hundleClick finish-----")
    }

    return (
        <div className="flex-row">
            <div className="game-board">
                <Board onClick={(i) => hundleClick(i)} winLine={winner ? winner.winLine : null}/>
            </div>
            <div className="ml-5">
                <div className=''>{status}</div>
                <Moves />
            </div>
            {console.log("-----Render End-----")}
        </div>
    );
}
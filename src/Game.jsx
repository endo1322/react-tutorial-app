import React, { memo, useContext } from 'react';
import './index.css'; 
import Board from "./components/Board";
import { SquareContext } from "./components/providers/SquareProvider"
import calculateWinner from "./logic/calculateWinner"
import Moves from './components/Moves';

export const Game = () => {
    console.log("-----Game-----")
    const { gameInfo, setGameInfo } = useContext(SquareContext)
    const { history, xIsNext, stepNumber } = gameInfo
    console.log("Render gameINFO = ",gameInfo)
    let status = null
    const winner = calculateWinner(history[stepNumber].squares)
    const drawCheck = history[stepNumber].squares.every(function(val){
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
        if (history[stepNumber].squares[i] !== null) {
            console.log("filled")
            return;
        }
        if (stepNumber !== 0) {
            for (let i = 0; i < stepNumber; i++) {
                history.shift()
            }
        }
        const current = history[0].squares
        console.log("hundleClick currentSquares = ",current)
        const squares = current.slice()
        const winner = calculateWinner(squares);
        const newXO = xIsNext ? 'X' : 'O';
        if (winner) {
            console.log("game set")
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
                stepNumber: 0
            }
        )
        console.log("-----hundleClick finish-----")
    }

    return (
        <div className="h-screen w-full flex items-center justify-center flex-col">
            <div className='flex justify-center mb-5'>{status}</div>
            <div className='flex sm:flex-row flex-col'>
                <div className="sm:mb-24">
                    <Board onClick={(i) => hundleClick(i)} winLine={winner ? winner.winLine : null}/>
                </div>
                <div className="sm:ml-5 sm:mt-0 mt-5 flex justify-center">
                    <Moves />
                </div>
                {console.log("-----Render End-----")}
            </div>
        </div>
    );
}
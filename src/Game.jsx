import React from 'react';
import { useState } from "react";
// import ReactDOM from 'react-dom/client';
import './index.css'; 
import Board from "./Board.jsx";
import Square from './Square';
import calculateWinner from "./calculateWinner"


export const Game = () => {
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
    const [gameInfo, setGameInfo] = useState([
        {
            status: 'Next player: X',
            square: nullList,
            xIsNext: true
        }
    ])

    const hundleClick = (i, winner) => {
        // const new_status = null
        // if (winner) {
        //   new_status = ('Winner: ' + winner)
        // } else {
        //   new_status = ('Next player: ' + (gameInfo[0].xIsNext ? 'X' : 'O'))
        // }
        // if (calculateWinner(gameInfo[0].square) || gameInfo[0].square[i]) {
        //   return;
        // }
        // const state = gameInfo[0].xIsNext ? 'X' : 'O';
        // const new_square = gameInfo[0].square.map((value, index) => (index === i ? state : value))
        // setGameInfo(
        //     {
        //         status: new_status,
        //         square: new_square,
        //         xIsNext: !gameInfo[0].xIsNext
        //     }
        // )
        console.log('click')
      }


    

    const unshift = () => {
        gameInfo.unshift(
            {
                status: 'Next player: O',
                square: nullList,
                xIsNext: false
            }
        )
        console.log(gameInfo)
    }

    const shift = () => {
        const pull = gameInfo.shift()
        console.log(pull)
        console.log(gameInfo)
    }

    return (
        <div className="flex-row text-center">
            <div className="game-board">
            <Board squares={gameInfo} onClick={() => hundleClick()} />
            {/* <Board squares={gameInfo} /> */}
            </div>
            <div className="ml-5">
            {/* <div>{gameinfo.status}</div> */}
            <ol>{/*TODO*/}</ol>
            </div>
        </div>
    );
}
import React from 'react';
// import { useState } from "react";
// import ReactDOM from 'react-dom/client';
import './index.css'; 
import Board from "./Board.jsx";

export const Game = () => {
    return (
        <div className="flex-row text-center">
            <div className="game-board">
            <Board />
            </div>
            <div className="ml-5">
            <div>{/* status */}</div>
            <ol>{/* TODO */}</ol>
            </div>
        </div>
    );
}
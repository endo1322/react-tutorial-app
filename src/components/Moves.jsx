import React from 'react'
import { useContext } from 'react';
import { SquareContext } from "./providers/SquareProvider"

const Moves = () => {
    console.log("-----Moves-----")
    const {gameInfo, setGameInfo} = useContext(SquareContext)
    const { history } = gameInfo
    const desc = []

    
    const jumpTo = (step) => {
        console.log("-----jumpTo Start-----")
        const length = history.length -1
        for (let i = 0; i < length - step; i++) {
            history.shift()
        }
        setGameInfo(
            {
                history: history,
                xIsNext: (step % 2) === 0,
                stepNumber: step
            }
        )
        console.log("jumpTo gameInfo = ",gameInfo)
        console.log("-----jumpTo End-----")
    }

    history.map((step, move) => {
        const temp = []
        temp.push(move ?
          'Go to move #' + move :
          'Go to game start')
        desc.push(
        <li key={move}>
            <button className="bg-slate-200 hover:bg-sky-400 mb-px" onClick={() => jumpTo(move)}>{temp}</button>
        </li>)
    })

  return (
    <div>
        {desc}
    </div>
  )
}

export default Moves
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
        setGameInfo(
            {
                history: history,
                xIsNext: (step % 2) === 0,
                stepNumber: history.length - 1 - step
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
        <div className="flex justify-center" key={move}>
            <button className="bg-slate-200 mb-1 rounded-md px-4 hover:bg-sky-400" onClick={() => jumpTo(move)}>{temp}</button>
        </div>)
    })

  return (
    <div>
        {desc}
    </div>
  )
}

export default Moves
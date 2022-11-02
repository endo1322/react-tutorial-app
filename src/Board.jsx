import React, { useState } from 'react'
import Square from "./Square"



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

const Board = () => {
  const [status, setStatus] = useState(nullList)
  
  const updateStatus = (i) => {
    console.log(i)
    setStatus(
      status.map((value, index) => (index === i ? "X" : value))
    )
  }

  const renderSquare = (i) => {
    return (
      <Square
        value={status[i]}
        onClick={() => updateStatus(i)}
      />
    );
  }



  return (
    <div>
          <div className="mb-2.5">Next player: X</div>
          <div className="clear-both content-none">
            {renderSquare(0)}
            {renderSquare(1)}
            {renderSquare(2)}
            {/* <Square index={0} value={status[0]} setter={updateStatus} /> */}
          </div>
          <div className="clear-both content-none">
            {renderSquare(3)}
            {renderSquare(4)}
            {renderSquare(5)}
          </div>
          <div className="clear-both content-none">
            {renderSquare(6)}
            {renderSquare(7)}
            {renderSquare(8)}
          </div>
        </div>
  )
}

export default Board
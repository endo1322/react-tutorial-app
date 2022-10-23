import React from 'react'
import Square from "./Square"

const Board = () => {
  // renderSquare(i) {
  //   // Squareコンポーネントへvalueプロップスを渡す 
  // return <Square value={i}/>;
  // }

  return (
    <div>
          <div className="mb-2.5">Next player: X</div>
          <div className="clear-both content-none">
            <Square value={0}/> 
            <Square value={1}/>
            <Square value={2}/>
          </div>
          <div className="clear-both content-none">
            <Square value={3}/>
            <Square value={4}/>
            <Square value={5}/>
          </div>
          <div className="clear-both content-none">
            <Square value={6}/>
            <Square value={7}/>
            <Square value={8}/>
          </div>
        </div>
  )
}

export default Board
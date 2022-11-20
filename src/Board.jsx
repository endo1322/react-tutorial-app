import React, { memo } from 'react'
import RenderSquare from "./components/renderSquare"

const Board = (props) => {
  console.log("Bord")
  return (
    <div>
          <div className="clear-both content-none">
            <RenderSquare i={0} onClick={() => props.onClick(0)}/>
            <RenderSquare i={1} onClick={() => props.onClick(1)}/>
            <RenderSquare i={2} onClick={() => props.onClick(2)}/>
          </div>
          <div className="clear-both content-none">
            <RenderSquare i={3} onClick={() => props.onClick(3)}/>
            <RenderSquare i={4} onClick={() => props.onClick(4)}/>
            <RenderSquare i={5} onClick={() => props.onClick(5)}/>
          </div>
          <div className="clear-both content-none">
            <RenderSquare i={6} onClick={() => props.onClick(6)}/>
            <RenderSquare i={7} onClick={() => props.onClick(7)}/>
            <RenderSquare i={8} onClick={() => props.onClick(8)}/>
          </div>
        </div>
  )
}

export default Board
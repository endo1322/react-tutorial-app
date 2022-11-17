import React, { useState, memo } from 'react'
import RenderSquare from "./components/renderSquare"
import { SquareContext, SquareProvider } from "./components/providers/SquareProvider"
import { useContext } from 'react';

const Board = memo(() => {
  const {gameInfo} = useContext(SquareContext)

  return (
    <div>
          <div className="mb-2.5">{gameInfo.status}</div>
          <div className="clear-both content-none">
            <RenderSquare i={0} />
            <RenderSquare i={1} />
            <RenderSquare i={2} />
          </div>
          <div className="clear-both content-none">
            <RenderSquare i={3} />
            <RenderSquare i={4} />
            <RenderSquare i={5} />
          </div>
          <div className="clear-both content-none">
            <RenderSquare i={6} />
            <RenderSquare i={7} />
            <RenderSquare i={8} />
          </div>
        </div>
  )
})

export default Board
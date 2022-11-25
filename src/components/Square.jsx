import { memo, useContext } from 'react'
import { SquareContext } from "./providers/SquareProvider"

const Square = memo((props) => {
  console.log("-----Square-----")
  const {gameInfo, setGameInfo} = useContext(SquareContext)
  const { history, stepNumber } = gameInfo
  return (
    <div>
        <button className={props.classname} onClick={() => {props.onClick()}}>
          {history[stepNumber].squares[props.i]}
        </button>
    </div>
  )
})

export default Square
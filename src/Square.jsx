import { memo, useContext } from 'react'
import { SquareContext } from "./components/providers/SquareProvider"

const Square = memo((props) => {
  console.log("-----Square-----")
  const {gameInfo, setGameInfo} = useContext(SquareContext)
  const { status, history, xIsNext } = gameInfo
  return (
    <div>
        <button className={props.classname} onClick={() => {props.onClick()}}>
          {history[0].squares[props.i]}
        </button>
    </div>
  )
})

export default Square
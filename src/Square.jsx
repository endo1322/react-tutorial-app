import { memo, useContext } from 'react'
import { SquareContext } from "./components/providers/SquareProvider"

const Square = memo((props) => {
  // console.log("Square")
  const {gameInfo, setGameInfo} = useContext(SquareContext)
  const { status, history, xIsNext } = gameInfo
  return (
    <div>
        <button className="bg-slate-200 border-2 float-left text-xl font-bold leading-8 h-10 ml-px
        mb-px p-0 text-center w-10" onClick={() => {props.onClick()}}>
          {history[0].squares[props.i]}
        </button>
    </div>
  )
})

export default Square
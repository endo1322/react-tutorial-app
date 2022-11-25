import Square from "./Square"

const RenderSquare = (props) => {
    // console.log("-----RenderSquare-----")
    let classname = null
    let retList = []
    if (props.winLine) {
      const [a, b, c] = props.winLine
      classname = "bg-green-300 hover:bg-teal-400 float-left text-xl leading-8 h-10 ml-px mb-px p-0 text-center w-10"
      if (props.i === a || props.i === b || props.i === c) {
        retList = <Square i={props.i} classname={classname} onClick={() => props.onClick()}/>
      } else {
        classname = "bg-slate-200 hover:bg-sky-400 float-left text-xl leading-8 h-10 ml-px mb-px p-0 text-center w-10"
        retList = <Square i={props.i} classname={classname} onClick={() => props.onClick()}/>
      }
    } else {
      classname = "bg-slate-200 hover:bg-sky-400 float-left text-xl leading-8 h-10 ml-px mb-px p-0 text-center w-10"
      retList = <Square i={props.i} classname={classname} onClick={() => props.onClick()}/>
    }
    
    return (
      <>{retList}</>
    );
  }

  
  export default RenderSquare
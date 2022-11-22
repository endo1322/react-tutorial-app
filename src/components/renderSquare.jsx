import Square from "../Square"

const RenderSquare = (props) => {
    // console.log("-----RenderSquare-----")    
    
    return (
      <Square
        i={props.i}
        classname={"bg-slate-200 hover:bg-sky-400 border-2 float-left text-xl font-bold leading-8 h-10 ml-px mb-px p-0 text-center w-10"}
        onClick={() => props.onClick()}
      />
    );
  }

  
  export default RenderSquare
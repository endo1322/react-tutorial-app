import Square from "../Square"

const RenderSquare = (props) => {
    // console.log("-----RenderSquare-----")    
    
    return (
      <Square
        i={props.i}
        onClick={() => props.onClick()}
      />
    );
  }

  
  export default RenderSquare
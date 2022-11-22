import React, { memo } from 'react'
import RenderSquare from "./components/renderSquare"

const Board = (props) => {
  console.log("-----Bord-----")
  const retList = [];
  for (let i = 0; i < 3; i++) {
    const renderList = [];
    for (let j = 0; j < 3; j++) {
      renderList.push(<RenderSquare i={i*3+j} key={i*3+j} onClick={() => props.onClick(i*3+j)}/>)
    }
    retList.push(<div className="clear-both content-none" id={i} key={i}>{renderList}</div>)
  }

  return (
    <div>
      {retList}
      {/* {(() => {
        const items = [];
        let count = 0;
        for (let i = 0; i < 3; i++) {
            items.push(<div className="clear-both content-none" id={i}>
              {(() => {
                const inItems = []
                for (let j = 0; j < 3; j++) {
                    inItems.push(<RenderSquare i={count} key={count} onClick={() => props.onClick(count)}/>)
                    count++;
                }
                return inItems;
              })()}
            </div>)
        }
        console.log(items)
        return <ul>{items}</ul>;
      })()} */}
          {/* <div className="clear-both content-none">
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
          </div> */}
    </div>
  )
}

export default Board
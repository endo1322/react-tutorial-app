import React from 'react'
import RenderSquare from "./RenderSquare"

const Board = (props) => {
  console.log("-----Bord-----")
  const retList = [];
  for (let i = 0; i < 3; i++) {
    const renderList = [];
    for (let j = 0; j < 3; j++) {
      renderList.push(<RenderSquare i={i*3+j} key={i*3+j} onClick={() => props.onClick(i*3+j)} winLine={props.winLine}/>)
    }
    retList.push(<div className="flex items-center justify-center" id={i} key={i}>{renderList}</div>)
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
    </div>
  )
}

export default Board
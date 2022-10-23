import React from 'react'

const Square = (props) => {
  return (
    <div>
        <button className="bg-slate-200 border-2 float-left text-6xl font-bold leading-8 h-40 ml-px
        mb-px p-0 text-center w-40" onClick={() => console.log('click')}>
          {props.value}
        </button>
    </div>
  )
}

export default Square
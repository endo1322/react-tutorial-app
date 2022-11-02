import React, { useState } from 'react'

const Square = (props) => {
  // const [status, setStatus] = useState(null)

  return (
    <div>
        <button className="bg-slate-200 border-2 float-left text-6xl font-bold leading-8 h-40 ml-px
        mb-px p-0 text-center w-40" onClick={() => props.onClick()}>
          {props.value}
        </button>
    </div>
  )
}

export default Square
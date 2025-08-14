import React from 'react'

const button = (props) => {
  return (
    <div>
        {props.children}
        <button onClick={props.handleclick}>
            {props.text}
    
    </button>
    </div>
   
  )
}

export default button

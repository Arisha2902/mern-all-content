import React from 'react'

const Card = (props) => {
  return (
    <div>
      <input type="text" onChange={(e)=> props.setName(e.target.value) }/>
        <h1>{props.name}</h1>
    </div>
  )
}

export default Card

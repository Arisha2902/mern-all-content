import React from 'react'
import ss from '../assets/ss.jpg'
import "./UserCard.css"

const UserCard = (props) => {
  return (
    <div className='user-container' style={props.style}>
      <p id='user-name'>{props.name}</p>
      <img id='user-img' src={ss} alt="one"  />
      <p id='user-desc'>discription of hello</p>
    </div>
  )
}

export default UserCard

import React from 'react'
import { useNavigate } from 'react-router-dom'
// import 

const Home = () => {
   
  const navigate = useNavigate();
  function handleClick() {
    navigate( '/about');
  }


  return (
    <div>
      Home vbb
      <button onClick={handleClick}>
        move to about 
      </button>
    </div>
  )
}

export default Home

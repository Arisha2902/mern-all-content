
import './App.css'
import { useState } from 'react'
import LoginBtn from './componets/LoginBtn'
import LogoutBtn from './componets/LogoutBtn'

function App() {
  const[isLoggedIn, setIsLoggedIn] =useState(true)

  if(!isLoggedIn){
    return(
      < LoginBtn />
    )
  }



  return(
  <div>
    <h1> welcome</h1>
    <div>
      {isLoggedIn && <LogoutBtn />}
    </div>
  </div>  
  )
  
  // ternary operator
  // return (
  //   <div>
  //     {isLoggedIn ? <LogoutBtn /> : <LoginBtn />}
  //   </div>
  // )

  // if-else
  // if(isLoggedIn){
  //   return (
  //     <LogoutBtn />
  //   )

  // }
  // else{
  //   return (
  //     <LoginBtn />
  //   )

  // }
  

}

export default App

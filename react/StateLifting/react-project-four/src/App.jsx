import { useState } from 'react'
import './App.css'
import Card from './components/Card'

function App() {
  //create and manage state and change the state
  const [name, setName] =useState('')
  return (
    <div>
       <Card name={name} setName={setName} />
       <p> I am inside parent and value of name is {name}</p>
    </div>
   
   
  )
}

export default App

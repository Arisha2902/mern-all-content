import './App.css'
import React, { useState } from 'react'
import button from './components/button'

import Card from './components/Card'


function App() {
  const [count, setCount] = useState(0);

  function handleclick() {
    setCount(count + 1)
  }

  return (
    <div>
      <h1>{count} </h1>
      <button handleclick ={handleclick} text="click me" >Click me </button>
      <h1>{count}</h1>
      {/* <Card name="arisha">
        <h1>hello</h1>
        <p>world</p>
        <p>learning new things</p>
      </Card> */}
    </div>
  )
}

export default App

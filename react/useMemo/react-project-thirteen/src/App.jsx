import { useMemo, useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] =useState(0)
  const [input, setInput] = useState(0)
  
  function expensiveTask(num){
    console.log('Expensive task started')
    for (let i = 0; i < 100000000; i++) {}
      return num * 2
  }
  //  let doublevalue = expensiveTask(input)
   let doublevalue =  useMemo(() => expensiveTask(input), [input])


  return (
   <div>
    <button onClick={() => setCount(count + 1)}>
      Increment
    </button>
    <p>Count: {count}</p>
    <input type="text" placeholder='enter number' value={input} onChange={(e) => setInput(e.target.value)}/>
    <div>Double :{doublevalue}</div>
   </div>
    
  )
}

export default App

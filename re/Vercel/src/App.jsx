import { useCallback, useState } from 'react'
import ChildComponents from './components/ChildComponents'
import './App.css'

function App() {
   const [count, setCount] = useState(0)


   let handleClick = useCallback(() => {
    setCount(count + 1)
   }, [count]);
 
  return (
  <div>
    <div>
      Count: {count}
    </div>
    <br />
    <div>
      <button onClick={handleClick}>click me</button>
    </div>
    <div>
      <ChildComponents buttonName="Click me"
      handleClick={handleClick}
      />
    </div>
  </div>
  )
}

export default App

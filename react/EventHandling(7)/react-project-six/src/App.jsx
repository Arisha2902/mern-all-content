
import './App.css'

function App() {

  function handleClick() {
    alert('Button clicked!');
  }
  
  function handleMouseOver() {
    alert('Mouse over the text!');
  }

  return (
   <div>

    <p onMouseOver={handleMouseOver}  style={{border:"3px solid black"}}>My first React app</p>
    {/* <button onClick={handleClick} >
     */}
    <button onClick={() => alert('Button clicked!')}>
      Click me
    </button>
   </div>
     
  )
}

export default App

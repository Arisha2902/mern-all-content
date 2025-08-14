
import { useSelector,useDispatch } from 'react-redux'
import { useState } from 'react';
import './App.css'
import { increment,decrement,reset,incrementByAmount } from './features/counter/counterSlice';

function App() {
   const [amount,setamount] = useState(0);
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  function handleIncrementClick() {
    dispatch(increment());
  }
 
  function handleDecrementClick() {
    dispatch(decrement());                                                         
  }

  function handleReset() {
    dispatch(reset());
  }
  function handleIncAmtClick() {
    dispatch(incrementByAmount(amount));
  }

  return (
    <div className='container'>                                
     <button onClick={handleIncrementClick}>+</button>
     <p> Count:{count} </p>
     <button onClick={handleDecrementClick}>-</button>
     <br />
     <button onClick={handleReset}>Reset</button>
     <input type="number" value={amount} 
     placeholder="enter amount" 
     onChange={(e) => setamount(e.target.value)}  />
     <br />
     <br />
     <button onClick={handleIncAmtClick}>Inc by amount</button>
    </div>

  )
}

export default App

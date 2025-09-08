
import './App.css'
import { useEffect } from 'react'   
import DataFetcher from './components/DataFetcher'
import ResizeComponents from './components/ResizeComponents'

function App() {

//  useEffect(() => {
//   // first h vo side-efect contain krta h
//   // second h vo side-effect clean-up function
//   // third h vo dependency array h
//   First 

//   return () => {
//     Second
//     }
//   }, [third] )
 

  return (
   <div>
    {/* <DataFetcher /> */}
    < ResizeComponents />
   </div>
  )
}

export default App

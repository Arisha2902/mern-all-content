import React from 'react'
import {Route, Routes} from "react-router"
import HomePage from './pages/HomePage'
import CreatePage from './pages/CreatePage'
import NoteDetailPage from './pages/NoteDetailPage'
import {toast } from "react-hot-toast"


const App = () => {
  return (
    <div data-theme="coffee">
    {/* <div > */}
        {/* <button onClick={() => toast.error("confrats") } className='text-red-500 p-4'> Click me</button> */}
        <button  onClick={() => toast.error("confrats") } className='btn btn-circle btn-primary'>Click</button>
        <button className="btn btn-neutral">Neutral</button>
<button className="btn btn-primary">Primary</button>
<button className="btn btn-secondary">Secondary</button>
<button className="btn btn-accent">Accent</button>
<button className="btn btn-info">Info</button>
<button className="btn btn-success">Success</button>
<button className="btn btn-warning">Warning</button>
<button className="btn btn-error">Error</button>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/create" element={<CreatePage />} />
        <Route path="/note/:id" element={<NoteDetailPage />} />
        
      </Routes>
    </div>
  )
}

export default App

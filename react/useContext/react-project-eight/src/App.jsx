
import './App.css'
import { createContext ,useState } from 'react';
import ChildA from './components/ChildA'

// step1: create a context
// const UserContext =createContext();

// step2: create a provider,  wrap  all child inside a provider
// step3: pass the value
// step4: consumer ke andr jake consume kr lo

const ThemeContext = createContext();


function App() {
  // const [user, setUser] = useState({name: "John", age: 30});
  const [theme, setTheme] = useState("light");
  
  return (
    <ThemeContext.Provider value={{theme , setTheme}}>
      <div id="container" style={{backgroundColor: theme === "light" ? "#ebe993" : "black", color: theme === "light" ? "black" : "#ebe993"}}>
      <ChildA />
      </div>
    </ThemeContext.Provider>
    //  <>
    //  hi
      /* <UserContext.Provider value={user}>
        <ChildA />
        </UserContext.Provider> */
    //  </>
  )
}

export default App
// export { UserContext };
export { ThemeContext };

import React, {useContext} from 'react'
// import { UserContext } from '../App'
import { ThemeContext } from '../App'

const ChildC = () => {
    // const user = useContext(UserContext)
    const {theme,setTheme } = useContext(ThemeContext)
    function handleClick() {
        if (theme === "light") {
            setTheme("dark")
        }
        else {
            setTheme("light")
        }
    }
  return (
    <div>
      {/* hi {user.name} from ChildC */}
      {/* {theme} */}
      <button onClick={handleClick} >
        Change Theme
      </button>
    </div>
  )
}

export default ChildC

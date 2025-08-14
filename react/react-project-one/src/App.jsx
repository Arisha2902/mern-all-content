import UserCard from "./components/UserCard"

function App() {
  

  return (
    <div className="container" >
      <UserCard name="Babbar" style={{"border-radius":"10px"}} />
      <UserCard name="king" />
      <UserCard name="queen" />
    </div>
  )
}

export default App

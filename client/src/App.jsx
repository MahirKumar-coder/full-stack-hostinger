import { useEffect, useState } from "react"


const App = () => {
  const [message, setMessage] = useState("")
  useEffect(() => {
    fetch("http://localhost:4000/api/message")
    .then(res => res.json())
    .then(data => setMessage(data.message))
    .catch((err) => {
      console.log("Error fetching message", err);
      
    })
  }, [])
  
  return (
    <>
    <h1>Welcome to Mahir Frontend</h1>
    <h2>data {message} </h2>
    </>
  )
}

export default App
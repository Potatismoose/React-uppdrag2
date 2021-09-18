import { useLocation } from "react-router"
import { useState } from "react"

export const HomeView = () => {
  const location = useLocation()
  const [lastpage, setLastpage] = useState(location.state == "/" ? "/home" : location.state)
  console.log(location)
  return (
    <div>
      <p>Du besökte tidigare {lastpage}</p>
      <h1>Home view</h1>
      
      
    </div>
  )
}

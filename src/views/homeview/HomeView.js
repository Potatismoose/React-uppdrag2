import { useLocation } from "react-router"
import { useState } from "react"
import './HomeView.css'

export const HomeView = () => {
  const location = useLocation()
  const [lastpage] = useState(location.state === "/" ? "/home" : location.state)
  
  console.log(location)
  return (
    <div className="main">
      
      { lastpage ? <p>Du besökte tidigare {lastpage}</p> : null }
      <h1>Home view</h1>
      
      
    </div>
  )
}

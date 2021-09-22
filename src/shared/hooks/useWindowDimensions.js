import { useState, useEffect } from "react";

const getWindowDimensions = () =>{
  const {innerWidth: width, innerHeight: height} = window;
  return {width, height}

}

export const useWindowDimensions = () =>{

  useEffect(() => {
    window.addEventListener('resize', handleResize)
    return () => {
    window.removeEventListener('resize', handleResize)
    }
  }, [])

  const [windowDimensions, setwindowDimensions] = useState(getWindowDimensions())

  const handleResize = () =>{
    setwindowDimensions(getWindowDimensions())
  }
  return windowDimensions
}


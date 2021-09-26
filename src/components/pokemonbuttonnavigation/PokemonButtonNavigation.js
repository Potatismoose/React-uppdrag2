import { useContext } from "react"
import React from 'react'
import './PokemonButtonNavigation.css'
import { OffsetContext } from "../../shared/provider/OffsetProvider"
import { numberOfResultsToShow } from "../../shared/api/service/PokemonApiService"

export const PokemonButtonNavigation = () => {
 
  
  const [offsetObject, doneObject] = useContext(OffsetContext)
  const {offset} = offsetObject
  const [contextOffsetValue, setContextOffsetValue] = offset
  
 
  
  
  return (
    <div className="pokemonNavigation">
      

      <button className="pokemon--nav--button" 
      
      onClick={
        () => setContextOffsetValue(
          contextOffsetValue -numberOfResultsToShow < 0 ?
           0 : contextOffsetValue -numberOfResultsToShow
        )}>Previous
      </button>

      <button className="pokemon--nav--button" 
      
      onClick={
        () => setContextOffsetValue(
          contextOffsetValue + numberOfResultsToShow > 898 ? 
          898 : contextOffsetValue+numberOfResultsToShow)
        
        }>Next
      </button>

      <div className="valueText"><p>Visar pokemon:  
        {contextOffsetValue+1} - {contextOffsetValue+numberOfResultsToShow} </p></div>
      
    </div>
  )
}

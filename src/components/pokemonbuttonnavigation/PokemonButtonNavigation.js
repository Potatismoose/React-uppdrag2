import { useContext } from "react"
import React from 'react'
import './PokemonButtonNavigation.css'
import { OffsetContext } from "../../shared/provider/OffsetProvider"
import { numberOfResultsToGet } from "../../shared/api/service/PokemonApiService"

export const PokemonButtonNavigation = () => {
 
  
  const [offsetObject, doneObject] = useContext(OffsetContext)
  const {offset} = offsetObject
  const [contextOffsetValue, setContextOffsetValue] = offset
 console.log(numberOfResultsToGet)
 
  
  return (
    <div className="pokemonNavigation">
      

      <button className="pokemon--nav--button" 
      
      onClick={
        () => setContextOffsetValue((contextOffsetValue -numberOfResultsToGet < 0 ? 0 : contextOffsetValue -numberOfResultsToGet
        ))}>Previous
      </button>

      <button className="pokemon--nav--button" 
      
      onClick={
        () => setContextOffsetValue((contextOffsetValue + numberOfResultsToGet) > 1118 ? 1118 : contextOffsetValue+numberOfResultsToGet
        )}>Next
      </button>

      <div className="valueText"><p>Visar pokemon {contextOffsetValue+1} - {contextOffsetValue+numberOfResultsToGet} </p></div>
      
    </div>
  )
}

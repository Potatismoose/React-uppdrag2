import { useContext } from "react"
import React from 'react'
import './PokemonButtonNavigation.css'
import { OffsetContext } from "../../shared/provider/OffsetProvider"

export const PokemonButtonNavigation = () => {
 
  const numberOfPokemonsToShowAtATime = 15
  const [contextOffsetValue, setContextOffsetValue] = useContext(OffsetContext)
  
  return (
    <div className="pokemonNavigation">
      

      <button className="pokemon--nav--button" 
      
      onClick={
        () => setContextOffsetValue((contextOffsetValue -numberOfPokemonsToShowAtATime < 0 ? 0 : contextOffsetValue -numberOfPokemonsToShowAtATime
        ))}>Previous
      </button>

      <button className="pokemon--nav--button" 
      
      onClick={
        () => setContextOffsetValue((contextOffsetValue + numberOfPokemonsToShowAtATime) > 1118 ? 1118 : contextOffsetValue+numberOfPokemonsToShowAtATime
        )}>Next
      </button>

      <div className="valueText"><p>Visar pokemon {contextOffsetValue+1} - {contextOffsetValue+15} </p></div>
      
    </div>
  )
}

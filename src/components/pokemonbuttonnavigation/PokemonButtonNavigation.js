import { useState, useContext } from "react"
import React from 'react'
import CreateMyContext from '../../shared/global/Context/CreateContext'
import './PokemonButtonNavigation.css'

export const PokemonButtonNavigation = () => {
  const numberOfPokemonsToShowAtATime = 30
  const {value, setValue} = useContext(CreateMyContext)
  const {render, setrender} = useContext(CreateMyContext)
  const [pokemonNumber, setPokemonNumber] = useState(numberOfPokemonsToShowAtATime)
  
  return (
    <div className="pokemonNavigation">
      <p className="valueText">OffsetVärdet är {value} </p>

      <button className="pokemon--nav--button"onClick={
        () => setValue(
          prevItems => {
            return(prevItems-pokemonNumber < 0 ? 0 : prevItems-pokemonNumber)
            }
            )}>Previous</button>

      <button className="pokemon--nav--button" onClick={
        () => setValue(
          prevItems => {
            return(prevItems+pokemonNumber > 1118 ? 1118 : prevItems+pokemonNumber)
            }
            )}>
      Next</button>

    </div>
  )
}

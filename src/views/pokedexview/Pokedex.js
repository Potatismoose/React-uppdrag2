import { useState, useContext} from "react"
import { Pokemoncard } from "../../components/pokemoncard/Pokemoncard"
import { Favourites } from "../../components/favourites/Favourites"
import { PokemonContext } from "../../shared/provider/PokemonProvider"
import './Pokedex.css'
import {useLocation} from 'react-router-dom'
import { OffsetContext } from "../../shared/provider/OffsetProvider"
import { numberOfResultsToShow } from '../../shared/api/service/PokemonApiService'
// import {PokemonButtonNavigation} from '../../components/pokemonbuttonnavigation/PokemonButtonNavigation'

export const Pokedex= () => {
  const [offsetObject, doneObject] = useContext(OffsetContext)
  const {offset} = offsetObject
  const {doneState} = doneObject
  const [contextOffsetValue] = offset
  const [done] = doneState
  const [pm] = useContext(PokemonContext)
  const {pokemonList} = pm
  const [contextPokemon] = pokemonList

  const [showFavourites] = useState(false)
  const location = useLocation()
  const [lastpage] = useState(location.state === "/" ? "/home" : location.state)

function getPokemonsToDisplay()
{
  
  const thePokemonsToDisplay = []
  for (let index = contextOffsetValue; index < contextOffsetValue+numberOfResultsToShow; index++) {
    thePokemonsToDisplay.push(contextPokemon[index])
  }

  return (thePokemonsToDisplay.map(x => {return x}))
}

  return (
      <main className="main">
        <div className="yellow--top">
        <p>{lastpage ? "Du besökte tidigare " + lastpage : null}</p>
        <h1>The Pokedex</h1>
        </div>
        {showFavourites ? <Favourites /> : null}

        {/* {done ? <PokemonButtonNavigation /> : null} */}
        <section className="pokecards" >
        {
          done ? getPokemonsToDisplay().map(pm => 
            {
              return (<Pokemoncard key={Math.random()} pokemon={pm}/>)
            })

          : <div className="loading--container"><h2 className="info--not--loaded">Loading, please wait</h2>
          <div className="loader"></div></div>}

        </section>

{/* {done ? <PokemonButtonNavigation /> : null} */}

      </main>

  )
}

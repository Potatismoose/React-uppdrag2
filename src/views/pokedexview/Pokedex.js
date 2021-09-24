import { useState, useEffect, useContext} from "react"
import { Pokemoncard } from "../../components/pokemoncard/Pokemoncard"
import { Favourites } from "../../components/favourites/Favourites"
import { PokemonContext } from "../../shared/provider/PokemonProvider"
import './Pokedex.css'
import {useLocation} from 'react-router-dom'
import { OffsetContext } from "../../shared/provider/OffsetProvider"

import {PokemonButtonNavigation} from '../../components/pokemonbuttonnavigation/PokemonButtonNavigation'

export const Pokedex= () => {
  const [offsetObject, doneObject] = useContext(OffsetContext)
  const {offset} = offsetObject
  const {doneState} = doneObject
  const [contextOffsetValue, setContextOffsetValue] = offset
  const [done, setDone] = doneState
  
 
  
  const [pokemonInformation, setPokemonInformation] = useContext(PokemonContext)
  const [showFavourites] = useState(false)
  const location = useLocation()
  const [lastpage] = useState(location.state === "/" ? "/home" : location.state)
  
  
  
  




  return (
      <main className="main">
        <p className="lastpage">{lastpage ? "Du besökte tidigare " + lastpage : null}</p>
        {showFavourites ? <Favourites /> : null}
        
        
        {done ? <PokemonButtonNavigation /> : null}
        <section className="pokecards" >
        {
          done ? 
          pokemonInformation?.pokemonList[0].map((pokemon) => {
            
          return (<Pokemoncard pokemon={pokemon}/>
          
            )
          }): <div className="loading--container"><h2 className="info--not--loaded">Loading, please wait</h2>
          <div className="loader"></div></div>}
        
        </section>

{done ? <PokemonButtonNavigation /> : null}
        
      </main>

  )
}

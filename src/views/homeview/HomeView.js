import { useLocation } from "react-router"
import './HomeView.css'
import { useState, useEffect, useContext} from "react"
import { PokemonContext } from "../../shared/provider/PokemonProvider"
import { OffsetContext } from "../../shared/provider/OffsetProvider"
import {numberOfResultsToGet} from '../../shared/api/service/PokemonApiService'
import { PokemonInformation } from "../../components/pokemoninformation/PokemonInformation"



export const HomeView = () => {
  const location = useLocation()
  const [lastpage] = useState(location.state === "/" ? "/home" : location.state)
  const [randomPokemon, setrandomPokemon] = useState(null)
  const [pm, dl] = useContext(PokemonContext)
  const {pokemonList} = pm
  const [contextPokemon] = pokemonList
  const {detailsList} = dl
  const [contextDetailsPokemon] = detailsList
  const [off, ds] = useContext(OffsetContext)
  const {doneState} = ds
  const [done] = doneState
  
function calculateRandomPokemon(){ 
  setrandomPokemon(Math.floor(Math.random()*contextPokemon.length))
}

  useEffect(() => {
    if(contextPokemon.length >= numberOfResultsToGet)
    {
        calculateRandomPokemon()
    }
  }, [contextPokemon])

  useEffect(() => {
    if(randomPokemon === null)
    {
      if(contextPokemon.length === numberOfResultsToGet)
      {
          calculateRandomPokemon() 
      }
    }  
  }, [randomPokemon])

function getDetails(pokemon){
  return contextDetailsPokemon.find(p => p.name === pokemon.name )
}

  return (
    <div className="main">
      <div className="yellow--top">
      { lastpage ? <p>Du besökte tidigare {lastpage}</p> : null }
      <h1>Your Random Pokemon</h1><button className="random--btn" onClick={() => calculateRandomPokemon()}>randomize new</button>
      </div>
      <div className="info--container">
      {done && randomPokemon ? 
      // <PokemonContext.provider value={[randomPokemon, setrandomPokemon]}>
      <PokemonInformation 
        keyvalue={Math.random()}
        pokemon={contextPokemon[randomPokemon]} 
        details={getDetails(contextPokemon[randomPokemon])}
      /> 
      // </PokemonContext.provider>
      : <div className="loading--container"><h2 className="info--not--loaded">Loading, please wait</h2>
      <div className="loader"></div></div>}

      </div>
      
    </div>
  )
}

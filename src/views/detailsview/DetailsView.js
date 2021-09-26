import { useLocation } from "react-router"
import { useHistory } from "react-router"
import './DetailsView.css'
import { useState, useEffect, useContext} from "react"
import { PokemonContext } from "../../shared/provider/PokemonProvider"
import { PokemonInformation } from "../../components/pokemoninformation/PokemonInformation"




export const DetailsView = () => {
  const history  = useHistory()
  const location = useLocation()
  const [pokemonId] = useState(location.state)
  const [pm, dl] = useContext(PokemonContext)
  const {pokemonList} = pm
  const [contextPokemon, setContextPokemon] = pokemonList
  const {detailsList} = dl
  const [contextDetailsPokemon, setContextDetailsPokemon] = detailsList
  const [clickedPokemon, setClickedPokemon] = useState()
  const [clickedPokemonDetails, setClickedPokemonDetails] = useState(null)
  const [readyToRender, setReadyToRender] = useState(false)

  useEffect(() => {
  setReadyToRender(false)
  
  }, [])

  useEffect(() => {
   if(pokemonId != null)
   {
     setClickedPokemon(contextPokemon.find((pm) => {return pm.id === pokemonId}))
   }
   
  }, [pokemonId])

  useEffect(() => {
    if(clickedPokemon != null)
    {
     setClickedPokemonDetails(getDetails(clickedPokemon))
    }
  }, [clickedPokemon])

  useEffect(() => {
    if(clickedPokemonDetails != null)
    {
      setReadyToRender(true)
    }
  }, [clickedPokemonDetails])

function getDetails(pokemon){
  
  return contextDetailsPokemon.find(p => {
    return p.name == pokemon.species.name
    
  })
}

  return (
    <div className="main">
      <div className="yellow--top">
      
      <h1>Pokemon details</h1><button className="random--btn" onClick={() => history.goBack()}>Back to pokedex</button>
      </div>
      <div className="info--container">
      {readyToRender ?
      <PokemonInformation keyValue={Math.random()} pokemon={clickedPokemon} details={clickedPokemonDetails}/> : null
      }
      
      
      

      </div>
      
    </div>
  )
}

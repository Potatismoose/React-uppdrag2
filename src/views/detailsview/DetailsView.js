import { useLocation } from "react-router"
import { useHistory } from "react-router"
import './DetailsView.css'
import { useState, useEffect, useContext} from "react"
import { PokemonContext } from "../../shared/provider/PokemonProvider"
import { PokemonInformation } from "../../components/pokemoninformation/PokemonInformation"




export const DetailsView = () => {
  const history  = useHistory()
  const location = useLocation()
  const [pokemonId, setPokemonId] = useState(location.state)
  const [pm, dl] = useContext(PokemonContext)
  const {pokemonList} = pm
  const [contextPokemon] = pokemonList
  const {detailsList} = dl
  const [contextDetailsPokemon] = detailsList
  const [clickedPokemon, setClickedPokemon] = useState()
  const [clickedPokemonDetails, setClickedPokemonDetails] = useState(null)
  const [readyToRender, setReadyToRender] = useState(false)

  useEffect(() => {
  setReadyToRender(false)
  
  }, [])

  useEffect(() => {
   if(pokemonId != null)
   {
     setReadyToRender(false)
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
    return p.name === pokemon.species.name
    
  })
}

  return (
    <div className="main">
      <div className="yellow--top">
      
      <h1>Pokemon details</h1><button className="random--btn" onClick={() => history.goBack()}>Back to pokedex</button>
      </div>
      
      <div className="detailsview--pokemon--container">
        
        
        {readyToRender ?
          <PokemonInformation keyValue={Math.random()} pokemon={clickedPokemon} details={clickedPokemonDetails}/> 
          : null
        }
        <div className="pokemon--change--nav">
        <div className="arrow" onClick={() => setPokemonId(pokemonId-1 < 1 ? 898 : pokemonId-1)}><i className="fas fa-chevron-left arrow--size"></i></div> 
          <div className="arrow" onClick={() => setPokemonId(pokemonId+1 > 898 ? 1 : pokemonId+1)}><i className="fas fa-chevron-right arrow--size"></i></div>
            
        </div>
        
         
      </div>
      
      
    </div>
  )
}

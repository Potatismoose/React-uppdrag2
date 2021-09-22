import { useState, useEffect, useContext} from "react"
import { Pokemoncard } from "../../components/pokemoncard/Pokemoncard"
import { Favourites } from "../../components/favourites/Favourites"
import { OffsetContext } from "../../shared/provider/OffsetProvider"
import './Pokedex.css'
import {useLocation} from 'react-router-dom'
import PokemonApiService from "../../shared/api/service/PokemonApiService"
import {PokemonButtonNavigation} from '../../components/pokemonbuttonnavigation/PokemonButtonNavigation'

export const Pokedex= () => {
  const [contextOffsetValue, setContextOffsetValue] = useContext(OffsetContext)

  const [showFavourites] = useState(false)
  const location = useLocation()
  const [lastpage] = useState(location.state === "/" ? "/home" : location.state)
  const [serverResponse, setServerResponse] = useState()
  const [pokemonInformation, setPokemonInformation] = useState([])
  const [counter, setcounter] = useState(0)
  const [done, setDone] = useState(false)
  

useEffect(() => {  
  setPokemonInformation([])
  fetchDataList()
}, [contextOffsetValue])

useEffect(() => {
  
  if(serverResponse)
  {
    serverResponse.map((pokemon) => fetchSpecificPokemon(pokemon.url))
    setServerResponse(null)
  }
}, [serverResponse]);

useEffect(() => {
  
  pokemonInformation.length >= 15 ? setDone(true) : setDone(false)
    
}, [pokemonInformation]);

// useEffect(() => {
//   setcounter((counter) => {return counter + 1})  
  
// }, [pokemonInformation]);

const fetchDataList = async() =>{
  
  try{
    
    const response = await PokemonApiService.performSearch(
    PokemonApiService.automatedListSearch(contextOffsetValue))
    setServerResponse(response.data.results)
  }

  catch(error){
    console.log("Error retrieving data from server" + error)
  }
}

const fetchSpecificPokemon = async(address) =>{
  
    let slicedAddress = address.split("pokemon/")
  
  
  try{
    
    const response = await PokemonApiService.performSearch(
      PokemonApiService.searchSinglePokemon(slicedAddress[1]))
      
    if(pokemonInformation.length === 15)
    {
      setPokemonInformation([response.data])
    }
    else{
      setPokemonInformation((pokemonInformation) => { return [...pokemonInformation, response.data] })
    }
    
  }
  catch(error){
    console.log("Error retrieving data from server" + error)
  }
}

  return (
      <main className="main">
        <p className="lastpage">Du besökte tidigare {lastpage}</p>
        {showFavourites ? <Favourites /> : null}
        
        
        <PokemonButtonNavigation />
        <section className="pokecards" >
        {
          done ? 
          pokemonInformation?.map((pokemon) => {
            
          return (<Pokemoncard pokemon={pokemon}/>
          
            )
          }): null
        }
        </section>

        <PokemonButtonNavigation />
        
      </main>

  )
}

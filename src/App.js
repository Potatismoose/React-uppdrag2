
import { useState, useEffect} from "react"
import { OffsetContext } from "../src/shared/provider/OffsetProvider"
import { PokemonContext } from '../src/shared/provider/PokemonProvider' 
import {Routes} from "./routes/Routes"
import {Navigation} from "./components/navigation/Navigation"
import './App.css'
import {Footer} from './components/footer/Footer'
import PokemonApiService, {numberOfResultsToGet} from './shared/api/service/PokemonApiService'

function App() {
  const [contextOffsetValue, setContextOffsetValue] = useState(0)
  const [contextPokemon, setContextPokemon] = useState([])
  const [contextDetailsPokemon, setContextDetailsPokemon] = useState([])
  const [serverResponse, setServerResponse] = useState()
  const [done, setDone] = useState(false)

  useEffect(() => {  
    setContextPokemon([])
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
    if(contextPokemon.length >= numberOfResultsToGet)
    {
      contextPokemon.sort(function(a, b){return a.id-b.id})
      contextPokemon.map(pokemon => fetchDetails(pokemon.species.url))
    }   
  }, [contextPokemon]);

  useEffect(() => {
    
    if(contextDetailsPokemon.length >= numberOfResultsToGet)
    {      
      setDone(true)
    }
    else{
      setDone(false)
    }    
  }, [contextDetailsPokemon]);


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
        
      if(contextPokemon.length === numberOfResultsToGet)
      {
        setContextPokemon([response.data])
      }
      else{
        setContextPokemon((contextPokemon) => { return [...contextPokemon, response.data] })
      }
      
    }
    catch(error){
      console.log("Error retrieving data from server" + error)
    }
  }

  const fetchDetails = async(address) =>{
    
    let slicedAddress = address.split("pokemon-species/")
    
  try{
    
    const response = await PokemonApiService.performSearch(
      PokemonApiService.searchDetailedSearch(slicedAddress[1]))
      
    if(contextDetailsPokemon.length === numberOfResultsToGet)
    {
      setContextDetailsPokemon([response.data])
    }
    else{
      setContextDetailsPokemon((contextDetailsPokemon) => { return [...contextDetailsPokemon, response.data] })
    }
    
  }
  catch(error){
    console.log("Error retrieving details from server" + error)
  }
}
  
  return (
    <div className="wrapper">
      <PokemonContext.Provider value={
        [
          {pokemonList: [contextPokemon, setContextPokemon]},
          {detailsList: [contextDetailsPokemon, setContextDetailsPokemon]}
        ]}>
      <OffsetContext.Provider value={
        [
          {offset: [contextOffsetValue, setContextOffsetValue]}, 
          {doneState: [done, setDone]}
        ]}>
        <Routes>
          <Navigation />
          <Footer />
        </Routes>
      </OffsetContext.Provider>
      </PokemonContext.Provider>
    </div>
  );
}

export default App;

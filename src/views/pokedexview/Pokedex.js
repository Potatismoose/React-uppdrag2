import { useState, useContext, useEffect, localStorage} from "react"
import { Pokemoncard } from "../../components/pokemoncard/Pokemoncard"
import { Favourites } from "../../components/favourites/Favourites"
import CreateContext from "../../shared/global/Context/CreateContext"
import './Pokedex.css'
import {useLocation} from 'react-router-dom'
import axios from "axios"


export const Pokedex= () => {
  const [showFavourites, setShowFavourites] = useState(false)
  const context = useContext(CreateContext)
  const location = useLocation()
  const [lastpage, setLastpage] = useState(location.state === "/" ? "/home" : location.state)
  const [serverResponse, setServerResponse] = useState()
  const [search, setSearch] = useState()
  const [searchField, setSearchField] = useState([])

useEffect(() => {
  fetchData()
}, [])

  const fetchData = async() =>{
    try{
      const response = await axios.get("https://pokeapi.co/api/v2/pokemon/1")
      setServerResponse(response)
      console.log(response.data.sprites.other["official-artwork"].front_default)
    }
    catch(error){
      console.log("Error retrieving data from server" + error)
    }
  }
  
  return (
      <main className="main">
        <p className="lastpage">Du besökte tidigare {lastpage}</p>
        {showFavourites ? <Favourites /> : null}
        <input 
          type="text"
          value={searchField} 
          className="input--field" 
          onChange={(element) => setSearchField((prevItems) => 
          {return[element.target.value]}
          )} 
        />
        
        <button onClick={() => setSearch(true)}>Fetch data </button>
        <section className="pokecards">
          
          {/* Få över sökfältet till sökfunktionen till API:n */}


          <Pokemoncard name={serverResponse?.data?.name} 
          image={serverResponse?.data?.sprites?.front_default}/>

          <Pokemoncard name={serverResponse?.data?.name} 
          image={serverResponse?.data.sprites.other["official-artwork"].front_default}/>

<Pokemoncard name={serverResponse?.data?.name} 
          image={serverResponse?.data.sprites.other["official-artwork"].front_default}/>
          <Pokemoncard name={serverResponse?.data?.name} 
          image={serverResponse?.data.sprites.other["official-artwork"].front_default}/>
          <Pokemoncard name={serverResponse?.data?.name} 
          image={serverResponse?.data.sprites.other["official-artwork"].front_default}/>
          <Pokemoncard name={serverResponse?.data?.name} 
          image={serverResponse?.data.sprites.other["official-artwork"].front_default}/>

          
        </section>
        
        
      </main>
    
  )
}

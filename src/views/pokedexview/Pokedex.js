import { useState, useContext, useEffect, localStorage} from "react"
import { Pokemoncard } from "../../components/pokemoncard/Pokemoncard"
import { Favourites } from "../../components/favourites/Favourites"
import CreateMyContext from "../../shared/global/Context/CreateContext"
import './Pokedex.css'
import {useLocation} from 'react-router-dom'
import axios from "axios"
import {PokemonButtonNavigation} from '../../components/pokemonbuttonnavigation/PokemonButtonNavigation'


export const Pokedex= () => {
  const [value, setValue] = useState(0)
  const [showFavourites, setShowFavourites] = useState(false)
  const location = useLocation()
  const [lastpage, setLastpage] = useState(location.state === "/" ? "/home" : location.state)
  const [serverResponse, setServerResponse] = useState()
  const [pokemonInformation, setpokemonInformation] = useState([])
  const [search, setSearch] = useState()
  const [searchField, setSearchField] = useState([])
  const [counter, setcounter] = useState(0)
  let butWhy

useEffect(() => {
  fetchDataList(value)
  console.log(counter)
}, [value])

useEffect(() => {
  if(serverResponse != null)
  {
    serverResponse.map((x) => fetchSpecificPokemon(x.url))

  }
}, [serverResponse]);

useEffect(() => {
  setcounter((counter) => {return counter + 1})
}, [pokemonInformation]);


const fetchDataList = async(offsetNo) =>{
  try{
    const response = await axios.get("https://pokeapi.co/api/v2/pokemon?limit=30&offset=" + offsetNo)
    const {results} = response.data
    // console.log(results)
    setServerResponse(results)

    // console.log(response.data.sprites.other["official-artwork"].front_default)
  }
  catch(error){
    console.log("Error retrieving data from server" + error)
  }
}

  const fetchSpecificPokemon = async(address) =>{

    try{
      const response = await axios.get(address)
      // console.log(response.data)
      setpokemonInformation((pokemonInformation) => { return[...pokemonInformation, response.data]})
      // setpokemonInformation(response.data)
      // console.log(response.data.sprites.other["official-artwork"].front_default)
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
        (<button onClick={() => console.log(serverResponse)}>
          Server Response
        </button>)
        <button onClick={() => setSearch(true)}>Fetch data </button>

        <CreateMyContext.Provider value={{value, setValue}}>

        <section className="pokecards" >
        {
          (counter -1) % 30 === 0 ? 
          pokemonInformation?.map((pokemon) => {
            
          return (<Pokemoncard pokemon={pokemon}/>
          
            )
          }): null
        }
        

        </section>

        <PokemonButtonNavigation />
        </CreateMyContext.Provider>
      </main>

  )
}

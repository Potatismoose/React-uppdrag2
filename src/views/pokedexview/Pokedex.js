import { useState, useContext, localStorage} from "react"
import { Pokemoncard } from "../../components/pokemoncard/Pokemoncard"
import { Favourites } from "../../components/favourites/Favourites"
import CreateContext from "../../shared/global/Context/CreateContext"
import './Pokedex.css'


export const Pokedex= () => {
  const [showFavourites, setShowFavourites] = useState(false)
  const context = useContext(CreateContext)
  const [lastpage, setLastpage] = useState(context)

  return (
      <main className="main">
        <p>{lastpage}</p>
        {showFavourites ? <Favourites /> : null}
        
        <section className="pokecards">
          <Pokemoncard />
          <Pokemoncard />
          <Pokemoncard />
          <Pokemoncard />
          <Pokemoncard />
          <Pokemoncard />
          <Pokemoncard />
          <Pokemoncard />
          <Pokemoncard />
          <Pokemoncard />
          <Pokemoncard />
          <Pokemoncard />
          <Pokemoncard />
          <Pokemoncard />
          <Pokemoncard />
          <Pokemoncard />
          <Pokemoncard />
          <Pokemoncard />
        </section>
        
        
      </main>
    
  )
}

import './PokemonInformation.css'
import React, {useState, useEffect} from 'react'
import { PokemonChart } from '../pokemonchart/PokemonChart'

export const PokemonInformation = ({pokemon, details, keyvalue}) => {

 
  function getEnglishDetailText(){
    const language ="en"
    const text = details?.flavor_text_entries?.find((x) => x.language.name === language)
    return text ? text.flavor_text.replace("", " ") : "No text availible" 
  }

  const [readyToRender, setReadyToRender] = useState(false)

  useEffect(() => {
    if(!readyToRender)
    {
      if(pokemon != null)
      {
        setReadyToRender(true)
      }
    }
  }, [readyToRender])
  

  return (
      readyToRender ?
      <article className="info--box" key={keyvalue}>
        <header className="info--header">
        <h1 className="info--header--name"><span className="info--header--id">{pokemon.id}</span> {pokemon.species.name.charAt(0).toUpperCase() + pokemon.species.name.slice(1)}</h1>
        
        </header>
        <div className="info--grid">
          <section className="info--pokemon--image">{pokemon ? <img src={pokemon?.sprites.other["official-artwork"].front_default} className="card--picture" alt="pokemon" /> : null}
          </section>
          <section className="info--pokemon--info">{getEnglishDetailText()}
          </section>
          <section className="info--pokemon--stats">
            <PokemonChart keyvalue={Math.random()} pokemon={pokemon} />
          </section>
          <footer className="info--pokemon--footer">
            
            </footer>
        </div>
      </article> : null
    
  )
}

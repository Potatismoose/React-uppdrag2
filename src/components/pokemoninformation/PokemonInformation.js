import './PokemonInformation.css'
import React, {useState, useEffect, useContext} from 'react'
import { PokemonChart } from '../pokemonchart/PokemonChart'
import PokemonTypes from '../../shared/global/PokemonTypes'


export const PokemonInformation = ({pokemon, details, keyvalue}) => {
  
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
 
  function getEnglishDetailText(){
    const language ="en"
    const text = details?.flavor_text_entries?.find((x) => x.language.name === language)
    return text ? text.flavor_text.replace("", " ") : "No text availible" 
  }
  function printCorrectClassNames(type, key){
    
    if(type.type.name === "fire" 
    || type.type.name === "poison"
    || type.type.name === "fighting"
    
    || type.type.name === "psychic")
    {
      return <div 
        key={key} 
        className="white--text type" 
        style={{background: PokemonTypes[key]}}
        > 
          {type.type.name}
        </div>
    }
    else{
      
      return <div 
        key={key} 
        className="type" 
        style={{background: PokemonTypes[key]}}
        > 
          {type.type.name}
        </div>
    }
  }

  function getDiv(type, key){ 
    for (const key in PokemonTypes) {   
      if(key === type.type.name){
        return printCorrectClassNames(type, key)
      }
    }
  }

  return (
      readyToRender ?
      <article className="info--box" key={keyvalue}>
        <header className="info--header">
        <h1 className="info--header--name"><span className="info--header--id">{pokemon.id}</span> {pokemon.species.name.charAt(0).toUpperCase() + pokemon.species.name.slice(1)}</h1>
        
        </header>
        <footer className="info--pokemon--footer">
            {pokemon.types.map((type) =>{ 
             return getDiv(type, Math.random())
              })}

        </footer>
        <div className="info--grid">
          <section className="info--pokemon--image">{pokemon ? <img src={pokemon?.sprites.other["official-artwork"].front_default} className="card--picture" alt="pokemon" /> : null}
          </section>
          <section className="info--pokemon--info">{getEnglishDetailText()}
          </section>
          <section className="info--pokemon--stats">
            <PokemonChart keyvalue={Math.random()} pokemon={pokemon} />
          </section>
          
        </div>
      </article> : null
    
  )
}

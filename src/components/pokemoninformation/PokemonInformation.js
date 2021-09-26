import './PokemonInformation.css'
import React, {useState, useContext} from 'react'
import { PokemonContext } from '../../shared/provider/PokemonProvider'
import { PokemonChart } from '../pokemonchart/PokemonChart'
import types from '../../shared/global/PokemonTypes'

export const PokemonInformation = ({pokemon, details, keyvalue}) => {

  // const [randomPokemon, setrandomPokemon] = useContext(PokemonContext)
  function getEnglishDetailText(){
    const language ="en"
    const text = details?.flavor_text_entries?.find((x) => x.language.name === language)
    return text ? text.flavor_text.replace("", " ") : "No text availible"
    
    
  }
  // function getColorForType(){
  //   for (const key in types){
      
  //     pokemon.types.map((x) => )
  //     pokemon.types.find()
        
        // (x) => {
        // return x.type.name == key ? types[key] : "white"
           
  //   }
  // }

  return (
    
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
            
            {/* <h1>{console.log(getColorForType())}</h1> */}
            {/* <button onClick={setrandomPokemon(null)}>Randomize new pokemon</button> */}
            </footer>
        </div>
      </article>
    
  )
}

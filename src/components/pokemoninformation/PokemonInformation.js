import './PokemonInformation.css'
import React from 'react'

export const PokemonInformation = ({pokemon, details}) => {

  function getEnglishDetailText(){
    const text = details?.flavor_text_entries?.find((x) => x.language.name == "en")
    
    return text ? text.flavor_text.replace("", " ") : "No text availible"
    
    
  }
  return (
    
      <article className="info--box">
        <header className="info--header">
        <h1 className="info--header--name">{pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}</h1>
        <h1 className="info--header--id">{pokemon.id}</h1>
        </header>
        <div className="info--grid">
          <section className="info--pokemon--image">{pokemon ? <img src={pokemon?.sprites.other["official-artwork"].front_default} className="card--picture" alt="pokemon" /> : null}
          </section>
          <section className="info--pokemon--info">{getEnglishDetailText()}
          </section>
          <section className="info--pokemon--stats">This is the stats
          </section>
          <footer className="info--pokemon--footer">This is the footer</footer>
        </div>
      </article>
    
  )
}

import React from 'react'
import './Pokemoncard.css'

export const Pokemoncard = () => {
  return (
    <div className="pokemoncard">
      <div className="pokemon--container">
        <div className="about--pokemon">
          <div className="card--header">
          Pikachu
          </div>
          <div className="card--picture">Picture here</div>
          <div className="stats">
          <span className="stat--item">Cp: 175</span>
          <span className="stat--item">Attack: 94 </span>
          <span className="stat--item">Special attack: 114</span>
          </div>
        </div>
        <footer className="card--footer">
        Card footer
        </footer>
      </div>
    </div>
  )
}

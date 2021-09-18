import React from 'react'
import './Pokemoncard.css'

export const Pokemoncard = (props) => {
  return (
    <div className="pokemoncard">
      <div className="pokemon--container">
        <div className="about--pokemon">
          <div className="card--header">
          {props.name}-fsdfdsgfdsgfdsgdfsgdf
          </div>
          <div>{props.image ? <img src={props.image} className="card--picture" alt="pokemon image" /> : null}</div>
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

import React from 'react'
import './Pokemoncard.css'
import { useHistory } from 'react-router'
import {details} from '../../routes/RoutingPaths'

export const Pokemoncard = (props) => {
  const history = useHistory()
const idTag = "#"

  function formatId(id){
    if(id<10)
    return(idTag + "000" + id)
    else if(id <100)
    return(idTag + "00" + id)
    else  if(id < 1000)
    return(idTag + "0" + id)
    else
    return(idTag + id)
  }

  
  let name = props.pokemon?.species.name.charAt(0).toUpperCase() + props.pokemon?.species.name.slice(1)
  
  return (
    
    <div key={Math.random()} className="pokemoncard" onClick={() => history.push(details, props.pokemon.id)}>
      
      <div className="pokemon--container">
        <div className="about--pokemon">
          <div className="card--header">
          <span>{name}</span>
          <span className="pokemon--hp">
          {props?.pokemon?.stats[0].stat.name.charAt(0).toUpperCase() +
          props?.pokemon?.stats[0].stat.name.slice(1)} {props?.pokemon?.stats[0].base_stat}</span>
            <span className="pokemon--id">
            {formatId(props?.pokemon?.id)}</span>
          </div>
          <div className="image--container">{props?.pokemon ? <img src={props?.pokemon?.sprites?.other["official-artwork"]?.front_default} className="card--picture" alt="pokemon" /> : null}</div>
          <div className="stats">
          <span className="stat--item">{
          props?.pokemon?.stats[0].stat.name.charAt(0).toUpperCase() +
          props?.pokemon?.stats[0].stat.name.slice(1)}: {props?.pokemon?.stats[0].base_stat}</span>
          <span className="stat--item">{
          props?.pokemon?.stats[1].stat.name.charAt(0).toUpperCase() +
          props?.pokemon?.stats[1].stat.name.slice(1)}: {props?.pokemon?.stats[1].base_stat}</span>
          <span className="stat--item">{
          props?.pokemon?.stats[2].stat.name.charAt(0).toUpperCase() +
          props?.pokemon?.stats[2].stat.name.slice(1)}: {props?.pokemon?.stats[2].base_stat}</span>
          <span className="stat--item">{
          props?.pokemon?.stats[3].stat.name.charAt(0).toUpperCase() +
          props?.pokemon?.stats[3].stat.name.slice(1)}: {props?.pokemon?.stats[3].base_stat}</span>
          <span className="stat--item">{
          props?.pokemon?.stats[4].stat.name.charAt(0).toUpperCase() +
          props?.pokemon?.stats[4].stat.name.slice(1)}: {props?.pokemon?.stats[4].base_stat}</span>
          <span className="stat--item">{
          props?.pokemon?.stats[5].stat.name.charAt(0).toUpperCase() +
          props?.pokemon?.stats[5].stat.name.slice(1)}: {props?.pokemon?.stats[5].base_stat}</span>
         
          </div>
        </div>
        <footer className="card--footer">
        
        </footer>
      </div>
    </div>
  )
}

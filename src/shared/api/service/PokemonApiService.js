import http from '../PokemonApi'
import {SearchDefaultStringSinglePokemon, limitWithOffsetSearch} from '../PokemonApiSettings'
const numberOfResultsToGet = 15

const searchSinglePokemon = (pokemonNumberOrName) => {
  
return  "/pokemon/" + pokemonNumberOrName
}

const automatedListSearch = (offsetValue) =>{
  const numberOfResultsToGet = 15
  return "/pokemon?limit=" + numberOfResultsToGet + "&offset=" + offsetValue
}

const performSearch = (endpoint) => {
  return http.get(endpoint)
}

export default {performSearch, searchSinglePokemon, automatedListSearch}
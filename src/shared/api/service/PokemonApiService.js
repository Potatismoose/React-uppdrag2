import http from '../PokemonApi'
const numberOfResultsToGet = 898
const numberOfResultsToShow = 108

const searchSinglePokemon = (pokemonNumberOrName) => {
  
return  "/pokemon/" + pokemonNumberOrName
}

const searchDetailedSearch = (pokemonNumberOrName) => {
  
  return  "/pokemon-species/" + pokemonNumberOrName
  }

const automatedListSearch = (offsetValue) =>{
  return "/pokemon?limit=" + numberOfResultsToGet + "&offset=" + offsetValue
}

const performSearch = (endpoint) => {
  return http.get(endpoint)
}

export default {performSearch, searchSinglePokemon, automatedListSearch, searchDetailedSearch}
export {numberOfResultsToGet, numberOfResultsToShow}
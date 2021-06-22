import {
  CREATE_POKEMON,
  GET_TYPES,
  GET_POKEMONS,
  GET_POKEMON_DETAIL,
  SEARCH_POKEMON,
  FILTER_POKEMON,
  ORDER_POKEMON
  } from "../Actions/actionTypes";

const initialState = {
    pokemonList: [],
    pokemonTypes: [],
    pokemonDetail: {},
    pokemonCreated:[],
    pokemonSearched: [],
    pokemonFiltered: []
}

const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_POKEMONS:
            return {
                ...state,
                /* pokemonList: state.pokemonCreated.concat(action.payload) */ // asi lo tenia antes para cargar ambos pokemones en el estado de redux pero lo solucione desde el Backend
                pokemonList: action.payload,
                pokemonSearched: [],
                pokemonFiltered: []
            }
        case GET_POKEMON_DETAIL:
            return {
                ...state,
                pokemonDetail: action.payload,
                /* pokemonDetailTypes: Object.assign({},state.pokemonList.filter(p => p.id === action.payload.id)).map(p => {return {poke:p.nombre}}) */
            }
        case GET_TYPES:
            return {
                ...state,
                pokemonTypes: action.payload
            }
        case SEARCH_POKEMON:
            return {
                ...state,
                pokemonSearched: [action.payload]
            }
        case CREATE_POKEMON:
            return {
                ...state,
                pokemonCreated: state.pokemonCreated.concat(action.payload)
            }  
        case FILTER_POKEMON:
            return {
                ...state,
                pokemonFiltered: action.payload
            }    
        
        default:
            return state
    }
}

export default rootReducer
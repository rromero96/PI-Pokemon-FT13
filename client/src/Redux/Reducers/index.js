import {
  CREATE_POKEMON,
  GET_TYPES,
  GET_POKEMONS,
  GET_POKEMON_DETAIL,
  SEARCH_POKEMON,
  FILTER_POKEMON,
  ORDER_POKEMON,
  CREATOR_POKEMON
  } from "../Actions/actionTypes";

const initialState = {
    pokemonList: [],
    pokemonTypes: [],
    pokemonDetail: {},
    pokemonCreated:[],
    pokemonSearched: [],
    pokemonFiltered: [],
    pokemonOrder:[],
    pokemonCreator:[]
}

const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_POKEMONS:
            return {
                ...state,
                pokemonList: action.payload
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
                pokemonSearched: action.payload //[action.payload]
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
        case ORDER_POKEMON:
            return {
                ...state,
                pokemonOrder: action.payload
            }
        case CREATOR_POKEMON:
            return {
                ...state,
                pokemonCreator: action.payload
            }             
        
        default:
            return state
    }
}

export default rootReducer
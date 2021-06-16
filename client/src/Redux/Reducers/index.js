import {
  CREATE_POKEMON,
  GET_TYPES,
  GET_POKEMONS,
  GET_POKEMON_DETAIL,
  SEARCH_POKEMON
  } from "../Actions/actionTypes";

const initialState = {
    pokemonList: [],
    pokemonTypes: [],
    pokemonDetail: {},
    pokemonCreated:[],
}

const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_POKEMONS:
            return {
                ...state,
                pokemonList: state.pokemonCreated.concat(action.payload)
            }
        case GET_POKEMON_DETAIL:
            return {
                ...state,
                pokemonDetail: action.payload
            }
        case GET_TYPES:
            return {
                ...state,
                pokemonTypes: action.payload
            }
        case SEARCH_POKEMON:
            return {
                ...state,
                pokemonDetail: action.payload
            }
        case CREATE_POKEMON:
            return {
                ...state,
                pokemonCreated: action.payload
            }  

        default:
            return state
    }
}

export default rootReducer
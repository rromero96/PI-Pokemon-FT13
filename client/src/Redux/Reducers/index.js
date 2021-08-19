import {
  CREATE_POKEMON,
  GET_TYPES,
  GET_POKEMONS,
  GET_POKEMON_DETAIL,
  SEARCH_POKEMON,
  FILTER_POKEMON,
  ORDER_POKEMON,
  CREATOR_POKEMON,
  SET_PAGE
  } from "../Actions/actionTypes";

const initialState = {
    pokemonList: [],
    pokemonTypes: [],
    pokemonDetail: {},
    pokemonCreated:[],
    pokemonSearched: [],
    pokemonFiltered: [],
    totalPages: 0,
    actualPage: 1,
    orderBy: "",
    orderType: "",
    pokemonCreator:[]
}

const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_POKEMONS:
            return {
                ...state,
                pokemonList: Array.isArray(action.payload.pokeDB) ? action.payload.pokeDB : [action.payload.pokeDB],
                totalPages: action.payload.totalPage,

            }
        case GET_POKEMON_DETAIL:
            return {
                ...state,
                pokemonDetail: action.payload,
                actualPage: 1,
            }
        case GET_TYPES:
            return {
                ...state,
                pokemonTypes: action.payload
            }
        case SEARCH_POKEMON:
            return {
                ...state,
                pokemonSearched: action.payload
            }
        case CREATE_POKEMON:
            return {
                ...state,
                pokemonCreated: state.pokemonCreated.concat(action.payload),
            }  
        case FILTER_POKEMON:
            return {
                ...state,
                pokemonFiltered: action.payload,
                actualPage: 1,
            }
        case SET_PAGE:
            return {
                ...state,
                actualPage: action.payload,
            };  
        case ORDER_POKEMON:
            return {
                ...state,
                orderBy: action.payload[0],
                orderType: action.payload[1],
                actualPage: 1,
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
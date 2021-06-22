import axios from 'axios';
import {
  CREATE_POKEMON,
  GET_TYPES,
  GET_POKEMONS,
  GET_POKEMON_DETAIL,
  SEARCH_POKEMON,
  FILTER_POKEMON,
  ORDER_POKEMON
} from "./actionTypes";




export const getPokemons = () => async (dispatch) => {
  try {
    const res = await axios.get("http://localhost:3001/pokemons");
    dispatch({type: GET_POKEMONS , payload: res.data});
  } catch (err) {
    console.log(err);
  }
};

export const getPokemonDetail = (id) => async (dispatch) => {
  try {
    const res = await axios.get("http://localhost:3001/pokemons/" + id);
    dispatch({type: GET_POKEMON_DETAIL , payload: res.data});
  } catch (err) {
    dispatch({type: GET_POKEMON_DETAIL , payload: null})
  }
};



export const clearPokemonDetail = () => {
  return {
    type: GET_POKEMON_DETAIL , payload: undefined
  }
}

export const getTypes = () => async (dispatch) => {
  try {
    const res = await axios.get("http://localhost:3001/types");
    dispatch({type: GET_TYPES , payload: res.data});
  } catch (err) {
    console.log(err);
  }
};

 export const searchPokemon = (name) => async (dispatch) => {
  try {
    const res = await axios.get("http://localhost:3001/pokemons?name=" + name);
    dispatch({type: SEARCH_POKEMON , payload: res.data});
  } catch (err) {
    /* dispatch({type: SEARCH_POKEMON , payload: null}); */
  }
};

export const newPokemon = (pokemon) => async (dispatch) => {
  try {
    const res = await axios.post("http://localhost:3001/pokemons", pokemon);
    dispatch({type: CREATE_POKEMON , payload: res.data});
  } catch (err) {
    console.log(err);
  }
}; 


export const filterPokemon = (types, array) => (dispatch) =>{
  console.log(types);
  const type1 = new RegExp(types);
  const res = array.filter(c => c.types.match(type1));
  dispatch({type: FILTER_POKEMON, payload: [...res]})

};

export const filterApi = (creator, array) => (dispatch) => {
  console.log(creator);
  if(creator === 'api') {
   const res = array.filter(c  =>typeof c.id === 'number')
   dispatch({type: FILTER_POKEMON, payload: [...res]})
  }
  if(creator === 'db') {
   const res = array.filter(c  =>typeof c.id === 'string')
   dispatch({type: FILTER_POKEMON, payload: [...res]})
  } 
  if(creator === 'all') {
    dispatch({type: FILTER_POKEMON, payload: [...array]})
  }
 
}

export const orderApi = (condition, array) => (dispatch) => {
  
}


export const GetPokemonOrigin = (origin, array) => {
}; 



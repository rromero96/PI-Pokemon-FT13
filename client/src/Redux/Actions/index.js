import axios from 'axios';
import {
  CREATE_POKEMON,
  GET_TYPES,
  GET_POKEMONS,
  GET_POKEMON_DETAIL,
  SEARCH_POKEMON,
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
    if(err.res !== 404) alert("There has been an ERROR")
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
    console.log(err);
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

  


/* export const newPokemon = (pokemon) => async (dispatch) => {  
    function onSuccess(success) {
      dispatch({ type: CREATE_POKEMON, payload: success });
      return success;
    }
    try {
      const res = await axios.post("http://localhost:3001/pokemons", pokemon);
      return onSuccess(success);
    } catch (err) {
      console.log(err);
    }
  
} */
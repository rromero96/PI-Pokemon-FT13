import axios from 'axios';
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
} from "./actionTypes";




export const getPokemons = (name, type, orderBy, orderType, filter, page) => async (dispatch) => {
  try {
    const res = await axios.get(`/pokemons?name=${name}&type=${type}&orderBy=${orderBy}&orderType=${orderType}&filter=${filter}&page=${page}`);
    dispatch({type: GET_POKEMONS , payload: res.data});
  } catch (err) {
    console.log(err);
  }
};


export const getPokemonDetail = (id) => async (dispatch) => {
  try {
    const res = await axios.get(`/pokemons/` + id);
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
export const newPokemon = (pokemon) => async (dispatch) => {
  try {
    const res = await axios.post(`/pokemons`, pokemon);
    dispatch({type: CREATE_POKEMON , payload: "success"});
  } catch (err) {
    dispatch({ type: CREATE_POKEMON, payload: "error" });
  }
}; 

export const resetPokemonState = () => (dispatch) => dispatch({type: CREATE_POKEMON, payload: ""})

export const getTypes = () => async (dispatch) => {
  try {
    const res = await axios.get(`/types`);
    dispatch({type: GET_TYPES , payload: res.data});
  } catch (err) {
    console.log(err);
  }
};


export const searchPokemon = (name) => {
  return (dispatch) => {
    dispatch({ type: SEARCH_POKEMON, payload: name });
  };
} 


export const orderPokemon = (orderActual) => {
  const or = orderActual.split(" ");
  return (dispatch) => {
    dispatch({ type: ORDER_POKEMON, payload: or });
  };
};


export const filterPokemon = (type)  =>{
  return (dispatch) => {
    dispatch({ type: FILTER_POKEMON, payload: type });
  };

}

export const filterPokemonCreator = (filter)  =>{
  return (dispatch) => {
    dispatch({ type: CREATOR_POKEMON, payload: filter });
  };

}

export const setPage = (page) => {
  return (dispatch) => {
    dispatch({ type: SET_PAGE, payload: page });
  };
};






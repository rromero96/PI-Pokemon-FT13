import axios from 'axios';
import {
  CREATE_POKEMON,
  GET_TYPES,
  GET_POKEMONS,
  GET_POKEMON_DETAIL,
  SEARCH_POKEMON,
  FILTER_POKEMON,
  ORDER_POKEMON,
  CREATOR_POKEMON
} from "./actionTypes";




export const getPokemons = (name, type, order, filter) => async (dispatch) => {
  try {
    const res = await axios.get(`http://localhost:3001/pokemons?name=${name}&type=${type}&order=${order}&filter=${filter}`);
    dispatch({type: GET_POKEMONS , payload: res.data});
  } catch (err) {
    console.log(err);
  }
};

/* export function getAllProducts(name, page, orderBy, orderType, category, descFilter) {
  return async function (dispatch) {
    var json = await axios(
      `${url}/products?page=${page}&name=${name}&orderBy=${orderBy}&orderType=${orderType}&category=${category}&descFilter=${descFilter}`
    );
    return dispatch({ type: GET_ALL_PRODUCTS, payload: json.data });
  };
}; */


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
export const newPokemon = (pokemon) => async (dispatch) => {
  try {
    const res = await axios.post("http://localhost:3001/pokemons", pokemon);
    dispatch({type: CREATE_POKEMON , payload: res.data}, alert("POKEMON CREATED OK"));
  } catch (err) {
    alert("ERROR Pokemon not Created");
  }
}; 

export const getTypes = () => async (dispatch) => {
  try {
    const res = await axios.get("http://localhost:3001/types");
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


export const orderPokemon = (order) => {
  return (dispatch) => {
    dispatch({ type: ORDER_POKEMON, payload: order });
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






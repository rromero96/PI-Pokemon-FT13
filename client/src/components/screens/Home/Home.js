import './Home.css';
import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux'
import {getPokemons, getTypes} from '../../../Redux/Actions/index.js'
import Pokemon from '../../component/Pokemon/Pokemon'




export function Home() {
    const dispatch = useDispatch();
    const pokemonList = useSelector(state => state.pokemonList)
    const pokeTypes = useSelector(state => state.pokemonTypes)

    useEffect(() =>{
        dispatch(getPokemons());
        dispatch(getTypes());
    },[dispatch])

    return (
        <div>
          {pokemonList.map((pokemon)=> (
            <Pokemon key={pokemon.id} pokemon={pokemon}></Pokemon>
              ))}
        </div>
    )
}


export default Home
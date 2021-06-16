import '../../component/Pokemon/Pokemon.css';
import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux'
import {getPokemons, getTypes} from '../../../Redux/Actions/index.js'
import Pokemon from '../../component/Pokemon/Pokemon'
import { Link } from 'react-router-dom';




export function Home() {
    const dispatch = useDispatch();
    const pokemonList = useSelector(state => state.pokemonList)
    const pokeTypes = useSelector(state => state.pokemonTypes)

    useEffect(() =>{
        dispatch(getPokemons());
        dispatch(getTypes());
    },[dispatch])

    return (
            <div className="row center">
                {pokemonList.map((pokemon)=> (
                <Link to={`/pokeDetail/${pokemon.id}`}>
                <Pokemon key={pokemon.id} pokemon={pokemon}></Pokemon>
                </Link>
              ))}
            </div>
    )
}


export default Home
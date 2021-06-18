import '../../component/Pokemon/Pokemon.css';
import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux'
import {getPokemons, getTypes} from '../../../Redux/Actions/index.js'
import Pokemon from '../../component/Pokemon/Pokemon'
import { Link } from 'react-router-dom';





export function Home() {
    const dispatch = useDispatch();
    const pokemonList = useSelector(state => state.pokemonList)
    const pokemonTypes = useSelector(state => state.pokemonTypes)
    const [input, setInput] = useState({
        type1: '',
  
       });

    useEffect(() =>{
        dispatch(getPokemons());
        dispatch(getTypes());
    },[dispatch])

    const handleInputChange = function(e) {
        setInput({
          ...input,
          [e.target.name]: e.target.value
        });
      }

    return (
            <div>
                <span>Filter By</span>
                <select className="type" name="type" value={input.id} onChange={handleInputChange}>
                    <option value='null'>null</option>
                    <option value='Api Poke'>Api Poke</option>
                    <option value='Created Poke'>Created Poke</option>
                    {pokemonTypes && pokemonTypes.map(c => (
                    <option value={c.id} name="c.name">{c.name}</option>
                    ))}
                </select>  
            <span>Order By</span>
                <select className="type" name="type"  onChange={handleInputChange}>
                    <option value='null'>null</option>
                    <option value='az' name='az'>A - Z</option>
                    <option value='za' name='za'>Z - A</option>
                    <option value='attack+' name='null'>Attack +</option>
                    <option value='attack-' name='null'>Attack -</option>
                    
                </select>  
                <div className="row center">
                {
                Array.isArray(pokemonList) ? pokemonList.map(pokemon=> (
                    <Link to={`/pokeDetail/${pokemon.id}`}>
                <Pokemon key={pokemon.id} pokemon={pokemon}></Pokemon>
                    </Link>
              )): <h1>Cargando ...</h1>
              }
              </div>
            </div>
            
    )
}


export default Home
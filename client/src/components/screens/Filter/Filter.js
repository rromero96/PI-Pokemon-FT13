import React, {useState} from 'react';
import {useDispatch, useSelector} from 'react-redux'
import './Filter.css'
import {filterPokemon} from '../../../Redux/Actions/index.js'
import Pokemon from '../../component/Pokemon/Pokemon'
import { Link } from 'react-router-dom';

export function Filter() {
    const dispatch = useDispatch(); // falta use effect con estado para filtrar los pokemone

    const pokemonFiltered = useSelector(state => state.pokemonFiltered)
    const pokemonTypes = useSelector(state => state.pokemonTypes)
    const pokemonList = useSelector(state => state.pokemonList);

    const [input, setInput] = useState({
        type1: '',
        order: '',
       });
    
       const handleInputChange = function(e) {
        setInput({
          ...input,
          [e.target.name]: e.target.value
        });

      }

      function filter(e) {
        dispatch(filterPokemon(e.target.value, pokemonList))
      }

      function filterApi(e) {
        dispatch(filterPokemon(e.target.value, pokemonList))
      }



    return (
        <div>
             <span>Filter By Type</span>
                <select className="type" name="type" key={input.type1.id} value={input.id} onChange={filter}>
                    <option value='null'>null</option>
                    {pokemonTypes && pokemonTypes.map((c, index) => (
                    <option value={c.name} key={index} name="c.name">{c.name}</option>
                    ))}
                </select>  
            <span>Filter By Creator</span>
            <select className="type" name="type" onChange={filterApi}>
                    <option value="null">null</option>
                    <option value="1">Api Poke</option>
                    <option value="2">Created Poke</option>
            </select>        
            <span>Order By</span>
                <select className="type" name="type" key='order' onChange={handleInputChange}>
                    <option value="null">null</option>
                    <option value="az" name='az'>A - Z</option>
                    <option value="za" name='za'>Z - A</option>
                    <option value="attack+" name='null'>Attack +</option>
                    <option value="attack-" name='null'>Attack -</option>
                    
                </select>  

                 <ul className='filter'>
                {
                    pokemonFiltered && pokemonFiltered.map((pokemon, index)=> (
                       <Link to={`/pokeDetail/${pokemon.id}`} style={{ textDecoration: 'none', color: 'black',}}>
                   <Pokemon key={index} pokemon={pokemon}></Pokemon>
                       </Link> 
                 )) 

              }
                </ul>
            
            
        </div>
    )
}



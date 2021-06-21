import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux'
import {getPokemons} from '../../../Redux/Actions/index.js'
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

    return (
        <div>
             <span>Filter By</span>
                <select className="type" name="type" key={input.type1.id} value={input.id} onChange={handleInputChange}>
                    <option value='null'>null</option>
                    <option value='Api Poke'>Api Poke</option>
                    <option value='Created Poke'>Created Poke</option>
                    {pokemonTypes && pokemonTypes.map((c, index) => (
                    <option value={c.id} key={index} name="c.name">{c.name}</option>
                    ))}
                </select>  
            <span>Order By</span>
                <select className="type" name="type" key='order' onChange={handleInputChange}>
                    <option value='null'>null</option>
                    <option value='az' name='az'>A - Z</option>
                    <option value='za' name='za'>Z - A</option>
                    <option value='attack+' name='null'>Attack +</option>
                    <option value='attack-' name='null'>Attack -</option>
                    
                </select>  
        </div>
    )
}



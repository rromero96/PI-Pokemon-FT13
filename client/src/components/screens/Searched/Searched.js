import React, {useState} from 'react';
import {useSelector} from 'react-redux'
import Pokemon from '../../component/Pokemon/Pokemon'
import { Link } from 'react-router-dom';


export function Searched() {
    const pokemonSearched =  useSelector(state => state.pokemonSearched)

    const [loading] = useState(false); 
    
    return (
        <div>
            <div className="row center"> 
                {
                 pokemonSearched ? pokemonSearched.map((pokemon, index)=> (
                    <Link to={`/pokeDetail/${pokemon.id}`} style={{ textDecoration: 'none', color: 'black' }}>
                <Pokemon key={index} pokemon={pokemon} loading={loading}></Pokemon>
                    </Link> 
              )): <h1>not found</h1>
              }
              </div>
            
        </div>
    )
}



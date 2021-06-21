import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux'
import Pokemon from '../../component/Pokemon/Pokemon'
import { Link } from 'react-router-dom';


export function Searched() {
    const dispatch = useDispatch();
    const ps =  useSelector(state => state.pokemonSearched)

    const [loading, setLoading] = useState(false); 
    
    return (
        <div>
            <div className="row center"> 
                {
                 ps ? ps.map((pokemon, index)=> (
                    <Link to={`/pokeDetail/${pokemon.id}`} style={{ textDecoration: 'none', color: 'black' }}>
                <Pokemon key={index} pokemon={pokemon} loading={loading}></Pokemon>
                    </Link> 
              )): <h1>not found</h1>
              }
              </div>
            
        </div>
    )
}



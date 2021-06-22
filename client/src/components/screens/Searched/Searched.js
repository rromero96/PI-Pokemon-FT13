import React, {useState} from 'react';
import {useSelector} from 'react-redux'
import Pokemon from '../../component/Pokemon/Pokemon'
import { Link } from 'react-router-dom';


export function Searched() {
    const pokemonSearched =  useSelector(state => state.pokemonSearched)

    const [loading] = useState(false); 

if(pokemonSearched === null) {
return (
    <div>
        <h1>Pokemon NOT FOUND!!</h1>
        <img src='https://media.giphy.com/media/yuI7fL5cR1YeA/giphy.gif' alt='pokemon img'/>
    </div>
    )
}else if (pokemonSearched === undefined) {
    return (
        <div>
                <h1>LOADING</h1>
            <img src='https://media.giphy.com/media/3oEjI6SIIHBdRxXI40/giphy.gif' alt='pokemon img'/>
        </div>
        )
    } else { 
    
    return (
        <div>
            <div className="row center"> 
                {
                 pokemonSearched.map((pokemon, index)=> (
                    <Link to={`/pokeDetail/${pokemon.id}`} style={{ textDecoration: 'none', color: 'black' }}>
                <Pokemon key={index} pokemon={pokemon} loading={loading}></Pokemon>
                    </Link> 
              ))
              }
              </div>
            
        </div>
    )
}

}

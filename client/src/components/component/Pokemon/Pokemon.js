import React from 'react'
import { Link } from 'react-router-dom';
import './Pokemon.css'

export default function Pokemon(props) {
    const {pokemon} = props;
    return (
            <div key={pokemon.id} className="card">
              <Link to={`/pokemons/${pokemon.id}`}>
              <img className="medium" src={pokemon.image} alt={pokemon.name} /> 
              <div class="card-body">
                <h2>{pokemon.name}</h2>
                  <h4>{pokemon.types}</h4>
              </div>
              </Link>
            </div>
    )
}


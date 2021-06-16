import React from 'react'
import './Pokemon.css'

export default function Pokemon(props) {
    const {pokemon} = props;
    return (
       
            <div className="row center">
                <div key={pokemon.id} className="card">
                  <img className="medium" src={pokemon.image} alt={pokemon.name} /> 
                  <div class="card-body">
                    <h2>{pokemon.name}</h2>
                      <h4>{pokemon.types}</h4>
                  </div>
                </div>
            </div>
    )
}


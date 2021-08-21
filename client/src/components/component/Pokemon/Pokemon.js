import React from 'react'
import './Pokemon.css'

export default function Pokemon(props) {
    const {pokemon} = props;
    
    return (
      
            <div className="row center">
                <div key={pokemon.id} className="card">
                  <img className="medium" src={pokemon.image} alt={pokemon.name} /> 
                  <div className="card-body">
                    <h2>{pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}</h2>
                      <h4>{pokemon.tipos[1] ? pokemon.tipos[0].name + ' ' + pokemon.tipos[1].name : pokemon.tipos[0].name}</h4>
                  </div>
                </div>
            </div>
    )
}

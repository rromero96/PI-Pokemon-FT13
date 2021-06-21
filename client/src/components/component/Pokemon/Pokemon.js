import React from 'react'
import './Pokemon.css'

export default function Pokemon(props) {
    const {pokemon, loading} = props;
    if(loading) {
      return <img src='https://media.giphy.com/media/3oEjI6SIIHBdRxXI40/giphy.gif' alt='pokemon img'/>
    }
    return (
            <div className="row center">
                <div key={pokemon.id} className="card">
                  <img className="medium" src={pokemon.image} alt={pokemon.name} /> 
                  <div className="card-body">
                    <h2>{pokemon.name}</h2>
                      <h4>{pokemon.types}</h4>
                  </div>
                </div>
            </div>
    )
}

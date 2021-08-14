import React from 'react';
import {useDispatch, useSelector} from 'react-redux'
import './Filter.css'
import {filterPokemon, filterPokemonCreator, orderPokemon} from '../../../Redux/Actions/index.js'

export function Filter() {
    const dispatch = useDispatch(); // falta use effect con estado para filtrar los pokemone

    const pokemonFiltered = useSelector(state => state.pokemonFiltered)
    const pokemonTypes = useSelector(state => state.pokemonTypes)
    const pokemonList = useSelector(state => state.pokemonList);


      function filter(e) {
        //dispatch(filterPokemon(e.target.value, pokemonList))
        dispatch(filterPokemon(e.target.value))

      }

      function filtApi(e) {
        //dispatch(filterApi(e.target.value, pokemonList))
        dispatch(filterPokemonCreator(e.target.value))
      }

      function ordApi(e) {
        //dispatch(orderApi(e.target.value, pokemonList))
        dispatch(orderPokemon(e.target.value))
      }



    return (
        <div>
          <div className="filter1">
             <span > By Type:</span>
                <select className="type" name="type"  onChange={filter} >
                    <option value='null'>Select</option>
                    {pokemonTypes && pokemonTypes.map((c, index) => (
                    <option value={c.name} key={index} name="c.name">{c.name}</option>
                    ))}
                </select>  
            <span> By Creator:</span>
            <select className="type" name="type" onChange={filtApi} >
                    <option value="null">Select</option>
                    <option value="all">All</option>
                    <option value="api">Api Poke</option>
                    <option value="db">Created Poke</option>
            </select>        
            <span>Order By:</span>
                <select className="type" name="type" key='order' onChange={ordApi} >
                    <option value="null">Select</option>
                    <option value="az" name='az'>A - Z</option>
                    <option value="za" name='za'>Z - A</option>
                    <option value="strongest" name='null'>Attack +</option>
                    <option value="weakest" name='null'>Attack -</option>                    
                </select>  
                </div>        
        </div>
    )
}



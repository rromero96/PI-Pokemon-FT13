import React from 'react';
import {useDispatch, useSelector} from 'react-redux'
import './Filter.css'
import {filterPokemon, filterPokemonCreator, orderPokemon} from '../../../Redux/Actions/index.js'

export function Filter() {
    const dispatch = useDispatch(); 

    const pokemonTypes = useSelector(state => state.pokemonTypes)
    const orderBy = useSelector(state => state.orderBy)
    const orderType = useSelector(state => state.orderType)
    const orderActual = orderBy + ' ' + orderType


      function filter(e) {
        dispatch(filterPokemon(e.target.value))

      }

      function filtApi(e) {
        dispatch(filterPokemonCreator(e.target.value))
      }

      function ordApiName(e) {
        dispatch(orderPokemon(e.target.value))
      }



    return (
        <div>
          <div className="filter1">
             <span > By Type:</span>
                <select className="type" name="type"  onChange={filter} >
                    <option value=''>Select</option>
                    {pokemonTypes && pokemonTypes.map((c, index) => (
                    <option value={c.name} key={index} name="c.name">{c.name}</option>
                    ))}
                </select>  
            <span> By Creator:</span>
            <select className="type" name="type" onChange={filtApi} >
                    <option value="">Select</option>
                    <option value="">All</option>
                    <option value="false">Api Poke</option>
                    <option value="true">Created Poke</option>
            </select>        
            <span>Order By:</span>
                <select className="type" name="type" value={orderActual} key='order'  onChange={ordApiName} >
                    <option key={1} value="    " >Select</option>
                    <option key={2} value={'name ASC'} name='az' >A - Z</option>
                    <option key={3} value={'name DESC'} name='za'>Z - A</option>
                    <option key={4} value={'attack ASC'} name='att+'>Attack +</option>
                    <option key={5} value={'attack DESC'} name='att-'>Attack -</option>                    
                </select>  
                </div>        
        </div>
    )
}








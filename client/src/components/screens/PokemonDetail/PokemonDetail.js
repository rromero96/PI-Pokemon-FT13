import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { getPokemonDetail, clearPokemonDetail } from '../../../Redux/Actions/index.js'
import React from 'react'
import './PokemonDetail.css'
import logo from './../../../images/loadings.gif'

export function PokemonDetail() {
    
    const dispatch = useDispatch();
    const pokemonDetail = useSelector(state => state.pokemonDetail);
    const {id} = useParams();

    useEffect(() =>{
        dispatch (getPokemonDetail(id));
        return () => {
            dispatch (clearPokemonDetail())
        }
    },[dispatch, id])

   
     

   
     if(pokemonDetail === null) {
        return (
            <div className='notFound'>
                <h1>Pokemon NOT FOUND!!</h1>
                <img src='https://media.giphy.com/media/yuI7fL5cR1YeA/giphy.gif' alt='pokemon img'/>
            </div>
            )
        }else if (pokemonDetail === undefined) {
            return (
                <div className='loading'>
                     <h1>LOADING</h1>
                    <img src={logo} alt='pokemon img'/>
                </div>
                )
            } else { 
                return  (<div className="detail">
                <div key={pokemonDetail.id} className="bigcard">
                    <img className="large" src={pokemonDetail.image} alt={pokemonDetail.name} /> 
                        <div className="card-body1">
                            <h2>Name: {pokemonDetail.name ? pokemonDetail.name.charAt(0).toUpperCase() + pokemonDetail.name.slice(1) : null}</h2> 
                            <h4>ID: {pokemonDetail.id}</h4>
                            <h4>Heigth: {pokemonDetail.height}</h4>
                            <h4>Weigth: {pokemonDetail.weight}</h4>
                            <h4>HP: {pokemonDetail.hp}</h4>
                            <h4>Attack: {pokemonDetail.attack}</h4>
                            <h4>Defense: {pokemonDetail.defense}</h4>
                            <h4>Speed: {pokemonDetail.speed}</h4>
                            <h4>Types: {pokemonDetail.tipos && pokemonDetail.tipos.length !== 1 ? pokemonDetail.tipos[0].name + ' ' + pokemonDetail.tipos[1].name : pokemonDetail.tipos && pokemonDetail.tipos.length === 1 ? pokemonDetail.tipos[0].name : null}</h4>
                        </div>
                </div>
            </div>)
    }
    
}





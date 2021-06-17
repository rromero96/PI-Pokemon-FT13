import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { getPokemonDetail } from '../../../Redux/Actions/index.js'
import React from 'react'
import './PokemonDetail.css'

export function PokemonDetail() {
    const dispatch = useDispatch();
    const pokemonDetail = useSelector(state => state.pokemonDetail);
    const {id} = useParams();

    useEffect(() =>{
        dispatch (getPokemonDetail(id));
    },[dispatch, id])

    return (
        <div>
            {pokemonDetail === undefined && <h1>Cargando...</h1>}
            {typeof pokemonDetail === "object" && (

            <div className="row center">
                <div key={pokemonDetail.id} className="card">
                    <img className="medium" src={pokemonDetail.image} alt={pokemonDetail.name} /> 
                        <div className="card-body">
                            <h2>Name: {pokemonDetail.name}</h2>
                            <h4>ID: {pokemonDetail.id}</h4>
                            <h4>Heigth: {pokemonDetail.height}</h4>
                            <h4>Weigth: {pokemonDetail.weight}</h4>
                            <h4>HP: {pokemonDetail.hp}</h4>
                            <h4>Attack: {pokemonDetail.attack}</h4>
                            <h4>Defense: {pokemonDetail.defense}</h4>
                            <h4>Speed: {pokemonDetail.speed}</h4>
                            <h4>Types: {pokemonDetail.types}</h4>
                        </div>
                </div>
            </div>
            )}
        </div>
    )
}



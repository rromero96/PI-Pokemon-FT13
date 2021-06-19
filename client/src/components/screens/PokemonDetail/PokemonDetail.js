import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { getPokemonDetail, clearPokemonDetail } from '../../../Redux/Actions/index.js'
import React from 'react'
import './PokemonDetail.css'

export function PokemonDetail() {
    
    const dispatch = useDispatch();
    const pokemonDetail = useSelector(state => state.pokemonDetail);
    const pokemonDetailTypes = useSelector(state => state.pokemonDetailTypes); 
    const {id} = useParams();

    useEffect(() =>{
        dispatch (getPokemonDetail(id));
        return () => {
            dispatch (clearPokemonDetail())
        }
    },[dispatch, id])

   
     

   
     if(pokemonDetail === null) {
        return (
            <h1>Pokemon NOT FOUND!!</h1>
            )
        }else if (pokemonDetail === undefined) {
            return (
                <h1>Cargando...</h1>
                )
            } else { 
                return  (<div className="row center">
                <div key={pokemonDetail.id} className="card">
                    <img className="medium" src={pokemonDetail.image ? pokemonDetail.image :"https://www.kindpng.com/picc/m/107-1075263_transparent-pokeball-png-pokemon-ball-2d-png-download.png"} alt={pokemonDetail.name} /> 
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
            </div>)
    }
    
}






/*return  (
    <div>
    {pokemonDetail.map((pokemonDetail) => (
 <div className="row center">
    <div key={pokemonDetail.id} className="card">
        <img className="medium" src={pokemonDetail.image ? pokemonDetail.image :"https://www.kindpng.com/picc/m/107-1075263_transparent-pokeball-png-pokemon-ball-2d-png-download.png"} alt={pokemonDetail.name} /> 
            <div className="card-body">
                <h2>Name: {pokemonDetail.name}</h2>
                 <h4>ID: {pokemonDetail.id}</h4>
                <h4>Heigth: {pokemonDetail.height}</h4>
                <h4>Weigth: {pokemonDetail.weight}</h4>
                <h4>HP: {pokemonDetail.hp}</h4>
                <h4>Attack: {pokemonDetail.attack}</h4>
                <h4>Defense: {pokemonDetail.defense}</h4>
                <h4>Speed: {pokemonDetail.speed}</h4> 
             <h4>Types: {pokemonDetail[0].types}</h4> 
            </div>
    </div>
</div>
))}
</div>
*/
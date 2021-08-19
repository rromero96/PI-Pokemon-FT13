import './Home.css'
import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux'
import {getPokemons, setPage} from '../../../Redux/Actions/index.js'
import Pokemon from '../../component/Pokemon/Pokemon'
import { Link } from 'react-router-dom';
import {Filter} from '../../component/Filter/Filter'





export function Home() {
    const dispatch = useDispatch();
    const pokemonList = useSelector(state => state.pokemonList)
    const name = useSelector(state => state.pokemonSearched)
    const page = useSelector(state => state.actualPage);
    const type = useSelector(state => state.pokemonFiltered)
    const orderBy =useSelector(state => state.orderBy)
    const orderType =useSelector(state => state.orderType)
    const filter = useSelector(state => state.pokemonCreator)
    let totalPages = useSelector((state) => state.totalPages);
    totalPages = Math.ceil(totalPages);

  
    
    useEffect(() =>{
        dispatch(getPokemons(name, type, orderBy, orderType, filter, page));
    },[dispatch, name, type, orderBy, orderType, filter, page])


      

    const prevPage = (e) => {
        e.preventDefault();
        dispatch(setPage(page - 1));
    };
    const nextPage = (e) => {
        e.preventDefault();
        dispatch(setPage(page + 1));
      }
      
 
    

   
    //if (!pokemonList.length /* && pokemonList.length !== 0 */) {
     if(pokemonList.length <1 && pokemonList.length > 0  && pokemonList.length !==1) {
    return (
        <div className='loading'>
            <h1>LOADING</h1>
            <img src='https://media.giphy.com/media/3oEjI6SIIHBdRxXI40/giphy.gif' alt='pokemon img'/>
        </div>
        )
    } 
    if(!pokemonList.length){
        return (
            <div className='notFound'>
            <h1>Pokemon NOT FOUND!!</h1>
            <img src='https://media.giphy.com/media/yuI7fL5cR1YeA/giphy.gif' alt='pokemon img'/>
        </div>
        )
    }
    else { 
        return  (
            <div className="home">     
            <div className="row center"> 
            <Filter className="filter"/>
            {
            pokemonList.map((pokemon, index)=> (
                <Link to={`/pokeDetail/${pokemon.id}`} style={{ textDecoration: 'none', color: 'black' }} key={index}>
            <Pokemon pokemon={pokemon}></Pokemon>
                </Link> 
        )) 
        }
        </div>
            <button className='prev' disabled={page === 1 ? true : false} onClick={prevPage}>{'Previous'}</button>
            <button className='next' disabled={page === totalPages ? true : false} onClick={nextPage}>{'Next'}</button>
        </div>
        )

    }            
}


export default Home



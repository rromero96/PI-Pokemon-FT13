import './Home.css'
import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux'
import {getPokemons} from '../../../Redux/Actions/index.js'
import Pokemon from '../../component/Pokemon/Pokemon'
import { Link } from 'react-router-dom';
import {Filter} from '../../component/Filter/Filter'





export function Home() {
    const dispatch = useDispatch();
    const pokemonList = useSelector(state => state.pokemonList)
    const name = useSelector(state => state.pokemonSearched)
    const type = useSelector(state => state.pokemonFiltered)
    const order =useSelector(state => state.pokemonOrder)
    const filter = useSelector(state => state.pokemonCreator)

    const [currentPage, setCurrentPage] = useState(1);
    const [pokemonsPerPage] = useState(12); 
    
    useEffect(() =>{
        dispatch(getPokemons(name, type, order, filter));
    },[dispatch, name, type, order, filter])


      
    /* const indexOfLastPost = currentPage * pokemonsPerPage;
    const indexOfFirstPost = indexOfLastPost - pokemonsPerPage;
    const currentPokemons = pokemonList.slice(indexOfFirstPost, indexOfLastPost);

    const pageNumber = Math.ceil(pokemonList.length / pokemonsPerPage);

    const nextPage = () => {
        if(currentPage < pageNumber) setCurrentPage(currentPage + 1);
        else setCurrentPage(1)
    }

    const prePage = () => {
        if(currentPage !== 1)  setCurrentPage(currentPage - 1);
        else setCurrentPage(pageNumber)
    } */
      
 
    

   
    //if (!pokemonList.length /* && pokemonList.length !== 0 */) {
     if(pokemonList.length < 2 && pokemonList.length !==1) {
    return (
        <div className='loading'>
            <h1>LOADING</h1>
            <img src='https://media.giphy.com/media/3oEjI6SIIHBdRxXI40/giphy.gif' alt='pokemon img'/>
        </div>
        )
    } 
    if(pokemonList.length ===0){
        return (
            <div className='notFound'>
            <h1>Pokemon NOT FOUND!!</h1>
            <img src='https://media.giphy.com/media/yuI7fL5cR1YeA/giphy.gif' alt='pokemon img'/>
        </div>
        )
    }else { 
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
            <button /* onClick={() => {prePage()}} */>Previous</button>
            <button /* onClick={() => {nextPage()}} */>Next</button>
        </div>
        )

    }            
}


export default Home



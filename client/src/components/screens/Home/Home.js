import './Home.css'
import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux'
import {getPokemons} from '../../../Redux/Actions/index.js'
import Pokemon from '../../component/Pokemon/Pokemon'
import { Link } from 'react-router-dom';





export function Home() {
    const dispatch = useDispatch();
    const pokemonList = useSelector(state => state.pokemonList)
    const [currentPage, setCurrentPage] = useState(1);
    const [pokemonsPerPage] = useState(12);
    
    useEffect(() =>{
        dispatch(getPokemons());

    },[dispatch])

    
      console.log(pokemonList);
      
      const indexOfLastPost = currentPage * pokemonsPerPage;
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
      }

    

   
    if (pokemonList.length < 12) {
    return (
        <div className='loading'>
            <h1>LOADING</h1>
            <img src='https://media.giphy.com/media/3oEjI6SIIHBdRxXI40/giphy.gif' alt='pokemon img'/>
        </div>
        )
    } else { 
        return  ( <div className="home">     
            <div className="row center"> 
            {
            currentPokemons.map((pokemon, index)=> (
                <Link to={`/pokeDetail/${pokemon.id}`} style={{ textDecoration: 'none', color: 'black' }}>
            <Pokemon key={index} pokemon={pokemon}></Pokemon>
                </Link> 
        )) 
        }
        </div>
            <button onClick={() => {prePage()}}>Previous</button>
            <button onClick={() => {nextPage()}}>Next</button>
        </div>)

    }            
}


export default Home



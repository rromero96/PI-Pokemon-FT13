import '../../component/Pokemon/Pokemon.css';
import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux'
import {getPokemons} from '../../../Redux/Actions/index.js'
import Pokemon from '../../component/Pokemon/Pokemon'
import { Link } from 'react-router-dom';





export function Home() {
    const dispatch = useDispatch();
    const pokemonList = useSelector(state => state.pokemonList)
    const [loading, setLoading] = useState(false); 
    const [currentPage, setCurrentPage] = useState(1);
    const [pokemonsPerPage] = useState(12);
    
    useEffect(() =>{
        setLoading(true);
        dispatch(getPokemons());
        setLoading(false);

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

    return (
            <div>     
                <div className="row center"> 
                {
                 currentPokemons.map((pokemon, index)=> (
                    <Link to={`/pokeDetail/${pokemon.id}`} style={{ textDecoration: 'none', color: 'black' }}>
                <Pokemon key={index} pokemon={pokemon} loading={loading}></Pokemon>
                    </Link> 
              )) 
              }
              </div>
              <div>
                  <button onClick={() => {prePage()}}>Previous</button>
                  <button onClick={() => {nextPage()}}>Next</button>
              </div>
            </div>
            
    )
}


export default Home





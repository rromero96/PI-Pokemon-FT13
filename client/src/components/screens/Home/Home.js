import '../../component/Pokemon/Pokemon.css';
import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux'
import {getPokemons} from '../../../Redux/Actions/index.js'
import Pokemon from '../../component/Pokemon/Pokemon'
import { Link } from 'react-router-dom';





export function Home() {
    const dispatch = useDispatch();
    const pokemonList = useSelector(state => state.pokemonList)
    const pokemonTypes = useSelector(state => state.pokemonTypes)
    const [input, setInput] = useState({
        type1: '',
        order: '',
       });

    const [loading, setLoading] = useState(false); 
    const [currentPage, setCurrentPage] = useState(1);
    const [pokemonsPerPage, setPokemonsPerPage] = useState(12);
    
    useEffect(() =>{
        setLoading(true);
        dispatch(getPokemons());
        setLoading(false);

    },[dispatch])

    const handleInputChange = function(e) {
        setInput({
          ...input,
          [e.target.name]: e.target.value
        });

      }
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
                <span>Filter By</span>
                <select className="type" name="type" key={input.type1.id} value={input.id} onChange={handleInputChange}>
                    <option value='null'>null</option>
                    <option value='Api Poke'>Api Poke</option>
                    <option value='Created Poke'>Created Poke</option>
                    {pokemonTypes && pokemonTypes.map((c, index) => (
                    <option value={c.id} key={index} name="c.name">{c.name}</option>
                    ))}
                </select>  
            <span>Order By</span>
                <select className="type" name="type" key='order' onChange={handleInputChange}>
                    <option value='null'>null</option>
                    <option value='az' name='az'>A - Z</option>
                    <option value='za' name='za'>Z - A</option>
                    <option value='attack+' name='null'>Attack +</option>
                    <option value='attack-' name='null'>Attack -</option>
                    
                </select>  
                <div className="row center"> 
                {
                 currentPokemons.map((pokemon, index)=> (
                    <Link to={`/pokeDetail/${pokemon.id}`}>
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




